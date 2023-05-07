var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// Create a function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var shoppingItem = $("input[name='shopping-input']").val();

    if (!shoppingItem) {
        console.log('Please enter a shopping item');
        return;
    }

    shoppingListEl.append('<li>' + shoppingItem + '</li>');
    $('input[name="shopping-input"]').val('');
}

shoppingFormEl.on('submit', handleFormSubmit);