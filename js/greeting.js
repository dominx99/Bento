const today = new Date();
const hour = today.getHours();

const firstName = 'Dominik';

const gree1 = 'Go to Sleep!  ';
const gree2 = 'Good morning!  ';
const gree3 = 'Good afternoon  ';
const gree4 = 'Good evening,  ';
const gree5 = 'Good evening,  ';
const gree6 = 'Good evening,  ';

if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + firstName;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + firstName;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + firstName;
} else {
  document.getElementById('greetings').innerText = gree4 + firstName;
}
