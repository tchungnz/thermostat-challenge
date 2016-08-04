describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('when the up button is pressed', function() {
      it('it increases the temperature by 1', function() {
        thermostat.up();
        expect(thermostat.temperature).toEqual(21);
      });
  });

  describe('when the down button is pressed', function() {
      it('it decreases the temperature by 1', function() {
        thermostat.down();
        expect(thermostat.temperature).toEqual(19);
      });
  });

  describe('minimum temperature', function() {
    it('has a minimum temperature of 10', function() {
      for(i = 19; i > 9; i --) {
        thermostat.down();
      }
      expect(function() { thermostat.down(); } ).toThrowError("Minimum temperature is 10");
    });
  });

  describe('while power saving mode is on', function() {
    it('has a maximum temperature of 25', function(){
      for(i = 21; i < 26; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up(); }).toThrowError("POWER SAVING MODE ON: Maximum temperature is 25");
    });
  });

  describe('when power saving mode is off', function () {
    it('the maximum temperature is 32 degrees', function () {
      thermostat.powerSaveToggle();
      for(i = 21; i < 33; i++) {
        thermostat.up();
      }
      expect(function() {
        thermostat.up();
      }).toThrowError('POWER SAVING MODE OFF: Maximum temperature is 32');
    });
  });


});
