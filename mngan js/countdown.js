
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

        countDown = new Date("Aug 22, 2021 09:00:00").getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0)
            {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "The event has passed! Stay tuned for other events!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
        }, 0)
}());
