function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this._isPowerSave = true;
    this.POWER_SAVE_ON_MAX = 25;
    this.POWER_SAVE_OFF_MAX = 32;
    this.temperature = 20;
    this.powerSaveOnError = "POWER SAVING MODE ON: Maximum temperature is " + this.POWER_SAVE_ON_MAX;
    this.powerSaveOffError = "POWER SAVING MODE OFF: Maximum temperature is " + this.POWER_SAVE_OFF_MAX;
}

Thermostat.prototype.up = function() {
  if (this.powerSaveOn()) {
    throw new Error(this.powerSaveOnError);
  }
  else if (this.powerSaveOff()) {
    throw new Error(this.powerSaveOffError);
  } else {
  this.temperature += 1;
}
};

Thermostat.prototype.powerSaveOn = function () {
  return (this._isPowerSave === true && this.temperature === this.POWER_SAVE_ON_MAX);
};

Thermostat.prototype.powerSaveOff = function () {
  return (this._isPowerSave === false && this.temperature === this.POWER_SAVE_OFF_MAX);
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature is 10");
  }
  this.temperature -= 1;
};

Thermostat.prototype.powerSaveToggle = function(){
  this._isPowerSave = !this._isPowerSave;
};
