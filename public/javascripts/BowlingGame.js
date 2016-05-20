var BowlingGame = function() {
  this.rolls = []
}

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins)
}

BowlingGame.prototype.score = function() {
  var totalScore = 0

  for (var i = 0; i < this.rolls.length; i++) {
    totalScore += this.rolls[i]

    if (this.rolls[i - 1] + this.rolls[i] == 10) {
      totalScore += this.rolls[i + 1]
    }
  }

  return totalScore
}
