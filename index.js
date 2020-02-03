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

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
    return false;
  }
}

function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  var string = "no cheese!";
  for (var i = 0; i < foods.length; i++) {
    if ((foods[i] === cheeses[0]) || (foods[i] === cheeses[1]) || (foods[i] === cheeses[2])) {
      return foods[i];
    } 
  } 
  return string;
}
