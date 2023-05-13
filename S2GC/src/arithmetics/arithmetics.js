class Arithmetics {
  constructor() {}

  static createStandardSize(num, bits) {
    if (num.length < bits) {
      let result = "";
      for (let i = 1; i <= bits - num.length; i++) {
        result += "0";
      }
      return result + num;
    } else if (num.length > bits) {
      return num.slice(num.length - bits);
    } else {
      return num;
    }
  }

  static decimalToBinary(num) {
    let binEq = "";
    while (num != 0) {
      let rem = num % 2;
      binEq = rem.toString() + binEq;
      num = Math.floor(num / 2);
    }
    return binEq;
  }

  static binaryToDecimal(number) {
    let decEq = 0;
    let power = 0;
    for (let i = number.length - 1; i >= 0; i--) {
      let lastDigit = parseInt(number[i]);
      decEq += lastDigit * Math.pow(2, power);
      power += 1;
    }
    return decEq;
  }

  static add(num1, num2) {
    let sum = "";
    let carry = "0";
    let carryNMinus1 = carry;
    for (let i = num1.length - 1; i >= 0; i--) {
      carryNMinus1 = carry;
      if (num1[i] == num2[i] && carry == "1") {
        sum = "1" + sum;
        carry = num1[i] == "1" ? "1" : "0";
      } else if (num1[i] == num2[i] && carry == "0") {
        sum = "0" + sum;
        carry = num1[i] == "1" ? "1" : "0";
      } else if (num1[i] != num2[i] && carry == "1") {
        sum = "0" + sum;
        carry = "1";
      } else {
        sum = "1" + sum;
        carry = "0";
      }
    }
    const overflow = carry == carryNMinus1 ? "0" : "1";
    return { sum, carry, overflow };
  }

  static subtract(num1, num2) {
    return Arithmetics.add(num1, Arithmetics.twosComplement(num2));
  }

  static twosComplement(num) {
    let onesComp = "";
    for (let i = 0; i < num.length; i++) {
      onesComp += num[i] == "0" ? "1" : "0";
    }
    let one = Arithmetics.createStandardSize("1", onesComp.length);
    return Arithmetics.add(onesComp, one).sum;
  }

  static increament(num) {
    let one = Arithmetics.createStandardSize("1", num.length);
    let result = Arithmetics.add(num, one);
    return result.sum;
  }

  static decreament(num) {
    let one = Arithmetics.createStandardSize("1", num.length);
    let twosCompOfOne = Arithmetics.twosComplement(one);

    let result = Arithmetics.add(num, twosCompOfOne);

    return result.sum;
  }

  static clear(num) {
    let result = "";
    for (var i = 1; i <= num.length; i++) {
      result += "0";
    }
    return result;
  }

  static and(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "0" || num2[i] == "0" ? "0" : "1";
    }
    return result;
  }

  static or(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "1" || num2[i] == "1" ? "1" : "0";
    }
    return result;
  }

  static xor(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == num2[i] ? "0" : "1";
    }
    return result;
  }

  static nand(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "0" || num2[i] == "0" ? "1" : "0";
    }
    return result;
  }

  static nor(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "1" || num2[i] == "1" ? "0" : "1";
    }
    return result;
  }

  static complement(num1) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "1" ? "0" : "1";
    }
    return result;
  }

  static ashl(num) {
    let result = "";
    for (let i = 1; i < num.length; i++) {
      result += num[i];
    }
    result += "0";
    const overflow = num[0] == num[1] ? "0" : "1";
    return { result, carry: num[0], overflow };
  }

  static ashr(num) {
    let result = num[0];
    for (let i = 0; i < num.length - 1; i++) {
      result += num[i];
    }
    return { result, carry: num[num.length - 1] };
  }
}
