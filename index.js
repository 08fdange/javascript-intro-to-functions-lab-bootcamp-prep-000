function shout(string) {
  return string.toUpperCase() 
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(shout()) {
  console.log(shout)
}
  
function logWhisper(whisper()) {
  console.log(whisper)
}

logShout(shout("hello"))
logWhisper(whisper("HELLO"))

function sayHiToGrandma(string) {
  if (shout(string)) {
    return("I can\'t hear you!")
  }
}
