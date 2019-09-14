const answers = ['C', 'B', 'A', 'B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', ev => {
    ev.preventDefault();
    let score = 0;
    const actualAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    actualAnswers.forEach((answer, i) => {
        if(answer === answers[i]) {
            score += 20;
        }
    });

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    if(score > 0 && score < 50) {
        result.querySelector
    }
})