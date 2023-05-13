class Scanner {
  /*
    An abstraction of lexical analyzer for the language
    */
  #code;
  #line;
  #handlePos;
  #tokens;
  #nextChar;
  #lexeme;

  constructor(code) {
    /*
      Constructor
      */
    this.#code = code;
    this.#line = 1;
    this.#handlePos = -1;
    this.#tokens = [];
    this.#nextChar = undefined;
    this.#lexeme = "";
  }

  // Getter for tokens
  tokens() {
    return this.#tokens;
  }

  #getChar() {
    /*
      Gets the next character in the input code
      puts it in nextChar
      */
    this.#handlePos++;
    this.#nextChar =
      this.#handlePos < this.#code.length
        ? this.#code[this.#handlePos]
        : undefined;
  }

  #peekNext() {
    /*
      Returns the next character to be used without updating nextChar  
      */
    return this.#handlePos + 1 < this.#code.length
      ? this.#code[this.#handlePos + 1]
      : undefined;
  }

  lexer() {
    /*
      Lexical analyzer
      */
    this.#getChar();
    while (this.#nextChar != undefined) {
      this.#tokenize();
      this.#clearLexeme();
    }
    this.#tokens.push({ token: TokenType.EOF, lexeme: "END" });
  }

  #updateLexeme() {
    /*
      Updates value of #lexeme with #nextChar
      */
    this.#lexeme += this.#nextChar;
  }

  #clearLexeme() {
    /*
      Sets empty string to #lexeme
      */
    this.#lexeme = "";
  }

  #tokenize() {
    /*
      tokenizes the given input
      */
    if (this.#isalpha()) {
      // If the character is a letter, determine the identifier or keyword
      this.#determineIdentifierOrKeyword();
      let isKeyword = Instructions.instructionExists(
        this.#lexeme.toUpperCase()
      );
      this.#tokens.push({
        token: isKeyword ? TokenType.KEYWORD : TokenType.IDENTIFIER,
        lexeme: this.#lexeme.toUpperCase(),
        line: this.#line,
      });
    } else if (this.#isdigit()) {
      // If the character is a digit, determine the number
      this.#determineNumber();
      this.#tokens.push({
        token: TokenType.NUMBER,
        lexeme: this.#lexeme,
        line: this.#line,
      });
    } else if (this.#nextChar == "@") {
      this.#tokens.push({
        token: TokenType.AT,
        lexeme: "@",
        line: this.#line,
      });
      this.#getChar();
    } else if (this.#nextChar == "#") {
      this.#tokens.push({
        token: TokenType.HASHTAG,
        lexeme: "#",
        line: this.#line,
      });
      this.#getChar();
    } else if (this.#nextChar == "$") {
      this.#tokens.push({
        token: TokenType.DOLLAR,
        lexeme: "$",
        line: this.#line,
      });
      this.#getChar();
    } else if (
      this.#nextChar == " " ||
      this.#nextChar == "\t" ||
      this.#nextChar == "\n" ||
      this.#nextChar == "\r"
    ) {
      if (this.#nextChar == "\n") {
        this.#line += 1;
      }
      this.#getChar();
    } else if (this.#nextChar == "+") {
      this.#updateLexeme();
      this.#tokens.push({
        token: TokenType.PLUS,
        lexeme: this.#lexeme,
        line: this.#line,
      });
      this.#getChar();
    } else if (this.#nextChar == "-") {
      this.#updateLexeme();
      this.#tokens.push({
        token: TokenType.MINUS,
        lexeme: this.#lexeme,
        line: this.#line,
      });
      this.#getChar();
    } else if (this.#nextChar == ":") {
      this.#updateLexeme();
      this.#tokens.push({
        token: TokenType.COLON,
        lexeme: this.#lexeme,
        line: this.#line,
      });
      this.#getChar();
    } else if (this.#nextChar == ";") {
      this.#updateLexeme();
      this.#tokens.push({
        token: TokenType.SEMICOLON,
        lexeme: this.#lexeme,
        line: this.#line,
      });
      this.#getChar();
    } else {
      if (this.#nextChar == "/") {
        // If the character is ., CHECK IF IT IS A COMMENT
        this.#getChar();
        if (this.#nextChar == "/") {
          // COMMENT ENCOUNTERED SKIP THE LINE
          this.#getChar();
          while (this.#nextChar != undefined && this.#nextChar != "\n") {
            this.#getChar();
          }
          if (this.#nextChar == "\n") {
            this.#line++;
          }
        } else {
          this.#getChar();
          // Throws error if unknown character is encountered
          throw `Invalid character at line ${this.#line}`;
        }
        this.#getChar();
      } else {
        this.#getChar();
        // Throws error if unknown character is encountered
        throw `Invalid character at line ${this.#line}`;
      }
    }
  }

  #determineIdentifierOrKeyword() {
    /*
      Determines the identifiers and keywords in the input
      */
    while (this.#nextChar != undefined && this.#isalphanumeric()) {
      this.#updateLexeme();
      this.#getChar();
      if (this.#nextChar == "_") {
        this.#lexeme += "_";
        this.#getChar();
      }
    }
  }

  #determineNumber() {
    /*
      Determines the numeric values in the input
      */
    while (
      this.#nextChar != undefined &&
      (this.#nextChar == "." || this.#isdigit())
    ) {
      if (this.#nextChar == ".") {
        throw "Decimal Number is not supported";
      } else {
        this.#updateLexeme();
        this.#getChar();
      }
    }
  }

  #isalpha() {
    /*
      Checks if this.#nextChar is a letter or not
      */
    return letters.includes(this.#nextChar);
  }

  #isdigit() {
    /*
      Checks if this.#nextChar is a digit or not
      */
    return numbers.includes(this.#nextChar);
  }

  #isalphanumeric() {
    /*
      Checks if this.#nextChar is alphanumeric or not
      */
    return this.#isdigit() || this.#isalpha();
  }
}

const scanner = new Scanner("LDA #25; XCHG $0; HLT;");
// "LDB #0;\nLDA #0;\nasd: STB @15;LDB #0; efg: STB @16; LDA $16; INCB;STB @16;TESTA $16; JG jumpp;res:INCB; LDA #4;SUB @15;STB @17;TESTA @17; JL efg; LDB @15;INCB;TESTB #4; JL asd; HLT;jumpp: XCHG $16;BUN res;"
scanner.lexer();
/**
 * LDB #0
 * LDA #0
 * asd: STB @15
 * LDB #0
 * efg: STB @16
 * LDA $16
 * INCB
 * STB @16
 * TESTA $16
 * JG jumpifgreater
 * res: INCB
 * LDA #4
 * SUB @15
 * STB @17
 * TESTA @17
 * JL efg
 * LDB @15
 * INCB
 * TESTB #4
 * JL asd
 * HLT
 *
 *
 * jumpifgreater: XCHG $16
 * BUN res
 */
