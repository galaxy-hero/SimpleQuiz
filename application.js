const answers = ['C', 'B', 'A', 'B','A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', ev => {
    ev.preventDefault();
    let score = 0;
    const actualAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    actualAnswers.forEach((answer, i) => {
        if(answer === answers[i]) {
            score += 20;
        }
    });

    console.log(score);
})