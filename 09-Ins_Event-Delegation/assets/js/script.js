var displayEl = $('#display');
var showLettersBtnEl = $('#show-letters-btn');
var buttonsListEl = $('#buttons');
var clearBtnEl = $('#clear');

clearBtnEl.hide();

function renderLetters() {
    var letters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '_',
      ];

    for (let i = 0; i < letters.length; i++) {
        var letterBtn = $('<button>');

        letterBtn.addClass('letter-button btn bnt-info');
        letterBtn.attr('data-letter', letters[i]);
        letterBtn.text(letters[i]);
        buttonsListEl.append(letterBtn);
        
    }
}

buttonsListEl.on('click', '.letter-button', function(event) {
    var displayLetterEl = $('<div>');

    displayLetterEl.addClass('letter');
     // get letter from clicked letter button's `data-letter` attribute and use it for display
    displayLetterEl.text($(event.target).attr('data-letter'));
    displayEl.append(displayLetterEl);
    });

    showLettersBtnEl.on('click', function() {
            clearBtnEl.show();
            showLettersBtnEl.hide();
            renderLetters();
        });
    
    clearBtnEl.on('click', function() {
        displayEl.empty();
    });