var BowlingGame = function() {
  this.rolls = []
}

BowlingGame.allPins = 10
BowlingGame.numberOfFrames = 10

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins)
}

BowlingGame.prototype.score = function() {
  return new BowlingGameScorer(this.rolls).score()
}
