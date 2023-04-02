
console.log('You got this');
// code stating that when the document is ready to 
// run the onready code
$(document).ready(onReady);

//global variable used to calculate total monthly salary
let totalMonthly = ''
let employeeGlobal = []

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
        // a object called employee that holds all the information collected in the inputs
        // and stores them in the employee object
        let employee = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            id: $('#id').val(),
            Title: $('#title').val(),
            annualSalary: $('#annualSalary').val()
        }
        // Used to add the values in the object above to the tbody section
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
        // taking the employee annual salary array and pushing it into a global array to be used to
        //      subtract from the total monthly
        employeeGlobal.push(employee.annualSalary)
        // Made to set the values back to empty after submitted 
        $('#firstName').val('')
        $('#lastName').val('')
        $('#id').val('')
        $('#title').val('')
        $('#annualSalary').val('')
        // the total monthly variable which is set to 0 plus the number value of employee annual salary
        // which is taken from the input value of annual salary input everytime it is entered 
        totalMonthly = Number(totalMonthly) + Number(employee.annualSalary)
        $('#total').text(totalMonthly.toFixed(2));
        // a if statement that says if the total monthly exceeds 20000 to turn the css red
        if (totalMonthly > 20000) {
            $('#total').css("background-color", "red")
        }
    }
}

// function to delete the employees information
function removeEmployee() {
    // this is identifying the delete button and then to remove the entirety of the
    // employees the parent function is being used to go back 2 parents and then delete
    $(this).parent().parent().remove();
    // total monthly is being subtracted from the last array that was pushed up to
    // employee global which should be the last input from the annual salary
    totalMonthly = totalMonthly - employeeGlobal[employeeGlobal.length - 1]
    // the pop command is removing the last item in the employeeglobal var since it 
    // is no longer needed
    employeeGlobal.pop()
    // this is identifying the #total which is a area located in the html and displaying the
    // value of the total monthly
    $('#total').html(totalMonthly);
    // a if statement that checks if the total monthly is back down below 20000 after the employee has been deleted
    // if that is the case the statements makes the background color transparent changing it from red
    if (totalMonthly < 20000) {
        $('#total').css("background-color", "transparent")
    }
    // returns the total monthly
    return totalMonthly

}
