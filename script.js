
console.log('You got this');
// code stating that when the document is ready to 
// run the onready code
$(document).ready(onReady);

// function that will serve as a staging area for events
function onReady(){
    // function that says once the submit button is clicked
    // to run the insert employee function
 $('.submit-button').on('click',insertEmployee)
}

function insertEmployee(event){
    event.preventDefault();
    if ($('#firstName').val() !='' && $('#id').val()!=''){
        let employee= {
            firstName:$('#firstName').val(),
            lastName: $('#lastName').val(),
            id: $('#id').val(),
            Title: $('#title').val(),
            annualSalary: $('#annualSalary').val()
        }
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
        
    $('#firstName').val('')
    $('#lastName').val('')
    $('#id').val('')
    $('#title').val('')
    $('#annualSalary').val('')
    }
}
