var BowlingGame = function() {
  this.rolls = []
}

BowlingGame.allPins = 10
BowlingGame.numberOfFrames = 10
BowlingGame.rollsInFrame = 2
BowlingGame.rollsInStrikeFrame = 1

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins)
}

BowlingGame.prototype.score = function() {
  return new BowlingGameScorer(this.rolls).score()
}
