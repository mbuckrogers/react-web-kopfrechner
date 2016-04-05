import React, { Component, PropTypes } from 'react';
import styles from './mystyles.css';

class ScoreBar extends Component {

    constructor(props) {
      super(props)
    }

    calcPercentage(games) {
      let noGames = games.length;
      if(noGames == 0) {
        return {correct: 100, incorrect: 0}
      }

      let noCorrect = games.reduce((cor,game) => {
        return game.result == game.answer ? cor + 1 : cor;
      }, 0)

      // Pecent
      let correct = Math.trunc(noCorrect / noGames * 100)
      return {correct:  correct, incorrect: 100 - correct}
    }

    render() {
      let stats = this.calcPercentage(this.props.games)
      console.log(stats)

      var widthStyle= {
        correct: { width: `${stats.correct}%`},
        incorrect: { width: `${stats.incorrect}%`},
      }

      return (
            <div>
                <div className={styles.correct} style={widthStyle.correct}>{stats.correct}%</div>
                <div className={styles.incorrect} style={widthStyle.incorrect}>{stats.incorrect}%</div>
            </div>
      );
    }
  }

export default ScoreBar
