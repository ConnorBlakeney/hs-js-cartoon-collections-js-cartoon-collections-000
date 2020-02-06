function dwarfRollCall(dwarves) {
  var array = [];
  for (var i = 0; i < dwarves.length / 2; i++) {
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

function findTheCheese(foods) {
  var cheeses = ["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i < foods.length; i++) {
    // cheeses.includes(foods[i])
    if ((foods[i] === cheeses[0]) || (foods[i] === cheeses [1]) || (foods[i] === cheeses[2]) || (foods[i] === cheeses[3])) {
      return foods[i];
    }
  }
  return "no cheese!";
}
//word = "one"
//word[0] === "o"
function wordsWithB(words) {
  // take in array with words
  var array = [];
  // return new array that contains all words with first array that start with letter B
  // words = [""garlic", "rosemary", "bread""]
  for (var i = 0; i < words.length; i++) {
    if (words[i][0] === "B") {
      array.push(words[i]);
    }
  }
  return array;
}



