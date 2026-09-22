
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // QUIZ QUESTIONS
    // ==========================================

    const questions = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which language is used to style a webpage?",
            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            answer: 1
        },

        {
            question: "Which language is used to make webpages interactive?",
            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],
            answer: 2
        },

        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },

        {
            question: "Which CSS property changes the text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "background"
            ],
            answer: 2
        },

        {
            question: "Which symbol is used for a single-line comment in JavaScript?",
            options: [
                "//",
                "##",
                "<!-- -->",
                "**"
            ],
            answer: 0
        },

        {
            question: "Which HTML tag is used to display an image?",
            options: [
                "<image>",
                "<img>",
                "<picture>",
                "<src>"
            ],
            answer: 1
        },

        {
            question: "Which keyword can be used to declare a variable in JavaScript?",
            options: [
                "variable",
                "let",
                "define",
                "int"
            ],
            answer: 1
        },

        {
            question: "Which HTTP method is commonly used to retrieve data?",
            options: [
                "POST",
                "PUT",
                "GET",
                "DELETE"
            ],
            answer: 2
        },

        {
            question: "Which language is commonly used for working with relational databases?",
            options: [
                "SQL",
                "CSS",
                "HTML",
                "Bootstrap"
            ],
            answer: 0
        }
    ];


    // ==========================================
    // STUDENT FORM
    // ==========================================

    const studentForm = document.getElementById("studentForm");

    if (studentForm) {

        studentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const roll = document.getElementById("roll").value;

            const section =
                document.querySelector('input[name="section"]:checked').value;

            localStorage.setItem("studentName", name);
            localStorage.setItem("rollNumber", roll);
            localStorage.setItem("section", section);

            window.location.href = "quiz.html";
        });

        return;
    }


    // ==========================================
    // QUIZ PAGE
    // ==========================================

    const questionText = document.getElementById("questionText");

    if (!questionText) {
        return;
    }


    let currentQuestion = 0;

    let selectedOption = -1;

    let score = 0;

    let timeLeft = 60;

    let timer;


    // ==========================================
    // STUDENT INFORMATION
    // ==========================================

    const studentName = localStorage.getItem("studentName");
    const rollNumber = localStorage.getItem("rollNumber");
    const section = localStorage.getItem("section");

    document.getElementById("studentInfo").innerText =
        `${studentName} | Roll No: ${rollNumber} | Section: ${section}`;


    // ==========================================
    // DISPLAY QUESTION
    // ==========================================

    function displayQuestion() {

        clearInterval(timer);

        selectedOption = -1;

        timeLeft = 60;

        const question = questions[currentQuestion];

        document.getElementById("questionNumber").innerText =
            `Question ${currentQuestion + 1} of ${questions.length}`;

        document.getElementById("questionText").innerText =
            question.question;


        const optionsContainer =
            document.getElementById("options");

        optionsContainer.innerHTML = "";


        question.options.forEach(function (option, index) {

            const optionDiv = document.createElement("div");

            optionDiv.classList.add("option");

            optionDiv.innerText =
                `${index + 1}. ${option}`;

            optionDiv.dataset.index = index;


            optionDiv.addEventListener("click", function () {

                selectedOption = index;

                updateSelectedOption();

            });


            optionsContainer.appendChild(optionDiv);

        });


        updateSelectedOption();

        startTimer();
    }


    // ==========================================
    // SELECTED OPTION
    // ==========================================

    function updateSelectedOption() {

        const options =
            document.querySelectorAll(".option");

        options.forEach(function (option, index) {

            if (index === selectedOption) {

                option.classList.add("selected");

            } else {

                option.classList.remove("selected");

            }

        });
    }


    // ==========================================
    // TIMER
    // ==========================================

    function startTimer() {

        updateTimer();

        timer = setInterval(function () {

            timeLeft--;

            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(timer);

                nextQuestion();

            }

        }, 1000);
    }


    function updateTimer() {

        const minutes =
            Math.floor(timeLeft / 60);

        const seconds =
            timeLeft % 60;


        document.getElementById("timer").innerText =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }


    // ==========================================
    // NEXT QUESTION
    // ==========================================

    function nextQuestion() {

        clearInterval(timer);


        // Check answer
        if (selectedOption === questions[currentQuestion].answer) {

            score++;

        }


        currentQuestion++;


        if (currentQuestion >= questions.length) {

            finishQuiz();

        } else {

            displayQuestion();

        }
    }


    // ==========================================
    // NEXT BUTTON
    // ==========================================

    document.getElementById("nextButton")
        .addEventListener("click", function () {

            nextQuestion();

        });


    // ==========================================
    // KEYBOARD EVENTS
    // ==========================================

    document.addEventListener("keydown", function (event) {

        const options =
            document.querySelectorAll(".option");


        if (event.key === "ArrowDown") {

            event.preventDefault();

            if (selectedOption < options.length - 1) {

                selectedOption++;

            } else {

                selectedOption = 0;

            }

            updateSelectedOption();
        }


        if (event.key === "ArrowUp") {

            event.preventDefault();

            if (selectedOption > 0) {

                selectedOption--;

            } else {

                selectedOption = options.length - 1;

            }

            updateSelectedOption();
        }


        if (event.key === "Enter") {

            event.preventDefault();

            nextQuestion();

        }

    });


    // ==========================================
    // FINISH QUIZ
    // ==========================================

    function finishQuiz() {

        clearInterval(timer);

        localStorage.setItem("quizScore", score);

        localStorage.setItem(
            "totalQuestions",
            questions.length
        );

        window.location.href = "result.html";
    }


    // ==========================================
    // START FIRST QUESTION
    // ==========================================

    displayQuestion();

});

