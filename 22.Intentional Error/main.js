"use strict";
//Question # 22
/*Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programs to produce an index error.
  Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
const days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.slice();
for (let i = 0; i < days.length; i++) {
    console.log(days[9]);
}
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}
