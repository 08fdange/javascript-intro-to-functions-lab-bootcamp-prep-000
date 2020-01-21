function shout(string) {
  return string.toUpperCase() 
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(shout) {
  console.log(shout)
}
  
function logWhisper(whisper) {
  console.log(whisper)
}

logShout(shout("hello"))
logWhisper(whisper("HELLO"))


var uppercase = 'HELLO'

uppercase.toUpperCase() === 
uppercase // true

var lowercase = 'hello'
lowercase.toLowerCase() === 
lowercase // true

mixedCase.toLowerCase() === mixedCase
mixedCase // false

mixedCase.toUpperCase() === 
mixedCase // false

function sayHiToGrandma(string) {
  if (string === "HELLO") {
    return("YES INDEED!")
  }
  else if (string === "hello") {
    return("I can\'t hear you!")
  }
  else if(string === "I love you, Grandma.") {
    return("I love you, too.")
  }
}

console.log(sayHiToGrandma(whisper("")))
