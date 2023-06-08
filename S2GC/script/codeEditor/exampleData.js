const examples = [
  {
    title: "Sum of numbers Using Loop",
    code: `//Sum of numbers at 
//Memory Location 1, 2 and 3
LDB #1;
LABLE: STB @4;
ADD $4;
INCB;
TESTB #4;
JNZ LABLE;
HLT;
`,
  },
  {
    title: "Sequential Search",
    code: `//Sequential Search for 
//20 in memory location 1-5
LDB #1;
LOOP: STB @30;
LDA $30;
INCB;
TESTA #20;
JZ KEY_FOUND;
TESTB #11;
JNZ LOOP;
HLT;
`,
  },
  {
    title: "Selection Sort",
    code: `//Selection sort of 
//data stored in location 1-5
LOOP:LDB @30;
INCB;
TESTB #6;
STB @30; // I
STB @35; // REPRESENTS MINIMUM INDEX
JZ HALT;
LOOP2: INCB; 
STB @40; // J
TESTB #6;
JZ SWAP;
LDA $40;
TESTA $35; // COMPARE VALUE AT I WITH VALUE AT MIN INDEX
JL UPDATE_MIN_INDEX;
BUN LOOP2;
LDA @30;
STA @35;
SWAP: LDA $30;
LDB $35;
XCHG $35;
STB @45;
LDA @45;
XCHG $30;
BUN LOOP;
HALT: HLT;
UPDATE_MIN_INDEX: LDA @40;
STA @35;
BUN LOOP2;
`,
  },
  {
    title: "Sum of numbers Using Loop",
    code: `//Sum of numbers at 
//Memory Location 1, 2 and 3
LDB #1;
LABLE: STB @4;
ADD $4;
INCB;
TESTB #4;
JNZ LABLE;
HLT;
`,
  },
  {
    title: "Sequential Search",
    code: `//Sequential Search for 
//20 in memory location 1-5
LDB #1;
LOOP: STB @30;
LDA $30;
INCB;
TESTA #20;
JZ KEY_FOUND;
TESTB #11;
JNZ LOOP;
HLT;
`,
  },
  {
    title: "Selection Sort",
    code: `//Selection sort of 
//data stored in location 1-5
LOOP:LDB @30;
INCB;
TESTB #6;
STB @30; // I
STB @35; // REPRESENTS MINIMUM INDEX
JZ HALT;
LOOP2: INCB; 
STB @40; // J
TESTB #6;
JZ SWAP;
LDA $40;
TESTA $35; // COMPARE VALUE AT I WITH VALUE AT MIN INDEX
JL UPDATE_MIN_INDEX;
BUN LOOP2;
LDA @30;
STA @35;
SWAP: LDA $30;
LDB $35;
XCHG $35;
STB @45;
LDA @45;
XCHG $30;
BUN LOOP;
HALT: HLT;
UPDATE_MIN_INDEX: LDA @40;
STA @35;
BUN LOOP2;
`,
  },
  {
    title: "Sum of numbers Using Loop",
    code: `//Sum of numbers at 
//Memory Location 1, 2 and 3
LDB #1;
LABLE: STB @4;
ADD $4;
INCB;
TESTB #4;
JNZ LABLE;
HLT;
`,
  },
  {
    title: "Sequential Search",
    code: `//Sequential Search for 
//20 in memory location 1-5
LDB #1;
LOOP: STB @30;
LDA $30;
INCB;
TESTA #20;
JZ KEY_FOUND;
TESTB #11;
JNZ LOOP;
HLT;
`,
  },
  {
    title: "Selection Sort",
    code: `//Selection sort of 
//data stored in location 1-5
LOOP:LDB @30;
INCB;
TESTB #6;
STB @30; // I
STB @35; // REPRESENTS MINIMUM INDEX
JZ HALT;
LOOP2: INCB; 
STB @40; // J
TESTB #6;
JZ SWAP;
LDA $40;
TESTA $35; // COMPARE VALUE AT I WITH VALUE AT MIN INDEX
JL UPDATE_MIN_INDEX;
BUN LOOP2;
LDA @30;
STA @35;
SWAP: LDA $30;
LDB $35;
XCHG $35;
STB @45;
LDA @45;
XCHG $30;
BUN LOOP;
HALT: HLT;
UPDATE_MIN_INDEX: LDA @40;
STA @35;
BUN LOOP2;
`,
  },
];
