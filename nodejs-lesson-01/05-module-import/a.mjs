console.log("Module A Started");
console.log("-----------------");

const moduleAdefault = "moduleAdefault";
export const persona1 = "Personc1";
export const persona2 = "Personc2";
export default moduleAdefault;
import personb, { personb1, personb2 } from "./b.mjs";


// export default personModuleDefault;  //Identifier '.default' has already been declared
