document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const remaining = document.getElementById('remaining');
    const entered = document.getElementById('entered');

    const maxChars = 50;
    remaining.textContent = maxChars;
    entered.textContent = 0;

    textInput.addEventListener('input', function() {
        const currentLength = textInput.value.length;
        const charsLeft = maxChars - currentLength;
        remaining.textContent = charsLeft;
        entered.textContent = currentLength;


        if (charsLeft <= 10) {
            remaining.style.color = 'green';
        } else {
            remaining.style.color = '#dd724f';
        }
    });
});
