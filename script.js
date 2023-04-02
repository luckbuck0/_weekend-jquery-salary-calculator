
console.log('You got this');
// code stating that when the document is ready to 
// run the onready code
$(document).ready(onReady);

//global variable used to calculate total monthly salary
let totalMonthly = ''
let employeeGlobal=[]

// function that will serve as a staging area for events
function onReady() {
    // function that says once the submit button is clicked
    // to run the insert employee function
    $('.submit-button').on('click', insertEmployee)
    // A function to delete the employee using the delete button
    $('#tbody').on('click', '.deleteButton', removeEmployee)

}


// function to insert employee information to the tbody section
function insertEmployee(event) {
    // A event preventions that stops form from performing its default function
    event.preventDefault();
    // A if statement to make sure the employee inputs the required functions
    if ($('#firstName').val() != '' && $('#id').val() != '') {
        let employee = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            id: $('#id').val(),
            Title: $('#title').val(),
            annualSalary: $('#annualSalary').val()
        }
        // Used to add the values in the paremeters above to the tbody section
        $('#tbody').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.Title}</td>
        <td>${employee.annualSalary}</td>
        <td>
          <button class="deleteButton">Delete</button>
        </td>
    </tr>`)
    employeeGlobal.push(employee.annualSalary)
        // Made to set the values back to empty after submitted 
        $('#firstName').val('')
        $('#lastName').val('')
        $('#id').val('')
        $('#title').val('')
        $('#annualSalary').val('')

        totalMonthly = Number(totalMonthly) + Number(employee.annualSalary)
        $('#total').text(totalMonthly.toFixed(2));
    }
}

// function to delete the employees information
function removeEmployee() {
    $(this).parent().parent().remove();
    totalMonthly=totalMonthly-employeeGlobal[employeeGlobal.length-1]
    employeeGlobal.pop()
    $('#total').html(totalMonthly);
    return totalMonthly
}
