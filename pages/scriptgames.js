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
