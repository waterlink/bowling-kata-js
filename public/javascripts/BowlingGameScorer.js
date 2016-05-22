var BowlingGameScorer = function(rolls) {
  this.rolls = rolls
  this.totalScore = 0
  this.currentRoll = 0
}

BowlingGameScorer.prototype.score = function() {
  for (var frame = 0; frame < BowlingGame.numberOfFrames; frame++) {
    if (this.isStrike()) {
      this.totalScore += this.scoreForStrike()
      this.currentRoll += BowlingGame.rollsInStrikeFrame
    } else if (this.isSpare()) {
      this.totalScore += this.scoreForSpare()
      this.currentRoll += BowlingGame.rollsInFrame
    } else {
      this.totalScore += this.scoreForNormalFrame()
      this.currentRoll += BowlingGame.rollsInFrame
    }
  }

  return this.totalScore
}

BowlingGameScorer.prototype.firstRoll = function() {
  return this.rolls[this.currentRoll]
}

BowlingGameScorer.prototype.secondRoll = function() {
  return this.rolls[this.currentRoll + 1]
}

BowlingGameScorer.prototype.isStrike = function() {
  return this.firstRoll() == BowlingGame.allPins
}

BowlingGameScorer.prototype.scoreForStrike = function() {
  return BowlingGame.allPins + this.bonusForStrike()
}

BowlingGameScorer.prototype.bonusForStrike = function() {
  return this.rolls[this.currentRoll + 1] + this.rolls[this.currentRoll + 2]
}

BowlingGameScorer.prototype.isSpare = function() {
  return this.scoreForNormalFrame() == BowlingGame.allPins
}

BowlingGameScorer.prototype.scoreForSpare = function() {
  return BowlingGame.allPins + this.bonusForSpare()
}

BowlingGameScorer.prototype.bonusForSpare = function() {
  return this.rolls[this.currentRoll + 2]
}

BowlingGameScorer.prototype.scoreForNormalFrame = function() {
  return this.firstRoll() + this.secondRoll()
}
