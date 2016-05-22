var NormalFrame = function(firstRoll, secondRoll) {
  this.firstRoll = firstRoll
  this.secondRoll = secondRoll
}

NormalFrame.prototype.score = function() {
  return this.firstRoll + this.secondRoll
}

NormalFrame.prototype.frameSize = 2
