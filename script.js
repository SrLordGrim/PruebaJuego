document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const feedback = document.getElementById('feedback');

    // Acertijo simple
    const correctAnswer = "clave"; // Respuesta correcta

    if (userInput === correctAnswer) {
        feedback.textContent = "¡Correcto! Has escapado de la habitación.";
        feedback.style.color = "green";
        document.getElementById('description').textContent = "¡Felicidades! Has resuelto el acertijo.";
    } else {
        feedback.textContent = "Incorrecto. Intenta de nuevo.";
        feedback.style.color = "red";
    }

    // Limpiar el campo de entrada
    document.getElementById('userInput').value = '';
});
