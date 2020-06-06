/////////////////////////////
// CODING CHALLENGE  - ADVANCED JS UDEMY COURSE
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


  /*
    --- Expert level ---
    
    8. After you display the result, display the next random question, so that the game never ends 
    (Hint: write a function for this and call it right after displaying the result)
    
    9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game 
    if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
    
    10. Track the user's score to make the game more fun! So each time an answer is correct,
     add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to,
      just do this with the tools you feel more comfortable at this point).
    
    11. Display the score in the console. Use yet another method for this.
    */




// from ex 8 
(function () { //IIFE function

    const GameQuestion = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    const showFinalScore = function () {
        alert("The game has ended and the final score is: " + score);
    };

    const q1 = new GameQuestion("Who is the coolest guitarist?", ["Prince", "Brian May", "D/'arcy Wretzky"], 0);
    const q2 = new GameQuestion("How many continents are there?", ["four", "seven", "eight", "ten"], 1);
    const q3 = new GameQuestion("Where does banksy come from?", ["London", "Brighton", "Bristol", "San Francisco"], 2);
    const q4 = new GameQuestion("Who is the creator of JavaScript?", ["Michael Jackson", "Amanda Palmer", "Rosie Blue", "Brandan Eich"], 3);
    const allQuestions = [q1, q2, q3, q4];
    let indexValue = Math.floor(Math.random() * allQuestions.length);
    let randomQuestion = allQuestions[indexValue];
    let score = 0;


    GameQuestion.prototype.gameCalc = function () {
        console.log(this.question);
        for (i = 0; i < this.answers.length; i++) {
            console.log(this.answers.indexOf(this.answers[i]) + " : " + this.answers[i]);
        }
        let playerAnsw = prompt("Please type the number of the correct answer from the console");
        if (playerAnsw === this.correctAnswer.toString()) {
            console.log("correct answer");
            score += 1;
            console.log("Your current score is: " + score);
            nextQuestion();

        } else if (playerAnsw === "exit") {
            showFinalScore();
            return false
        } else {
            console.log("incorrect answer");
            nextQuestion();
        }
    }
    randomQuestion.gameCalc();
    

    function nextQuestion() {
        indexValue = Math.floor(Math.random() * allQuestions.length);
        randomQuestion = allQuestions[indexValue];
        randomQuestion.gameCalc();
    }
    // nextQuestion();  //not calling the function here does not recall it  after 'exit' is entered


})();