function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this._isPowerSave = true;
    this.POWER_SAVE_MAX = 25;
    this.temperature = 20;
}

Thermostat.prototype.up = function() {
  if( this._isPowerSave === true && this.temperature === this.POWER_SAVE_MAX ) {
    throw new Error("POWER SAVING MODE: Maximum temperature is 25");
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature is 10");
  }
  this.temperature -= 1;
};

// Thermostat.prototype.powerSave = function(){
//   this._isPowerSave = !this._isPowerSave;
// };
