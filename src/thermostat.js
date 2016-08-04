function Thermostat() {
    this._MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this._MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature is 10");
  }
  this.temperature -= 1;
};
