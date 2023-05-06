var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
    event.preventDefault();

    console.log('First Name: ', firstNameEl.val());
    console.log('Last Name: ', lastNameEl.val());
    console.log('Email: ', emailEl.val());
    console.log('GitHub: ', githubEl.val());

    var checkedEl = $('input:checked');
    var selected = [];

    $.each(checkedEl, function(){
        selected.push($(this).val())
    });

    console.log(selected);

    // Clear fields
    $('input[type="text"]').val('');
    $('input[type="email"]').val('');
    $('input[type="checkbox"]').prop('checked',false);
}

formEl.on('submit', handleFormSubmit);