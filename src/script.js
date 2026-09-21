// These five options appear each time the page is opened.
const activities = [
    "Play a game",
    "Watch a film",
    "Go for a walk",
    "Read a book",
    "Work on a project"
];

const pickButton = document.querySelector("#pick-button");
const activityResult = document.querySelector("#activity-result");
const activityList = document.querySelector("#activity-list");
const activityCount = document.querySelector("#activity-count");
const activityForm = document.querySelector("#activity-form");
const newActivityInput = document.querySelector("#new-activity");
const formMessage = document.querySelector("#form-message");

function renderActivities() {
    // Remove the old list items before drawing the current list.
    activityList.replaceChildren();

    activityCount.textContent = activities.length;
    activityCount.setAttribute(
        "aria-label",
        `${activities.length} activities`
    );

    pickButton.disabled = activities.length === 0;

    if (activities.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.className = "empty-message";
        emptyItem.textContent = "No activities yet. Add one below.";
        activityList.append(emptyItem);
        return;
    }

    activities.forEach((activity, index) => {
        const listItem = document.createElement("li");

        const name = document.createElement("span");
        name.className = "activity-name";
        name.textContent = activity;

        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.setAttribute(
            "aria-label",
            `Remove ${activity}`
        );

        removeButton.addEventListener("click", () => {
            activities.splice(index, 1);
            renderActivities();

            formMessage.textContent = `Removed "${activity}".`;

            // Clear the result if its activity was removed.
            if (activityResult.textContent === activity) {
                activityResult.textContent = activities.length
                    ? "Ready when you are."
                    : "Add an activity to get started.";

                pickButton.textContent = "Pick for me";
            }
        });

        listItem.append(name, removeButton);
        activityList.append(listItem);
    });
}

function pickActivity() {
    if (activities.length === 0) {
        return;
    }

    const randomIndex = Math.floor(
        Math.random() * activities.length
    );

    activityResult.textContent = activities[randomIndex];
    pickButton.textContent = "Pick again";
}

activityForm.addEventListener("submit", (event) => {
    // Stop the form from reloading the page.
    event.preventDefault();

    const newActivity = newActivityInput.value.trim();

    if (!newActivity) {
        formMessage.textContent = "Enter an activity first.";
        return;
    }

    const alreadyExists = activities.some(
        (activity) =>
            activity.toLowerCase() === newActivity.toLowerCase()
    );

    if (alreadyExists) {
        formMessage.textContent =
            "That activity is already on the list.";
        return;
    }

    activities.push(newActivity);
    renderActivities();

    newActivityInput.value = "";
    newActivityInput.focus();
    formMessage.textContent = `Added "${newActivity}".`;
});

pickButton.addEventListener("click", pickActivity);

// Draw the five starting activities when the page loads.
renderActivities();