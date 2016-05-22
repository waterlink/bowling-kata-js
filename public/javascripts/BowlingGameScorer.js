var BowlingGameScorer = function(rolls) {
  this.rolls = rolls
  this.totalScore = 0
  this.currentRoll = 0
}

BowlingGameScorer.prototype.score = function() {
  for (var frame = 0; frame < BowlingGame.numberOfFrames; frame++) {
    this.totalScore += this.currentFrame().score()
    this.currentRoll += this.currentFrame().frameSize
  }

  return this.totalScore
}

BowlingGameScorer.prototype.currentFrame = function() {
  return new FrameFactory(
    this.rolls[this.currentRoll],
    this.rolls[this.currentRoll + 1],
    this.rolls[this.currentRoll + 2]
  ).createFrame()
}
