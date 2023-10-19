const dayInput = document.querySelector('input[placeholder="DD"]') as HTMLInputElement;
const monthInput = document.querySelector('input[placeholder="MM"]') as HTMLInputElement;
const yearInput = document.querySelector('input[placeholder="YYYY"]') as HTMLInputElement;
const resultContainer = document.querySelector('.result') as HTMLDivElement;

function startCountdown(event: Event) {
    event.preventDefault();

    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10) - 1;
    const year = parseInt(yearInput.value, 10);

    const inputDate = new Date(year, month, day);
    if (isNaN(inputDate.getTime())) {
        alert('Invalid date. Please enter a correct date.');
        return;
    }

    const currentDate = new Date();

    const years = currentDate.getFullYear() - inputDate.getFullYear();
    const months = currentDate.getMonth() - inputDate.getMonth();
    const days = currentDate.getDate() - inputDate.getDate();

    resultContainer.innerHTML = `
        <span>${years}</span> years <br />
        <span>${months}</span> months <br />
        <span>${days}</span> days
    `;
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', startCountdown);
}
