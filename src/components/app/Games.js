import React, {Component} from 'react';

class Games extends Component {

  render() {
      return(
        <div>
            {this.props.games.slice(0, 5).map( (game, index) => {
                return (
                    <div key={index} className={'w3-row w3-padding-0 w3-margin-0'}>
                        <GameLine  game={game}/>
                    </div>
                )
            })}
        </div>
      )
    }
  }

class GameLine extends Component {
    render() {

        let upDownn = this.props.game.isCorrectAnswer() ? 'fa-thumbs-up w3-text-green' : 'fa-thumbs-down w3-text-red'

        return (
        <div>
            <div className={'w3-col s1  w3-center'}><span>{this.props.game.numberValLeft}</span></div>
            <div className={'w3-col s1  w3-center'}><span>{this.props.game.operation.display}</span></div>
            <div className={'w3-col s1  w3-center'}><span>{this.props.game.numberValRight}</span></div>
            <div className={'w3-col s1  w3-center'}><span>=</span></div>
            <div className={'w3-col s4  w3-left'}><span>{this.props.game.result}  ({this.props.game.answer})</span></div>
            <div className={'w3-col s1  w3-left'}>
                <span className={'w3-text-green w3-center fa ' + upDownn}></span>
            </div>
        </div>
    )
  }
}

export default Games;
