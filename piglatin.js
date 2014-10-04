// pig lation rules:
// For words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and "ay" is added
// For words that begin with vowel sounds or silent letter, you just add "way" to the end
//

// why you no work?!
// version one
var response = prompt('Hmm whatchu say?');
if (isNaN(response)) {
var responseVowels = ['a', 'e', 'i', 'o', 'u'];
var responseFirst = response.charAt(0);
var responseRest = response.substring(1, -1);
if (responseVowels.indexOf(responseFirst) != -1) {
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
var responseFirst = response.toLowerCase().substring(0, 1);
var responseRest = response.toLowerCase().substring(1);
var responseIndex = responseVowels.indexOf(responseFirst);
if (responseIndex != -1) {
  var responseWay = response + 'way';
} else {
  var responseWay = responseRest + responseFirst + 'ay';
}
alert(responseWay);
}


// version three splitting into separate words
var response = prompt('Hmm whatchu say?');
var vowels = ['a', 'e', 'i', 'o', 'u'];
if(isNaN(response)){
    var result = '';
    var words = response.split(' ');
    for(var i = 0;i<words.length;i++){
        var word = words[i];
        var wordFirst = word.toLowerCase().substring(0, 1);
        var wordRest = word.toLowerCase().substring(1);
        var wordIndex = vowels.indexOf(wordFirst);
        var newWord = '';
        if (wordIndex != -1) {
          newWord = word + 'way';
        } else {
          newWord = wordRest + wordFirst + 'ay';
        }
        result += newWord +' ';
    }
alert(result);
}