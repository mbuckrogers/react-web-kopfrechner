class Game {
  constructor(lefti, righti) {
    this.numberValLeft = lefti
    this.numberValRight = righti
    this.result = this.numberValLeft * this.numberValRight;
    this.answer = '';
  }



  isCorrectAnswer() {
    return this.result == this.answer
  }

  logMe() {
    console.log(this.numberValLeft + " *  " + this.numberValRight + " = " + this.result)
  }
}

var GameStore = {

  numbersGenerated: false,
  game: undefined,
  games: [],

  newGame: function(lefti, righti) {
    if(this.game) {
      this.games.unshift(this.game)
    }

    this.game = new Game(lefti, righti)
    console.log("new Game")
    this.game.logMe()
  }

}

export default GameStore
