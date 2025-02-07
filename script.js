function digitalClock() {
    let dateFunction = new Date();
    let day = dateFunction.getDay();
    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();
    let timeFormat = 'AM';

    timeFormat = hours >= 12 ? 'PM' : 'AM';
    hours = hours === 0 ? 12 : hours;
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = timeFormat;

    document.querySelectorAll('.weekdays span').forEach((span) => {
        span.classList.remove('active');
    });
    let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`);
    todaysDay.classList.add('active');

    let date = dateFunction.getDate();
    let month = dateFunction.toLocaleString('default', { month: 'long' });
    let year = dateFunction.getFullYear();
    document.querySelector('.date').innerHTML = `${date < 10 ? '0' + date : date} ${month} ${year}`;
}

setInterval(digitalClock, 1000);