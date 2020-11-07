let total = 0;
console.log('Hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello from JQ');
    $('#submit').on('click', addEmployee);
    $('.tableInfo').on('click', '.delete', removeEmployee);

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
<td  class="deleteMe">${employees.firstName}</td>
<td class="deleteMe">${employees.lastName}</td>
<td class="deleteMe">${employees.idInput}</td>
<td class="deleteMe">${employees.titleInput}</td>
<td class="grabSalary">${employees.salaryInput}</td>
<td><button class="delete">Delete</button></td>
</tr>`)

calculateTotalSalary(employees)

}

function calculateTotalSalary(employees) {
    total += Number(employees.salaryInput / 12);
    $('.totalMonthly').text(`${total}`);
    if (total >= 20000) {
        $('.turnRed').addClass('red');
    }
}

function removeEmployee() {
    console.log('in remove employee');
    $(this).parents('#gone').remove();
    let targetRow = $(this).parents('#gone');
    let deletedSalary = targetRow.children('.grabSalary').text();
    let monthSalary = deletedSalary / 12;
    console.log(monthSalary);
    total -= monthSalary;
    $('.totalMonthly').text(`${total}`);

}