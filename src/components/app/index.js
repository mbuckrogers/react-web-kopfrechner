import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NumberView from './NumberView';
import ResultComp from './ResultComp';
import GameStore from './GameStore';
import Games from './Games'
import TwoNumberGenerator from './TwoNumberGenerator'
import SuccessBadges from './SuccessBadges'

class App extends Component {

    constructor() {
      super()
      this.state = {}
      this.state.gameStore = GameStore
      this.tNumGen = TwoNumberGenerator();
    }

    componentDidMount() {
      this.newGameAndStateChange()
    }

    newGameAndStateChange() {
      this.tNumGen.twoNumbers().then((twoNumArray) => {
        let tmpGameStore = Object.assign({}, this.state.gameStore)
        tmpGameStore.numbersGenerated = true
        tmpGameStore.newGame(...twoNumArray)
        this.setState({gameStore: tmpGameStore})
      })
    }

    onChange(event) {
      let tmpGameStore = Object.assign({}, this.state.gameStore)
      tmpGameStore.game.answer = event.target.value
      this.setState({gameStore: tmpGameStore})
    }

    onSubmit(event) {
      event.preventDefault()
      console.log("onSubmit " + event)
      let tmpGameStore = Object.assign({}, this.state.gameStore)
      tmpGameStore.numbersGenerated = false
      this.setState({gameStore: tmpGameStore})
      this.newGameAndStateChange()
    }

    render() {
      if(!this.state.gameStore.numbersGenerated) {
        return (
          <div>
              <header className={'w3-blue-grey w3-container w3-padding-bottom'}>
                  <h2>{'Kopf Rechner - Zahlen werden geholt'}</h2>
                  <div className={'w3-row w3-padding-0'}>
                      <SuccessBadges games={this.state.gameStore.games}/>
                  </div>
              </header>
          </div>
        )
      }

      return (

        <div>
            <header className={'w3-blue-grey w3-container w3-padding-bottom'}>
                <h2>{'Kopf Rechner'}</h2>
                <div className={'w3-row w3-padding-0'}>
                    <SuccessBadges games={this.state.gameStore.games}/>
                </div>
            </header>

            <div className={'w3-container w3-white w3-padding-16'}>
                <div className={'w3-row w3-padding-bottom'}>
                    <div className={'w3-col s1  w3-center w3-margin-8'}>
                        <NumberView numberVal={this.state.gameStore.game.numberValLeft}/>
                    </div>
                    <div className={'w3-col s1  w3-center w3-margin-8'}>
                        <span>{'x'}</span>
                    </div>
                    <div className={'w3-col s1  w3-center w3-margin-8'}>
                        <NumberView numberVal={this.state.gameStore.game.numberValRight}/>
                    </div>
                    <div>
                        <div>
                            <ResultComp
                                onChange={this.onChange.bind(this)}
                                onSubmit={this.onSubmit.bind(this)}
                                answer={this.state.gameStore.game.answer}/>
                        </div>
                    </div>
                </div>
                <div className={'w3-row w3-white w3-padding-16'}>
                    <Games games={this.state.gameStore.games}/>
                </div>
            </div>
        </div>
      );
    }
  }
  App.propTypes = {
    children: PropTypes.node
  };

  export default App;
