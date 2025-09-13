<!-- Contact -->
<section id="contact">
    <h2><span class="green-text">Contact</span> Me</h2>
    <div class="contact-box">
        <h4>Address</h4>
        <p>Sandwip, Chittagong, Bangladesh</p>
        <h4>Email</h4>
        <p>writarion@gmail.com</p>
        <h4>Phone</h4>
        <p>(+880) 1620302210</p>
    </div>

    <h3>Message Me</h3>
    <div class="contact-box">
        <form id="contact-form" action="#" method="POST">
            <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" required>
            <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" required>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <textarea id="message" name="message" rows="4" placeholder="Write your message" required></textarea>
            <button type="submit" class="send-button">Send</button>
            <p id="success-message" style="display:none; color:green;">Successfully Sent Message!</p>
        </form>
    </div>
</section>

<footer>
    <p>© 2025 Sabbir Hosen Akash. All rights reserved.</p>
</footer>

<!-- ===== JavaScript ===== -->
<script>
    // Menu Toggle
    document.querySelector(".menu-button").addEventListener("click", function () {
        let menu = document.querySelector(".menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Typing Effect
    const textArray = ["Bangladeshi Musician", "Writer", "Web Developer", "SEO Expert"];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing-effect");
    const typingSpeed = 100;
    const erasingSpeed = 50;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.innerHTML = textArray[textIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));

    // Background Color Changer
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33f6", "#f3ff33", "#33fff3", "#ffffff", "#000000", "#555555", "#8a2be2"];
    document.querySelector(".color-selector").addEventListener("click", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // Smooth Page Load Animation
    document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("loaded");
        document.querySelectorAll(".animate-box").forEach(box => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        });
    });

    // 3D Box Hover Effect
    document.querySelectorAll(".service-box, .education-box, .book-box, .contact-box, .organisations-box").forEach(box => {
        box.addEventListener("mousemove", (e) => {
            let {offsetX:x, offsetY:y} = e;
            let {clientWidth:width, clientHeight:height} = box;
            let moveX = (x - width/2)/25;
            let moveY = (y - height/2)/25;
            box.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
        });
        box.addEventListener("mouseleave", () => {
            box.style.transform = "rotateY(0) rotateX(0)";
        });
    });

    // Contact Form Submission (Demo)
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("success-message").style.display = "block";
        this.reset();
    });

    // Skills Progress Circle Animation
    function animateSkills() {
        const circles = document.querySelectorAll(".skill-circle");
        circles.forEach(circle => {
            const progress = circle.querySelector(".progress");
            const percent = circle.getAttribute("data-percent");
            const offset = 314 - (314 * percent / 100); // 2πr = 2*3.14*50=314
            setTimeout(() => {
                progress.style.strokeDashoffset = offset;
            }, 500);
        });
    }

    window.addEventListener("load", animateSkills);
</script>

</body>
</html>
