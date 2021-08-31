function repeatMessage(message, repeatCount){
  // make sure message is a string
  if (typeof(message) != "string") {
    throw "message is not a string";
  }
  // make sure message is not empty
  if (message === "") {
    throw "message cannot be empty";
  }
  
  // make sure check repeatCount value as falsey boolean
  if (Boolean(repeatCount) === false) {
    // make sure the string printed at least once
    repeatCount = 1;
  }
  else if (isNaN(repeatCount)) {  // make sure repeatCount is a number
    throw "repeatCount is not a number";
  }

  let messageToShow = "";
  for (let index = 0; index < repeatCount; index++) {
  messageToShow += message;
  }
  return messageToShow;
  }

  module.exports = {
    repeatMessage
    }