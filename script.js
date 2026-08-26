/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const container =
        document.querySelector(".hearts");

    if (!container) return;

    const heart =
        document.createElement("span");

    const emojis = [
        "💖",
        "💕",
        "💗",
        "✨",
        "🌸",
        "🪢"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);
}


setInterval(createHeart, 500);


/* =========================
   SURPRISE BUTTON
========================= */

function openSurprise() {

    const surprise =
        document.getElementById("surprise");

    if (!surprise) return;

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createConfetti();

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const emojis = [
        "💖",
        "💕",
        "✨",
        "🌸",
        "🎉",
        "🪢"
    ];

    for (let i = 0; i < 35; i++) {

        const item =
            document.createElement("div");

        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top = "-30px";

        item.style.fontSize =
            (18 + Math.random() * 20) + "px";

        item.style.zIndex = "9999";

        item.style.transition =
            "transform 3s linear, opacity 3s";

        document.body.appendChild(item);

        setTimeout(() => {

            item.style.transform =
                `translateY(110vh) rotate(720deg)`;

            item.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            item.remove();

        }, 3200);

    }

}


/* =========================
   COUNTDOWN
========================= */

function startCountdown() {

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");

    if (!days ||
        !hours ||
        !minutes ||
        !seconds
    ) return;


    /*
       Change this date if you want
       another Raksha Bandhan date.
    */

    const target =
        new Date(
            "2027-08-17T00:00:00"
        ).getTime();


    function update() {

        const now =
            new Date().getTime();

        const difference =
            target - now;


        if (difference <= 0) {

            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";

            return;

        }


        const d =
            Math.floor(
                difference / 86400000
            );

        const h =
            Math.floor(
                (difference % 86400000) /
                3600000
            );

        const m =
            Math.floor(
                (difference % 3600000) /
                60000
            );

        const s =
            Math.floor(
                (difference % 60000) /
                1000
            );


        days.innerHTML =
            String(d).padStart(2, "0");

        hours.innerHTML =
            String(h).padStart(2, "0");

        minutes.innerHTML =
            String(m).padStart(2, "0");

        seconds.innerHTML =
            String(s).padStart(2, "0");

    }


    update();

    setInterval(update, 1000);

}


startCountdown();