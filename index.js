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

function sayHiToGrandma(string) {
  if (shout(string)) {
    return("I can\'t hear you!")
  }
}
