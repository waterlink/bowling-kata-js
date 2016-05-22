var FrameFactory = function(firstRoll, secondRoll, thirdRoll) {
  this.firstRoll = firstRoll
  this.secondRoll = secondRoll
  this.thirdRoll = thirdRoll
}

FrameFactory.prototype.createFrame = function() {
  if (this.isStrike()) {
    return new StrikeFrame(this.firstRoll, this.secondRoll, this.thirdRoll)
  } else if (this.isSpare()) {
    return new SpareFrame(this.firstRoll, this.secondRoll, this.thirdRoll)
  } else {
    return new NormalFrame(this.firstRoll, this.secondRoll)
  }
}

FrameFactory.prototype.isStrike = function() {
  return this.firstRoll == BowlingGame.allPins
}

FrameFactory.prototype.isSpare = function() {
  return this.firstRoll + this.secondRoll == BowlingGame.allPins
}
