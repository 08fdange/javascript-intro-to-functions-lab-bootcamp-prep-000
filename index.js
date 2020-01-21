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

function sayHiToGrandma(string) {
  if (shout(string)) {
    return("YES INDEED!")
  }
  if (whisper(string)) {
    return("I can\'t hear you!")
  }
  if (string === "I love you, Grandma.") {
    return("I love you, too.")
  }
}

console.log(sayHiToGrandma(whisper("hello")))
