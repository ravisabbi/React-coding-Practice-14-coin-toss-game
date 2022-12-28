// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, imgId: 0}

  getToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        imgId: tossResult,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        imgId: tossResult,
      }))
    }
  }

  render() {
    const {total, heads, tails, imgId} = this.state

    const imageUrl =
      imgId === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img-logo" />
          <button type="button" className="toss-btn" onClick={this.getToss}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result-item">Total:{total}</p>
            <p className="result-item">Heads:{heads}</p>
            <p className="result-item">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
