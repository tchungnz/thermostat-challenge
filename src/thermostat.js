function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this._isPowerSave = true;
    this.POWER_SAVE_ON_MAX = 25;
    this.POWER_SAVE_OFF_MAX = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.LOW_ENERGY_LIMIT = 18;
    this.MEDIUM_ENERGY_LIMIT = 25;
}

Thermostat.prototype.powerSaveOnError = function() {
    return "POWER SAVING MODE ON: Maximum temperature is " + this.POWER_SAVE_ON_MAX;
};

Thermostat.prototype.powerSaveOffError = function() {
    return "POWER SAVING MODE OFF: Maximum temperature is " + this.POWER_SAVE_OFF_MAX;
};

Thermostat.prototype.up = function() {
  if (this.powerSaveOn()) {
    throw new Error(this.powerSaveOnError());
  }
  else if (this.powerSaveOff()) {
    throw new Error(this.powerSaveOffError());
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

Thermostat.prototype.resetTemp = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_ENERGY_LIMIT) {
    return "Low";
  } else if (this.temperature < this.MEDIUM_ENERGY_LIMIT) {
    return "Medium";
  }
  return "High";
};

Thermostat.prototype.powerSaveStatus = function() {
  if (this._isPowerSave === true) {
    return "ON";
  } else {
    return "OFF";
  }
};
