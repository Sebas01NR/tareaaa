var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Buenas noches!';
} else if (hourNow > 12) {
    greeting = 'Buenas tardes!';
} else if (hourNow > 0) {
    greeting = 'Buenos días!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

onload = alert('Espero te guste esta página');