Rock Paper Scissors – Interactive Web Game 🎮
An interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript, featuring dynamic UI updates and real-time game logic.

📌 Features
✅ Dynamic UI Rendering: Game elements are created and removed using JavaScript’s DOM manipulation.
✅ Event-Driven Gameplay: Users select Rock, Paper, or Scissors, triggering event listeners to determine game outcomes.
✅ Game State Management: Tracks wins, losses, and ties, displaying results in a scrollable game log.
✅ Replay Functionality: Allows players to reset and play again without refreshing the page.
✅ Custom Styling: Uses CSS absolute positioning to anchor the game log at the bottom of the game container.

🖼️ Screenshot
<img width="1271" alt="Rock Paper Scissors Screenshot" src="https://github.com/user-attachments/assets/b280cf27-eb00-472e-94c1-16f08f04d33c" />


🚀 How to Run
Clone the repository:
sh
Copy
Edit
git clone https://github.com/yourusername/RockPaperScissors.git
Navigate to the project folder:
sh
Copy
Edit
cd RockPaperScissors
Open RockPaperScissors.html in a web browser.

🛠️ Technologies Used
HTML – Structure of the game.
CSS – Styling and positioning elements.
JavaScript – Game logic, event handling, and DOM manipulation.

🔧 Challenges & Solutions
Positioning Issues: The game log was initially appearing outside the intended area. Fixed by setting position: relative; on the parent container.
Repeated Code Blocks: Reduced redundancy in rpsSetup and rpsSetupAgain to improve efficiency.
Asynchronous Behavior: Attempted to introduce a loading screen, but adjustments were needed for proper setTimeout() handling.

📜 Future Improvements
🔹 Add animations for player choices.
🔹 Implement score tracking across multiple rounds.
🔹 Introduce a leaderboard using local storage or a database.
