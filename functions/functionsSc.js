// function calculateBill(){
//     // this is the function block/body
//     const total = 100 * 1.18;
//     console.log(total);
//     // How do I store the result of function in a variable 
//     return total;
// }

// const sumTotal = calculateBill()
// console.log(calculateBill())

// // Calculator 
// function sum(a,b){
//     const total = a+b;
//     return total;
// }
// function minus(a,b){
//     const total = a-b
//     return total
// }

// function multiply(a,b){
//     const total = a*b
//     return total
// }
// function powerTo(a,b){
//     const total = math.powerTo(2,3)
//     console.log()
// }
// function Calculator(a,b, AO){
//     const AO = prompt('Enter the arithematic operator')
//     if (AO === multiply){
//         total = multiply(a,b)
//     }
//     prompt(total)
// }

// Calculator()

// function doctorize(name){
//     return `Dr. ${name}`
// }

// function yell(name='Silly Goose'){
//     return `Hey ny name is ${name.toUpperCase()}`
// }
// doctorize('crazyC')
// yell(doctorize('wes'))

// // why declare argument

// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// }

function makeADoctor(fullName='hello Singh'){
    const person = {
        first: '',
        last:'',
        age: 0,
        makeADoctorMethod:`Dr. ${fullName.split(' ')[0]} ${fullName.split(' ')[1]}`
    }
    return (person.makeADoctorMethod)
}
    
// drArray = ['Sachin Sign', 'Akaash Singh', 'Saurabh Jawa', 'IceCream wall']
const button = document.querySelector('.clickMe');
button.addEventListener('click',wes.yellHi)
// callback is yellHi function