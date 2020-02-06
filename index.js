function dwarfRollCall(dwarves) {
  var array = [];
  for (var i = 0; i < dwarves.length; i++) {
    array.push(`${i + 1}. ${dwarves[i]} `);
  }
  return array.join("");
}