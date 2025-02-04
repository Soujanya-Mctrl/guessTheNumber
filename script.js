let randomNumber;
        let attempts = 0;
        let minRange = 1;
        let maxRange = 100;

        function setRange() {
            minRange = parseInt(document.getElementById('min-range').value) || 1;
            maxRange = parseInt(document.getElementById('max-range').value) || 100;
            if (minRange >= maxRange) {
                alert("Invalid range. Min should be less than Max.");
                return;
            }
            resetGame();
        }

        function generateRandomNumber() {
            randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
        }

        function checkGuess() {
            let guess = document.getElementById('guess').value;
            let message = document.getElementById('message');
            let hint = document.getElementById('hint');
            let playAgainButton = document.getElementById('play-again');
            
            if (!guess) {
                message.textContent = "Please enter a number!";
                return;
            }
            
            guess = parseInt(guess);
            attempts++;
            
            if (guess === randomNumber) {
                message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
                message.style.color = "#26d34b";
                playAgainButton.style.display = "block";
            } else if (guess < randomNumber) {
                message.textContent = "📉 Too low! Try again.";
                hint.textContent = `Hint: The number is greater than ${guess}.`;
                message.style.color = "red";
            } else {
                message.textContent = "📈 Too high! Try again.";
                hint.textContent = `Hint: The number is less than ${guess}.`;
                message.style.color = "red";
            }
        }
        
        function resetGame() {
            generateRandomNumber();
            attempts = 0;
            document.getElementById('guess').value = "";
            document.getElementById('message').textContent = "";
            document.getElementById('hint').textContent = "";
            document.getElementById('play-again').style.display = "none";
        }

        generateRandomNumber();

        