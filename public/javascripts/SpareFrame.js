var SpareFrame = function(firstRoll, secondRoll, thirdRoll) {
  this.firstRoll = firstRoll
  this.secondRoll = secondRoll
  this.thirdRoll = thirdRoll
}

SpareFrame.prototype.score = function() {
  return this.firstRoll + this.secondRoll + this.thirdRoll
}

SpareFrame.prototype.frameSize = 2
