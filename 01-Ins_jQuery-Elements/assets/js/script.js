// Comments show the vanilla JavaScript equivalent statements

// var rootEl = document.getElementById('root');
var rootEl = $('#root');

// var titleEl = document.createElement('h1');
var titleEl = $('<h1>');

// titleEl.textContent = 'Hello friends';
titleEl.text('Hello friends');

// titleEl.className = 'fancy';
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5'); // (`p-5`) is for padding
titleEl.addClass('p-5');

// titleEl.style.border = 'rgb(122, 242, 242) 3px solid';
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

rootEl.append(titleEl);

rootEl.append('<h2>With jQuery we can:</h2>');

var abilities = [
	'Select',
	'Create',
	'Style',
	'Animate',
	'Traverse',
	'Event Listen',
	'much more',
];

for (var i = 0; i < abilities.length; i++) {
    var abilityEl = $('<li>');

    abilityEl.text(abilities[i]);
	abilityEl.addClass('my-3');
    rootEl.append(abilityEl);
}

console.log($('div'));


