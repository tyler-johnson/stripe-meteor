//Generate a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://js.stripe.com/v1/';

//Load the script tag
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);