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



var uppercase = 'HELLO'


function sayHiToGrandma(string) {
  if (string.toUpperCase === string) {
    return("YES INDEED!")
  }
  else if (string.toLowerCase === string) {
    return("I can\'t hear you!")
  }
  else if(string === "I love you, Grandma.") {
    return("I love you, too.")
  }
}

console.log(sayHiToGrandma("I love you, Grandma."))
