const examples = [
  {
    title: "Load value at 1-5",
    code: `//Load value 5,4,2,3,1
//at locatio 1,2,3,4,5
LDA #5;
STA @1;
LDA #4;
STA @2;
LDA #2;
STA @3;
LDA #3;
STA @4;
LDA #1;
STA @5;
CLA;
HLT;
`,
  },
  {
    title: "Sum of numbers Using Loop",
    code: `//Sum of numbers at 
//Memory Location 1 to 4
LDB #1;
LABLE: STB @10;
ADD $10;
INCB;
TESTB #5;
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
