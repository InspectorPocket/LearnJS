const title = document.querySelector('h1');

// this overwrites existing styles
// title.setAttribute('style', 'margin:50px;')

console.log(title.style);
console.log(title.style.color);

// this way add the sytle
title.style.margin = '50px';
title.style.color = 'green';

// can change styles by converting them to camel case (font-size -> fontSize)
title.style.fontSize = '60px';

// can reset styles by setting them to ''
title.style.margin = '';
