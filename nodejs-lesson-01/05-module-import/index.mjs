console.log("Main Module Started");
console.log("-----------------");
//Example Import;
import persona, { persona1, persona2 } from "./a.mjs";
import personb, { personb1, personb2 } from "./b.mjs";

// console.log("Imported From Module A");
// console.log("-----------------------")
// console.log("default", persona);
// console.log("persona1", persona1);
// console.log("persona2", persona2);
// console.log(" ");
// console.log("Imported From Module B");
// console.log("-----------------------");
// console.log("default", personb);
// console.log("personb1", personb1);
// console.log("personb2", personb2);



//Example Dynamic Import;
const myDynamicImport = () => {
   setTimeout(async () => {
      const path = './c.mjs';
      const modulec  = await import(path);
      console.log("-----------------------");
      console.log("Imported Dynamiclly From Module C");
      console.log("default: ", modulec.default);
      console.log("personc1: ", modulec.personc1);
      console.log("personc2: ", modulec.personc2);
   }, 2000)
}
// myDynamicImport();

/*
   ***
   שאלות הבנה:
   1 inside import change personB1 to personA1
   2 remove export in a.amj
   ***
 */

