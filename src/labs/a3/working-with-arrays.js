function WorkingWithArrays(){
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];
console.log('Working with Arrays');<br />
console.log('functionScoped = ' ,functionScoped);<br />
console.log('blockScoped = ' ,blockScoped);<br />
console.log('constant1 = ' ,constant1);<br />
console.log('numberArray1 = ' ,numberArray1);<br />
console.log('stringArray1 = ' ,stringArray1);<br />
console.log('variableArray1 = ' ,variableArray1);<br />
return(
    <div>
    <h3>Working With Arrays</h3>
    numberArray1 = { numberArray1 }<br />
    stringArray1 = { stringArray1 }<br />
    variableArray1 = { variableArray1 }<br />
    </div>
    );
}
export default WorkingWithArrays