import { coinFlips, countFlips } from "./modules/coin.mjs" //import functions from coin.mjs
import { createRequire } from 'module'; // import create

const require = createRequire(import.meta.url);
const args = require("./node_modules/minimist")(process.argv.slice(2));

args['number'];
const number = args.number;

if (number == null) {
    let one = coinFlips(1);
    console.log(one);
    if (one == ['heads']) {
        console.log('{ heads: 1 }');
      } else {
        console.log('{ tails: 1 }');
}}
else {
    let flips = coinFlips(number);
    console.log(flips); //log flips
console.log(countFlips(flips)); //log flips count
}