function shout(string) {
  return string.toUpperCase();
}
shout("hello");

function whisper(string) {
  return string.toLowerCase();
}
whisper("HELLO");

function logShout(string) {
  console.log(string.toUpperCase());
}
spy("HELLO");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
spy("hello");

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return `I can't hear you!`;
  } else if (string === string.toUpperCase()) {
    return `YES INDEED!`;
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
