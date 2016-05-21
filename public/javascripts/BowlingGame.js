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
  var totalScore = 0

  var currentRoll = 0
  for (var frame = 0; frame < BowlingGame.numberOfFrames; frame++) {
    var firstRoll = this.rolls[currentRoll]
    var secondRoll = this.rolls[currentRoll + 1]

    if (this.isStrike(firstRoll)) {
      totalScore += this.scoreForStrike(currentRoll)
      currentRoll += BowlingGame.rollsInStrikeFrame
    } else if (this.isSpare(firstRoll, secondRoll)) {
      totalScore += this.scoreForSpare(currentRoll)
      currentRoll += BowlingGame.rollsInFrame
    } else {
      totalScore += firstRoll + secondRoll
      currentRoll += BowlingGame.rollsInFrame
    }
  }

  return totalScore
}

BowlingGame.prototype.isStrike = function(firstRoll) {
  return firstRoll == BowlingGame.allPins
}

BowlingGame.prototype.scoreForStrike = function(currentRoll) {
  return BowlingGame.allPins + this.bonusForStrike(currentRoll)
}

BowlingGame.prototype.bonusForStrike = function(currentRoll) {
  return this.rolls[currentRoll + 1] + this.rolls[currentRoll + 2]
}

BowlingGame.prototype.isSpare = function(firstRoll, secondRoll) {
  return firstRoll + secondRoll == BowlingGame.allPins
}

BowlingGame.prototype.scoreForSpare = function(currentRoll) {
  return BowlingGame.allPins + this.bonusForSpare(currentRoll)
}

BowlingGame.prototype.bonusForSpare = function(currentRoll) {
  return this.rolls[currentRoll + 2]
}
