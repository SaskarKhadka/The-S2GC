class Instructions {
  static mriInstructions = {
    AND: "00000",
    OR: "00001",
    XOR: "00010",
    NAND: "00011",
    NOR: "00100",
    LDA: "00101",
    LDB: "00110",
    STA: "00111",
    STB: "01000",
    ISZ: "01001",
    BUN: "01010",
    BSA: "01011",
    XCHG: "01100",
    ADD: "01101",
    SUB: "01110",
    TESTA: "01111",
    TESTB: "10000",
    JZ: "10001",
    JNZ: "10010",
    JLE: "10011",
    JL: "10100",
    JGE: "10101",
    JG: "10110",
  };

  static rriInstructions = {
    DECA: "00111111000000000000000000000000",
    DECB: "00111110100000000000000000000000",
    CLA: "00111110010000000000000000000000",
    CLB: "00111110001000000000000000000000",
    CMA: "00111110000100000000000000000000",
    CMB: "00111110000010000000000000000000",
    SHRA: "00111110000001000000000000000000",
    SHLA: "00111110000000100000000000000000",
    SHRB: "00111110000000010000000000000000",
    SHLB: "00111110000000001000000000000000",
    INCA: "00111110000000000100000000000000",
    INCB: "00111110000000000010000000000000",
    SC: "00111110000000000001000000000000",
    SNC: "00111110000000000000100000000000",
    SZ: "00111110000000000000010000000000",
    SNS: "00111110000000000000001000000000",
    SV: "00111110000000000000000100000000",
    SNV: "00111110000000000000000010000000",
    SS: "00111110000000000000000001000000",
    SNE: "00111110000000000000000000100000",
    SLE: "00111110000000000000000000010000",
    SL: "00111110000000000000000000001000",
    SG: "00111110000000000000000000000100",
    SGE: "00111110000000000000000000000010",
    HLT: "00111110000000000000000000000001",
  };

  static addressingMode = {
    "@": "00",
    "#": "10",
    $: "11",
  };

  static addressingModeExists(addressingMode) {
    return Instructions.addressingMode[addressingMode] != undefined;
  }

  static instructionExists(instruction) {
    return (
      Instructions.mriInstructions[instruction] != undefined ||
      Instructions.rriInstructions[instruction] != undefined
    );
  }

  static canHaveLabelAsOperand(instruction) {
    return (
      instruction == "BUN" ||
      instruction == "BSA" ||
      instruction == "JZ" ||
      instruction == "JNZ" ||
      instruction == "JL" ||
      instruction == "JLE" ||
      instruction == "JG" ||
      instruction == "JLE"
    );
  }

  static isMRI(instruction) {
    return Instructions.mriInstructions[instruction] != undefined;
  }

  static instructionToBinary(instruction) {}
}
