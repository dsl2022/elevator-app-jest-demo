class Elevator {
    constructor() {
      this.doorOpen = false;
      this.floor = 1;
      this.moving = false;
      this.sensePerson = false;
    }
  
    pushDoorOpenButton() {
        // UNCOMMENT THIS
        if(!this.moving)this.doorOpen = true;
        console.log('Door opened');
    }
  
    pushDoorClosedButton() {
      if (this.doorOpen && !this.sensePerson) {
        this.doorOpen = false;
        console.log('Door closed');
      }
    }
  
    pressFloorButton(floor) {
      if (floor >= 1 && floor <= 12) {
        // Code to handle pressing a floor button
        this.floor = floor;
        console.log(`Floor ${floor} selected`);
      }
    }
  }
  
  module.exports = Elevator;
  