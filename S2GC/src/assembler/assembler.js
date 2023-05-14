class Assembler {
  #instructions;
  #currentMemAddress;
  #labelToAddress;
  #tokens;
  #nextToken;
  #nextLexeme;
  #nextLine;
  #currIndex;
  constructor() {
    this.#instructions = [];
    this.#currentMemAddress = 4096;
    this.#tokens = [];
    this.#currIndex = -1;
    this.#labelToAddress = {};
  }

  reset() {
    this.#instructions = [];
    this.#currentMemAddress = 4096;
    this.#tokens = [];
    this.#currIndex = -1;
    this.#labelToAddress = {};
  }

  getInstructions() {
    return this.#instructions;
  }

  setTokens(tokens) {
    this.#tokens = tokens;
  }

  #getToken() {
    /*
        Gets the next token and next lexeme in the input code
        puts it in nextToken and nextLexeme
        */
    this.#currIndex++;
    if (this.#currIndex < this.#tokens.length) {
      this.#nextToken = this.#tokens[this.#currIndex]["token"];
      this.#nextLexeme = this.#tokens[this.#currIndex]["lexeme"];
      this.#nextLine = this.#tokens[this.#currIndex]["line"];
    } else {
      this.#nextLexeme = undefined;
      this.#nextToken = undefined;
      this.#nextLine = undefined;
    }
  }

  assembleTokens() {
    this.#getToken();
    while (this.#nextToken != TokenType.EOF) {
      if (this.#nextToken == TokenType.KEYWORD) {
        this.#handleUnlabeledStatements();
        this.#currentMemAddress++;
      } else if (this.#nextToken == TokenType.IDENTIFIER) {
        this.#handleLabeledStatements();
      } else {
        //createToast("error", "Invalid Statment Type!");
        this.#throwError("Invalid statement type");
      }
    }

    // Replace labels with address
    for (let index in this.#instructions) {
      let label = this.#instructions[index].slice(7);
      if (this.#labelToAddress[label] != undefined) {
        this.#instructions[index] =
          this.#instructions[index].slice(0, 7) +
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(this.#labelToAddress[label]),
            25
          );
      }
    }
  }

  #throwError(message) {
    const errorLine =
      this.#nextLine == this.#prevLineNumber()
        ? this.#nextLine
        : this.#prevLineNumber();
    throw message + ` at line ${errorLine}`;
  }

  #mriInstruction() {
    // handle opcode
    let binaryOpcode = Instructions.mriInstructions[this.#nextLexeme];
    instTypeDecoder.selectOutput(binaryOpcode);
    let binaryAddMode = "00";
    let binarySign = "0";
    let binaryOperand = "";
    const canHaveLabel = Instructions.canHaveLabelAsOperand(this.#nextLexeme);
    this.#getToken();

    // handle operand
    if (canHaveLabel) {
      if (this.#nextToken == TokenType.IDENTIFIER) {
        binaryOperand = this.#nextLexeme;
      } else {
        //createToast("error", "Invalid operand value for jump instruction!");
        this.#throwError("Invalid operand value for jump instruction");
      }
    } else {
      // handle addressing mode
      if (Instructions.addressingModeExists(this.#nextLexeme)) {
        binaryAddMode = Instructions.addressingMode[this.#nextLexeme];
        this.#getToken();
      } else {
        //createToast(
        // "error",
        // "Please enter a valid addressing mode for Memory Reference Instructions!"
        // );
        this.#throwError(
          "Please enter a valid addressing mode for Memory Reference Instructions"
        );
      }

      // this.#getToken();

      // handle direct, indirect, immediate
      // direct and indirect cannot have sign only immediate
      if (binaryAddMode == "10") {
        //immediate
        // TODO: ya majale herne
        if (
          this.#nextToken == TokenType.MINUS ||
          this.#nextToken == TokenType.PLUS
        ) {
          let binarySign = this.#nextToken == TokenType.MINUS ? "1" : "0";
          this.#getToken();
          if (this.#nextToken == TokenType.NUMBER) {
            binaryOperand =
              binarySign +
              Arithmetics.createStandardSize(
                Arithmetics.decimalToBinary(parseInt(this.#nextLexeme)),
                24
              );
          } else {
            //createToast(
            //   "error",
            //   "Invalid operand value for Memory Reference Instructions!"
            // );
            this.#throwError(
              "Invalid operand value for Memory Reference Instructions"
            );
          }
        } else if (this.#nextToken == TokenType.NUMBER) {
          binaryOperand =
            "0" +
            Arithmetics.createStandardSize(
              Arithmetics.decimalToBinary(parseInt(this.#nextLexeme)),
              24
            );
        } else {
          //createToast(
          //   "error",
          //   "Invalid operand value for Memory Reference Instructions!"
          // );
          this.#throwError(
            "Invalid operand value for Memory Reference Instructions"
          );
        }
      } else {
        // direct and indirect
        if (this.#nextToken == TokenType.NUMBER) {
          binaryOperand = Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(parseInt(this.#nextLexeme)),
            25
          );
        } else {
          //createToast(
          //   "error",
          //   "Invalid operand value for Memory Reference Instructions!"
          // );
          this.#throwError(
            "Invalid operand value for Memory Reference Instructions"
          );
        }
      }
    }

    //handle semicolon
    this.#getToken();
    if (this.#nextToken != TokenType.SEMICOLON) {
      //createToast("error", "Statements must end with semicolon!");
      this.#throwError("Statements must end with semicolon");
    }
    // this.#currentMemAddress++;
    this.#getToken();
    return { binaryAddMode, binaryOpcode, binaryOperand };
  }

  rriInstructions() {
    let binCode = "";
    instTypeDecoder.selectOutput("11111");
    binCode = Instructions.rriInstructions[this.#nextLexeme];
    this.#getToken();
    if (this.#nextToken != TokenType.SEMICOLON) {
      //createToast("error", "Statements must end with semicolon!");
      this.#throwError("Statements must end with semicolon");
    }
    // this.#currentMemAddress++;
    this.#getToken();
    return { binCode };
  }

  #handleUnlabeledStatements() {
    let binCode = "";

    if (Instructions.isMRI(this.#nextLexeme)) {
      const result = this.#mriInstruction();
      binCode =
        result.binaryAddMode + result.binaryOpcode + result.binaryOperand;
    } else {
      binCode = this.rriInstructions().binCode;
    }
    this.#instructions.push(binCode);
  }

  #handleLabeledStatements() {
    this.#labelToAddress[this.#nextLexeme] = this.#currentMemAddress;
    this.#getToken();
    if (this.#nextToken != TokenType.COLON) {
      //createToast("error", "Invalid Statement!");
      this.#throwError("Invalid statement");
    }
    this.assembleTokens();
    this.#currentMemAddress++;
  }

  #peekNext() {
    /*
        Returns the next token to be used without updating this.#nextToken  
        */
    if (this.#currIndex + 1 < this.#tokens.length) {
      return this.#tokens[this.#currIndex + 1]["token"];
    } else {
      return undefined;
    }
  }

  #prevLineNumber() {
    /*
        Returns the line number of previous token
         */
    if (this.#currIndex != 0) {
      return this.#tokens[this.#currIndex - 1]["line"];
    } else {
      return -1;
    }
  }
}

// const assembler = new Assembler();
const assembler = new Assembler();
// assembler.assembleTokens();
