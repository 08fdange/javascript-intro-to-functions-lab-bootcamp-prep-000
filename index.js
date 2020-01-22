function shout(string) {
  return string.toUpperCase() 
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout("hello") {
  console.log(string.shout) 
}
  
function logWhisper('hello') {
  console.log(string.whisper)
}



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

console.log(sayHiToGrandma("I love you, Grandma."))
