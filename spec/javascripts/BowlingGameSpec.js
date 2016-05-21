describe("BowlingGame", function() {
  describe("gutter game", function() {
    it("has a 0 score", function() {
      expect(gameOf(0).score()).toEqual(0)
    })
  })

  describe("game of ones", function() {
    it("has a score of 20", function() {
      expect(gameOf(1).score()).toEqual(20)
    })
  })

  describe("game of ones with one spare", function() {
    it("has a score of 10 + 1 + 18 = 29", function() {
      expect(spareAndOnes().score()).toEqual(29)
    })
  })

  describe("game of ones with shifted 'spare'", function() {
    it("has a score of 10 + 18 = 28", function() {
      expect(shiftedSpareAndOnes().score()).toEqual(28)
    })
  })

  describe("game of ones with spare at the end", function() {
    it("has a score of 18 + 10 + 1 = 29", function() {
      expect(onesAndSpare().score()).toEqual(29)
    })
  })

  describe("game of ones with one strike", function() {
    it("has a score of 10 + 1 + 1 + 18 = 30", function() {
      expect(strikeAndOnes().score()).toEqual(30)
    })
  })

  describe("game of ones with strike at the end", function() {
    it("has a score of 18 + 10 + 1 + 1 = 30", function() {
      expect(onesAndStrike().score()).toEqual(30)
    })
  })

  describe("golden game", function() {
    it("has a score of 300", function() {
      expect(goldenGame().score()).toEqual(300)
    })
  })

  function gameOf(ns) {
    var game = new BowlingGame()
    for (var i = 0; i < 20; i++) {
      game.roll(ns)
    }
    return game
  }

  function spareAndOnes() {
    var game = new BowlingGame()
    game.roll(3)
    game.roll(7)
    for (var i = 0; i < 18; i++) {
      game.roll(1)
    }
    return game
  }

  function shiftedSpareAndOnes() {
    var game = new BowlingGame()
    game.roll(1)
    game.roll(3)
    game.roll(7)
    for (var i = 0; i < 17; i++) {
      game.roll(1)
    }
    return game
  }

  function onesAndSpare() {
    var game = new BowlingGame()
    for (var i = 0; i < 18; i++) {
      game.roll(1)
    }
    game.roll(3)
    game.roll(7)
    game.roll(1)
    return game
  }

  function strikeAndOnes() {
    var game = new BowlingGame()
    game.roll(10)
    for (var i = 0; i < 18; i++) {
      game.roll(1)
    }
    return game
  }

  function onesAndStrike() {
    var game = new BowlingGame()
    for (var i = 0; i < 18; i++) {
      game.roll(1)
    }
    game.roll(10)
    game.roll(1)
    game.roll(1)
    return game
  }

  function goldenGame() {
    var game = new BowlingGame()
    for (var i = 0; i < 12; i++) {
      game.roll(10)
    }
    return game
  }
})
