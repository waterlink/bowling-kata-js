var StrikeFrame = function(firstRoll, secondRoll, thirdRoll) {
  this.firstRoll = firstRoll
  this.secondRoll = secondRoll
  this.thirdRoll = thirdRoll
}

StrikeFrame.prototype.score = function() {
  return this.firstRoll + this.secondRoll + this.thirdRoll
}

StrikeFrame.prototype.frameSize = 1
