$(document).ready(function(){

// Function for removing old values by Input fields
    function clearInputs(){
        $('#budget-input').val(null);
        $("#expense-input").val(null);
        $("#amount-input").val(null);
    } 
    // Budget Error Message
        let budgetFeedbackMessage = $(".budget-feedback").html("Value cannot be empty or negative.") 
// First form submit ======    
    $('#budget-form').on("submit", function(e){     
        e.preventDefault()       
    // Get elemenets for first form
        let budgetInput = $('#budget-input') 
        let budgetInputVal = $('#budget-input').val()
        if(budgetInputVal == "" || budgetInputVal <= 0){
            budgetFeedbackMessage.show()
            budgetInput.focus(function(){
                budgetFeedbackMessage.hide()   });
            return false
        }else if($('#expense-amount').html() != 0){
            let newBudgetBalanse =  (budgetInputVal - $('#expense-amount').html())
            $('#balance-amount').html(newBudgetBalanse)          
            $('#budget-amount').html(budgetInputVal)
            clearInputs()         
        }else{
            $('#budget-amount').html(budgetInputVal)
            $('#balance-amount').html(budgetInputVal)
            clearInputs()
        } 
    })
    // Define array
        let database = new Map();
        let id = 0
    // Expense Error Message
        let expenseFeedbackMessage = $(".expense-feedback").html("Value cannot be empty or negative.")  
 
// Second Form submit ======   
    $('#expense-form').on("submit", function(event){
        event.preventDefault()
    // Get elemenets for second form
        let expenseInput = $('#expense-input')
        let expenseInputVal = $('#expense-input').val()
        let expenseamount = $('#amount-input')
        let expenseamountVal = $('#amount-input').val()
        if((expenseInputVal == "" || expenseInput.length == 0) ||      (expenseamountVal == "" || expenseamountVal <= 0)){
            expenseFeedbackMessage.show()
            expenseInput.focus(function(){
                expenseFeedbackMessage.hide()
            });
            expenseamount.focus(function(){
                expenseFeedbackMessage.hide()
            });
            return false
        }
        else{
            $('#expense-amount').html(expenseamountVal) //if value == 0
            let newBalanse = $('#balance-amount').html() - $('#expense-amount').html()
            $('#balance-amount').html(newBalanse) // Set Balance amount
            let newVal =$('#budget-amount').html() - $('#balance-amount').html()         
            $('#expense-amount').html(newVal) // every new expense
            clearInputs()      }
    // Create Object and Array     
        let obj = {
            "id": id,
            "description": expenseInputVal, 
            "amount": expenseamountVal
        }  
        id = id + 1; // Create dinamic ID
        // list.push(obj)  // Adding object into an array
        database.set(id, obj)
    // Create conmtent for Table
        let content = 0
        database.forEach((element, key) => {

            content += ` 
                <tr>
                    <td class="description text-uppercase text-danger">${element.description}</td>
                    <td class="expence text-uppercase text-danger">${element.amount}</td>
                    <td><button class="edit" id ="${key}"><i class="fa fa-pen-square" aria-hidden="true" style="color:blue;"></i></button></td>
                    <td><button  class="delete" id ="${key}"><i class="fa fa-trash" aria-hidden="true" style="color:red;"></i></button></td>
                </tr>
                `
        });
    // Table get the content elements
        $('#sumary').html(content); 
    })

// Add event on Edit button
    $(document).on("click", ".edit", function(){
       let editButtonId = parseInt($(this).attr('id'))

        const elementToEdit = database.get(editButtonId)
   
        $('#expense-input').val(elementToEdit.description);
        $('#amount-input').val(elementToEdit.amount)
        database.delete(editButtonId) // delete object from array
        let newExpenses = Array.from(database.values()).reduce((acc, element)  => acc + parseInt(element.amount), 0)
        $('#expense-amount').html(newExpenses)
        let newBalance = $('#budget-amount').html() - newExpenses
        $("#balance-amount").html(newBalance)
        $(this).parents('tr').remove(); // remove one row from table

    })
// Add event on Delete button
    $(document).on("click", ".delete", function(){
        let deleteButtonId = parseInt($(this).attr('id'))
        database.delete(deleteButtonId) // delete object from array
        $(this).parents('tr').remove(); // remove one row from table
       let newExpenses = Array.from(database.values()).reduce((acc, element)  => acc + parseInt(element.amount), 0)
        $('#expense-amount').html(newExpenses)
        let newBalance = $('#budget-amount').html() - newExpenses
        $("#balance-amount").html(newBalance)


    })

})
