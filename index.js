function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  let myLog = string.toUpperCase();
  console.log(myLog);
}

function logWhisper(string) {
    let myLog = string.toLowerCase();
    console.log(myLog);
}


function sayHiToHeadphonedRoommate(string) {
    switch(true) {
        case string === string.toLowerCase(): {
            return "I can't hear you!";
        }
        case string === string.toUpperCase(): {
            return "YES INDEED!";
        }
        case string === "Let's have dinner together!": {
            return "I would love to!";
        }

    }
}









