let salaryArray = [];
console.log('Hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello from JQ');
    $('#submit').on('click', addEmployee);
    $('.tableInfo').on('click', '#gone', removeEmployee);
   
}
function addEmployee(event) {
    console.log('Adding Employee');
    event.preventDefault();

    let employees = {
        firstName: $('.firstInput').val(),
        lastName: $('.lastInput').val(),
        idInput: $('.idInput').val(),
        titleInput: $('.titleInput').val(),
        salaryInput: $('.salaryInput').val(),
    }

    $('.firstInput').val('');
    $('.lastInput').val('');
    $('.idInput').val('');
    $('.titleInput').val('');
    $('.salaryInput').val('');

    $('.tableInfo').append(`<tr id="gone">
<th  class="deleteMe">${employees.firstName}</th>
<th class="deleteMe">${employees.lastName}</th>
<th class="deleteMe">${employees.idInput}</th>
<th class="deleteMe">${employees.titleInput}</th>
<th class="deleteMe">${employees.salaryInput}</th>
<th><button class="delete">Delete</button></th>
</tr>`)

    salaryArray.push(employees.salaryInput);

    calculateTotalSalary(employees)


}

function calculateTotalSalary() {
    let total = 0;
    for (let i = 0; i < salaryArray.length; i++) {
        total += Number(salaryArray[i]);
        $('.totalMonthly').text(`${total}`);
    } if ( total >= 20000 ) {
        $('.turnRed').addClass('red');
    }
}

function removeEmployee(){
    console.log('in remove employee');
    $(this).remove();
}