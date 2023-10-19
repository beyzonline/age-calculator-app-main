var dayInput = document.querySelector('input[placeholder="DD"]');
var monthInput = document.querySelector('input[placeholder="MM"]');
var yearInput = document.querySelector('input[placeholder="YYYY"]');
var resultContainer = document.querySelector('.result');
function startCountdown(event) {
    event.preventDefault();
    var day = parseInt(dayInput.value, 10);
    var month = parseInt(monthInput.value, 10) - 1;
    var year = parseInt(yearInput.value, 10);
    var inputDate = new Date(year, month, day);
    if (isNaN(inputDate.getTime())) {
        alert('Invalid date. Please enter a correct date.');
        return;
    }
    var currentDate = new Date();
    var years = currentDate.getFullYear() - inputDate.getFullYear();
    var months = currentDate.getMonth() - inputDate.getMonth();
    var days = currentDate.getDate() - inputDate.getDate();
    resultContainer.innerHTML = "\n        <span>".concat(years, "</span> years <br />\n        <span>").concat(months, "</span> months <br />\n        <span>").concat(days, "</span> days\n    ");
}
var form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', startCountdown);
}
