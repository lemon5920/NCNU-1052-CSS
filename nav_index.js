var data = [
    {
        title: 'Layout',
        link: [
            {href: './index.html', name: 'Layout'}
        ]
    },
    {
        title: 'Multiple Selectors',
        link: [
            {href: './multipleSelectors/multiple-selectors.html', name: 'Multiple Selectors'}
        ]
    },
    {
        title: 'Variable',
        link: [
            {href: './variable/calculator.html', name: 'Calculator'},
            {href: './variable/variable.html', name: 'Variable'}
        ]
    },
    {
        title: 'Font',
        link: [
            {href: './font/font-size.html', name: 'font-size'},
            {href: './font/font-family.html', name: 'font-family'},
            {href: './font/line-height.html', name: 'line-height'},
            {href: './font/text-align.html', name: 'text-align'},
            {href: './font/text-shadow.html', name: 'text-shadow'}
        ]
    },
    {
        title: 'Selector',
        link: [
            {href: './selector/active.html', name: 'active'},
            {href: './selector/hover.html', name: 'hover'},
            {href: './selector/focus.html', name: 'focus'}
        ]
    },
    {
        title: 'Box model',
        link: [
            {href: './border/border-style.html', name: 'border-style'},
            {href: './border/border-width.html', name: 'border-width'},
            {href: './border/border-radius.html', name: 'border-radius'},
            {href: './border/padding_margin.html', name: 'padding and margin'}
        ]
    },
    {
        title: 'Display',
        link: [
            {href: './display/display.html', name: 'display'}
        ]
    }
]

var nav = document.getElementById('nav');

for (var i = 0; i < data.length; i++) {

    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode(data[i].title);

    h2.appendChild(h2Text);
    var ul = document.createElement('ul');

    for (var j = 0; j < data[i].link.length; j++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var linkText = document.createTextNode(data[i].link[j].name);
        a.appendChild(linkText);
        a.href = data[i].link[j].href;
        li.appendChild(a);
        ul.appendChild(li);
    }
    


    nav.appendChild(h2);
    nav.appendChild(ul);
}
