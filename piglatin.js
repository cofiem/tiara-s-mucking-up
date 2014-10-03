// why you no work?!
// version one
var response = prompt('Hmm whatchu say?');
if (isNaN(response)) {
var responseVowels = ['a', 'e', 'i', 'o', 'u'];
var responseFirst = response.charAt(0);
var responseRest = response.substring(1, -1);
if (responseVowels.contains(responseFirst)) {
  var responseWay = response + 'way';
} else {
  var responseWay = responseRest + responseFirst + 'ay';
}
alert(responseWay);
}

// version two made using skillcrush's hint
var response = prompt('Hmm whatchu say?');
if (isNaN(response)) {
var responseVowels = ['a', 'e', 'i', 'o', 'u'];
var responseFirst = response.toLowerCase().subString(0, 1);
var responseRest = response.toLowerCase().substring(1);
var responseIndex = responseVowels.indexOf(responseFirst);
if (responseIndex >= 0) {
  var responseWay = response + 'way';
} else {
  var responseWay = responseRest + responseFirst + 'ay';
}
alert(responseWay);
}
