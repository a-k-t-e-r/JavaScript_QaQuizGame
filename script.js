/* Question Answer Quiz Game */

(function () {
    var Question = function (question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function (userSelection, score) {
        var scr;
        if (userSelection === this.correct) {
            scr = score(true);
            console.log('Answer is correct.');
        } else {
            scr = score(false);
            console.log('Wrong! Try again :)');
        }
        console.log('And, your current score is: ' + scr);
        console.log('===================================');
    }

    Question.prototype.displayScore = function () {
    }

    var q1 = new Question('Which language is it?', ['Java', 'JavaScript', 'C/C++'], 1);
    var q2 = new Question('Are programming language really fun?', ['Yes', 'No'], 0);
    var q3 = new Question('Who is learning?', ['Karim', 'Jaffar', 'Khalid', 'Akhtar'], 3);

    var questions = [q1, q2, q3];

    function calcScore() {
        var sc = 0;
        return function totalScore(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = calcScore();

    function nextQuestion() {
        var randomSelection = Math.floor(Math.random() * questions.length);
        questions[randomSelection].displayQuestion();

        var userInput = prompt('Select a valid answer.');

        if (userInput !== 'exit') {
            questions[randomSelection].checkAnswer(parseInt(userInput), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();