function dwarfRollCall(dwarves) {
  var array = [];
  for (var i = 0; i < dwarves.length; i++) {
    array.push(`${i + 1}. ${dwarves[i]} `);
  }
  return array.join("");
}

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return array;
}

function longPlaneteerCalls(calls) {
  for (var i = 0; i < calls.length; i++) {
    if (calls[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese()