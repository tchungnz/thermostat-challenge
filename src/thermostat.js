Thermostat = function() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MED_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 25;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.upButton = function() {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode === true) {
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  return this.temperature === this.MAX_LIMIT_PSM_OFF;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.getPowerSavingMode = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.resetButton = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usageLevel = function () {
  if(this.temperature < this.MED_USAGE_LIMIT) {
    return 'low';
} else if(this.temperature < this.HIGH_USAGE_LIMIT && this.temperature >= this.MED_USAGE_LIMIT) {
    return 'medium';
} else if(this.temperature >= this.HIGH_USAGE_LIMIT) {
    return 'high';
}
};
