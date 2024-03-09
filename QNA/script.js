const questions = document.querySelectorAll(".question");
questions.forEach(question => {
    question.addEventListener('click', () => {
        const icon = question.querySelector(".icon");
        const answer = question.querySelector(".answer");
        if (answer.classList.contains("hidden")) {
            questions.forEach(elem=>{
                elem.querySelector(".icon").innerHTML = `<img src="assets/images/icon-plus.svg" alt="">`
                elem.querySelector(".answer").classList.add("hidden")
            })
            icon.innerHTML = `<img src="assets/images/icon-minus.svg" alt="">`;
            answer.classList.remove("hidden");
        } else {
            icon.innerHTML = `<img src="assets/images/icon-plus.svg" alt="">`;
            answer.classList.add("hidden");
        }
    });
});
