let employee = [];
console.log('Hello');

$(document).ready(readyNow); 

function readyNow(){
    console.log('Hello from JQ');
    $('#submit').on('click', addEmployee);

}

function addEmployee (event){
console.log('Adding Employee');
event.preventDefault();

let firstName = $('.firstInput').val();
console.log(firstName);
let lastName = $('.lastInput').val();
console.log(lastName);
let idInput = $('.idInput').val();
console.log(idInput);
let titleInput = $('.titleInput').val();
console.log(titleInput);
let salaryInput = $('.salaryInput').val();
console.log(salaryInput);

}
