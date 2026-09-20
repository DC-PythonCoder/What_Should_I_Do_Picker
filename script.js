const activities = [
    "Play a game",
    "Watch a film",
    "Go for a walk",
    "Read a book",
    "Work on a project",
    "Cook a new recipe",
    "Listen to music",
    "Exercise",
    "Go surfing",
    "Learn a new skill",
    "Go for a drive",
    "Meditate",
    "Study",
    "Learn a language"
];

const pickButton = document.querySelector("#pick-button");
const activityResult = document.querySelector("#activity-result");

function pickActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const selectedActivity = activities[randomIndex];

    activityResult.textContent = selectedActivity;
    pickButton.textContent = "Pick again";
}

pickButton.addEventListener("click", pickActivity);