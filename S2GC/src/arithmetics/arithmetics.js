class Arithmetics {
  constructor() {}

  static createStandardSize(num, bits) {
    if (num.length < bits) {
      let result = "";
      for (let i = 1; i <= bits - num.length; i++) {
        result += "0";
      }
      return result + num;
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
    for (let i = num1.length - 1; i >= 0; i--) {
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
    return [sum, carry];
  }

  static twosComplement(num) {
    let onesComp = "";
    for (let i = 0; i < num.length; i++) {
      onesComp += num[i] == "0" ? "1" : "0";
    }
    let one = Arithmetics.createStandardSize("1", onesComp.length);
    return Arithmetics.add(onesComp, one)[0];
  }

  static increament(num) {
    let one = Arithmetics.createStandardSize("1", num.length);
    let result = Arithmetics.add(num, one);
    return result;
  }

  static clear(num) {
    let result = "";
    for (var i = 1; i <= num.length; i++) {
      result += "0";
    }
    return result;
  }
}
