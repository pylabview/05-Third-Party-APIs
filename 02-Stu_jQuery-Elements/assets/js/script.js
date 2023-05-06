var rootEl = $("#root");

var authorEl = $('<p>');

authorEl.text('~ Carol Dweck')

authorEl.addClass('plain');

var quoteEl = $('<p>');

quoteEl.text(
    'Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.'
    );

quoteEl.attr('class', 'fancy');

rootEl.append(quoteEl);

rootEl.append(authorEl);