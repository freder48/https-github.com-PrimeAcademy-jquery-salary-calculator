let total = 0;
console.log('Hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('Hello from JQ');
    //runs addEmployee on submit button click
    $('#submit').on('click', addEmployee);
    //runs removeEmployee on delete button click
    $('.tableInfo').on('click', '.delete', removeEmployee);
    $('.totalMonthly').text(`$${0}`);
}

//start addEmployee
function addEmployee(event) {
    console.log('Adding Employee');
    //prevent default to run
    event.preventDefault();
    //create employee object to store input values
    let employees = {
        firstName: $('.firstInput').val(),
        lastName: $('.lastInput').val(),
        idInput: $('.idInput').val(),
        titleInput: $('.titleInput').val(),
        salaryInput: $('.salaryInput').val(),
    }
    //empty inputs
    $('.firstInput').val('');
    $('.lastInput').val('');
    $('.idInput').val('');
    $('.titleInput').val('');
    $('.salaryInput').val('');
    //Append object values to table on DOM
    $('.tableInfo').append(`<tr id="gone">
<td  class="deleteMe">${employees.firstName}</td>
<td class="deleteMe">${employees.lastName}</td>
<td class="deleteMe">${employees.idInput}</td>
<td class="deleteMe">${employees.titleInput}</td>
<td class="grabSalary">${employees.salaryInput}</td>
<td><button class="delete">Delete</button></td>
</tr>`)

    //call calculateTotalSalary
    calculateTotalSalary(employees);

}   //end addEmployee

//start calculateTotalSalary
function calculateTotalSalary(employees) {
    //get total by adding salaryInput values together from employee object
    total += Number(employees.salaryInput / 12); //divide by 12 to get monthly
    //append monthly total to DOM on span element
    $('.totalMonthly').text(`$${Math.round(total)}`);
    //turn background color red if monthly salary exceeds 20000
    if (total >= 20000) {
        $('.turnRed').addClass('red');
    } //end conditional
} //end calculateTotalSalary

//start removeEmployee
function removeEmployee() {
    console.log('in remove employee');
    //remove employee from table row by delete button
    $(this).parents('#gone').remove();
    //get back to targeted row in table
    let targetRow = $(this).parents('#gone');
    //retrieve salary info from deleted row
    let deletedSalary = targetRow.children('.grabSalary').text();
    //calculate monthly salary
    let monthSalary = (deletedSalary / 12);
    console.log(monthSalary);
    //subtract deleted employee monthly salary from total
    total -= monthSalary;
    //append total to DOM
    $('.totalMonthly').text(`$${Math.round(total)}`);

} //end removeEmployee