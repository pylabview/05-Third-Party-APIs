var alertButtonEl = $('#alert-btn');
var themeButtonEl = $('#theme-btn');
var lotteryButtonEl = $('#lottery-btn');
var lotteryNumberEl = $('#lottery-number');
var refreshButtonEl = $('#refresh-btn');

// Light them state
var isDark = true;


alertButtonEl.on('click', function() {
 alert('Hello World!');   
});

themeButtonEl.on('click', function() {
    if (isDark) {
        $('body').css({'background-color': '#d9e9e8' ,'color': '#1a1a1a'});
        isDark = !isDark;
        
    }else{
        $('body').css({'background-color': '#1a1a1a', 'color': '#d9e9e8' });
        isDark =!isDark;
    }
});

lotteryButtonEl.on('click', function() {
    var random = Math.floor(Math.random() * 1_000_000) + 1_000_000;
    lotteryNumberEl.text(random);
});

refreshButtonEl.on('click', function() {
    location.reload();
});


