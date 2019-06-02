/*
Inspired from real-world Brainf**k, we want to create an interpreter of that language which
 will support the following instructions (the machine memory or 'data' should behave like a
  potentially infinite array of bytes, initialized to 0):

> increment the data pointer (to point to the next cell to the right).
< decrement the data pointer (to point to the next cell to the left).
+ increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
- decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
. output the byte at the data pointer.
, accept one byte of input, storing its value in the byte at the data pointer.
[ if the byte at the data pointer is zero, then instead of moving the instruction pointer
 forward to the next command, jump it forward to the command after the matching ] command.
] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer
 forward to the next command, jump it back to the command after the matching [ command.

  The function will take in input...

the program code, a string with the sequence of machine instructions,
  the program input, a string, eventually empty, that will be interpreted as an array of bytes
  using each character's ASCII code and will be consumed by the , instruction

... and will return ...

the output of the interpreted code (always as a string), produced by the . instruction.
*/


const brainLuck = (code, input) => {
  let data = [];
  let dataPtr = 0;
  let output = '',
      inputNumber = 0,
      loopNumber = 0,
      instruction = 0;
  while(instruction < code.length) {
    switch (code[instruction]) {
      case '>':
        instruction++;
        dataPtr++;
        break;
      case '<':
        instruction++;
        dataPtr--;
        break;
      case '+':
        data[dataPtr] = data[dataPtr] || 0;
        data[dataPtr]++;
        if(data[dataPtr] === 256) data[dataPtr] = 0;
        instruction++;
        break;
      case '-':
        data[dataPtr] = data[dataPtr] || 0;
        data[dataPtr]--;
        if(data[dataPtr] === -1) data[dataPtr] = 255;
        instruction++;
        break;
      case '.':
        output = output + String.fromCharCode(data[dataPtr]);
        instruction++;
        break;
      case ',':
        data[dataPtr] = input.charCodeAt(inputNumber);
        inputNumber++;
        instruction++;
        break;
      case '[':
        instruction++;
        loopNumber++;
        if(data[dataPtr] === 0){
          const temp = loopNumber;
          while(loopNumber >= temp) {
            if(code[instruction] === '[') loopNumber++;
            if(code[instruction] === ']') loopNumber--;
            instruction++;
          }
        }
        break;
      case ']':
        if(data[dataPtr] !== 0){
          const temp = loopNumber;
          while(loopNumber >= temp) {
            instruction--;
            if(code[instruction] === '[') loopNumber--;
            if(code[instruction] === ']') loopNumber++;
          }
        } else instruction++;
        loopNumber--;
        break;
      default:
        instruction++;
    }
  }
  return output;
};



// Echo until byte(255) encountred
  console.log(brainLuck(',+[-.,+]','Codewars'+String.fromCharCode(255))); // 'Codewars'

// Echo until byte(0) encountred
console.log(brainLuck(',[.[-],]','Codewars'+String.fromCharCode(0))); //'Codewars'

// Two numbers multiplier
console.log(brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8,9)));// String.fromCharCode(72)

console.log(String.fromCharCode(72));