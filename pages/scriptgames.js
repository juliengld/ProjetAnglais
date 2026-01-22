function checkAboutUsQuiz() {
    // Réponses correctes (ici, "Thibaut Dani" est toujours la bonne réponse)
    const correctAnswer = "Thibaut Dani";

    let score = 0;
    const totalQuestions = 3; // Nombre total de questions

    // Vérifier les réponses de chaque question
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`#q${i}`).value;
        if (selectedAnswer === correctAnswer) {
            score++;
        }
    }

    // Afficher le résultat dans la page HTML
    const resultDiv = document.getElementById("quizResult");
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}!`;

    // Message d'encouragement selon le score
    if (score === totalQuestions) {
        resultDiv.style.color = "green";
        resultDiv.innerHTML += "<br>Great job!";
    } else if (score > 0) {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML += "<br>Not bad, but try again!";
    } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML += "<br>Better luck next time!";
    }
}

function checkHistoryQuiz() {
    // Réponses correctes pour chaque question (les bonnes réponses sont définies par lettre)
    const correctAnswers = {
        q1: "B", // Breath-hold diving
        q2: "C", // HMS Challenger expedition
        q3: "A", // ROVs became practical tools
        q4: "A", // Seabed 2030
    };

    let score = 0;
    const totalQuestions = 4; // Nombre total de questions

    // Vérifier les réponses de chaque question
    for (let i = 1; i <= totalQuestions; i++) {
        // Récupérer la réponse sélectionnée pour chaque question
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        
        // Vérifier si l'utilisateur a répondu à la question
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[`q${i}`]) {
                score++; // Incrémenter le score si la réponse est correcte
            }
        }
    }

    // Afficher le résultat dans la page HTML
    const resultDiv = document.getElementById("quizResult");
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}!`;

    // Message d'encouragement selon le score
    if (score === totalQuestions) {
        resultDiv.style.color = "green";
        resultDiv.innerHTML += "<br>Great job!";
    } else if (score > 0) {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML += "<br>Not bad, but try again!";
    } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML += "<br>Better luck next time!";
    }
}
