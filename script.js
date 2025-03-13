// DOM Elements
const skill = document.getElementById("skill");
const experience = document.getElementById("ex");
const education = document.getElementById("edu");
const data = document.getElementById("data");
const h = document.getElementById("h");

// Default content on page load
window.addEventListener("load", function () {
    h.innerHTML = `
        <h2 style="text-align:center;">Skills</h2>
        <div class="icon-container">
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="SQL"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS"></div>
        </div>
    `;
});

// Skills Section
skill.addEventListener("mouseenter", function () {
    h.innerHTML = `
        <h2 style="text-align:center;">Skills</h2>
        <div class="icon-container">
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="SQL"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML"></div>
            <div class="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS"></div>
        </div>
    `;
});

// Experience Section
experience.addEventListener("mouseenter", function () {
    h.innerHTML = `
        <h2 style="text-align:center;">Experience</h2>
        <p>As a dedicated and proactive student, I have gained valuable experience through academic projects.</p>
        <p>Academic Projects: Successfully completed multiple projects, demonstrating strong research, analytical, and presentation skills.</p>
    `;
});

// Education Section
education.addEventListener("mouseenter", function () {
    h.innerHTML = `
        <h2 style="text-align:center; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Education</h2>
        <div style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            <h1 style="font-size: 24px; color: #333;">10th Grade</h1>
            <p style="font-size: 18px; color: #555;">School: Army Public School</p>
            <p style="font-size: 18px; color: #555;">Year of Passing: 2017</p>
            <p style="font-size: 18px; color: #555;">Board: CBSE</p>
        </div>
        <div style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            <h1 style="font-size: 24px; color: #333;">12th Grade</h1>
            <p style="font-size: 18px; color: #555;">School: Army Public School, Amritsar</p>
            <p style="font-size: 18px; color: #555;">Year of Passing: 2019</p>
            <p style="font-size: 18px; color: #555;">Board: CBSE</p>
        </div>
        <div style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            <h1 style="font-size: 24px; color: #333;">College</h1>
            <p style="font-size: 18px; color: #555;">University: Adamas University</p>
            <p style="font-size: 18px; color: #555;">Degree: Bachelor of Computer Applications (BCA)</p>
            <p style="font-size: 18px; color: #555;">Year of Passing: 2023</p>
        </div>
    `;
});