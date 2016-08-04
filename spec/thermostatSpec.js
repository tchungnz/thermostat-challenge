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


});
