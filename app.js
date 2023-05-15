// Instantiate the Elevator class
const elevator = new Elevator();

// Get references to DOM elements
const openDoorBtn = document.getElementById('open-door-btn');
const closeDoorBtn = document.getElementById('close-door-btn');
const floorButtons = document.getElementsByClassName('floor-btn');
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');

// Function to update the door states
function updateDoorStates() {
  if (elevator.doorOpen) {
    leftDoor.style.transform = 'translateX(-50%)';
    rightDoor.style.transform = 'translateX(50%)';
  } else {
    leftDoor.style.transform = 'translateX(0)';
    rightDoor.style.transform = 'translateX(0)';
  }
}
// Function to update the button states
function updateButtonStates() {
  if (elevator.doorOpen) {
    openDoorBtn.disabled = true;
    closeDoorBtn.disabled = false;
    Array.from(floorButtons).forEach((button) => {
      button.disabled = true;
    });
  } else {
    openDoorBtn.disabled = false;
    closeDoorBtn.disabled = true;
    Array.from(floorButtons).forEach((button) => {
      button.disabled = false;
    });
  }
}

// Add event listeners to buttons
openDoorBtn.addEventListener('click', () => {
  elevator.pushDoorOpenButton();
  updateButtonStates();
});

closeDoorBtn.addEventListener('click', () => {
  elevator.pushDoorClosedButton();
  updateButtonStates();
});

Array.from(floorButtons).forEach((button) => {
  button.addEventListener('click', () => {
    const floor = parseInt(button.dataset.floor);
    elevator.pressFloorButton(floor);
    button.classList.add('active');
    updateButtonStates();
  });
});

// Add event listeners to buttons
openDoorBtn.addEventListener('click', () => {
    elevator.pushDoorOpenButton();
    updateButtonStates();
    updateDoorStates();
  });
  
closeDoorBtn.addEventListener('click', () => {
    elevator.pushDoorClosedButton();
    updateButtonStates();
    updateDoorStates();
  });
// Initial button state update
updateButtonStates();
updateDoorStates();