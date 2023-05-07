$('#top').children().css('color', 'yellow');
console.log($('#top').children());

$('#top').children('h1#header-title').addClass('boxy');

$('#top').children().eq(4).append('<li>Classmates</li>');

$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');