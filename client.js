let salaryArray = [];
console.log('Hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello from JQ');
    $('#submit').on('click', addEmployee);

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

    $('.tableInfo').append(` <tr>
<th>${employees.firstName}</th>
<th>${employees.lastName}</th>
<th>${employees.idInput}</th>
<th>${employees.titleInput}</th>
<th>${employees.salaryInput}</th>
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