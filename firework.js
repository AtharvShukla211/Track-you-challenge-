document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Firework {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = Math.random() * 3 + 2;
            this.alpha = 1;
            this.speedY = Math.random() * -5 - 5;
            this.gravity = 0.1;
        }

        update() {
            this.y += this.speedY;
            this.speedY += this.gravity;
            this.alpha -= 0.02;
        }

        draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    let fireworks = [];

    function createFirework() {
        let colors = ["red", "yellow", "blue", "green", "purple", "orange"];
        for (let i = 0; i < 50; i++) {
            fireworks.push(new Firework(
                Math.random() * canvas.width,
                canvas.height,
                colors[Math.floor(Math.random() * colors.length)]
            ));
        }
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();
            if (firework.alpha <= 0) {
                fireworks.splice(index, 1);
            }
        });
        requestAnimationFrame(animateFireworks);
    }

    document.getElementById("celebrateFireworks").addEventListener("click", function () {
        createFirework();
        animateFireworks();
    });

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
