useStrict = function () {
'use strict';
};

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when constructed it', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it('has power saving mode on', function() {
      expect(thermostat.powerSavingMode).toBeTruthy();
    });
  });

  describe('the up button can', function() {
    it('increase the temperature', function() {
      thermostat.upButton();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe('the down button can', function() {
    it('decrease the temperature', function() {
      thermostat.downButton();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });

  describe('when decreasing temperature', function() {
    it('cannot go below 10 degrees', function() {
      for (var i = 0; i < 15; i++) {
        thermostat.downButton();
        }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('when power saving mode is on', function() {
    it('the max temperature is 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.upButton();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('the max temperature is 32 degrees', function() {
      thermostat.powerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.upButton();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('when the reset button is hit', function() {
    it('resets the temperature to 20', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.upButton();
      }
      thermostat.resetButton();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('is low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.downButton();
        }
        expect(thermostat.usageLevel()).toEqual('low');
      });
    });
    describe('when the temperature is between 18 and 25 degrees', function() {
      it('is medium-usage', function() {
        expect(thermostat.usageLevel()).toEqual('medium');
      });
    });
    describe('when the temperature is above 25 degrees', function() {
      it('is high-usage', function() {
        thermostat.powerSavingModeOff();
        for (var i = 0; i < 6; i++) {
          thermostat.upButton();
        }
        expect(thermostat.usageLevel()).toEqual('high');
      });
    });
  });

});
