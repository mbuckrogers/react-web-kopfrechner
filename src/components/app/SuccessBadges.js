import React, { Component, PropTypes } from 'react';

class SuccessBadges extends Component {

  constructor(props) {
    super(props)
  }

  calcRightWrong(games) {
    let noGames = games.length;
    if(noGames == 0) {
      return {correct: 0, incorrect: 0}
    }

    console.log(games.filter((game) => game.isCorrectAnswer()))
    let correct = games.filter((game) => game.isCorrectAnswer()).length
    return {correct: correct, incorrect: noGames - correct}
  }

  render() {
    let rigghtWrong = this.calcRightWrong(this.props.games)

    return(
      <div>
          <div className='w3-col s4'>
              <span className="w3-margin-right">Richtig </span>
              <span className='w3-badge w3-green'>{rigghtWrong.correct}</span>
          </div>
          <div className='w3-col s4'>
              <span className="w3-margin-right">Falsch </span>
              <span className='w3-badge w3-red'>{rigghtWrong.incorrect}</span>
          </div>
      </div>
    )
  }
}
export default SuccessBadges
