import {Component} from 'react'

import './index.css'

const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minus = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isClicked: false}

  onButton = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isClicked} = this.state
    const imgUrl = isClicked ? minus : plus
    const altValue = isClicked ? 'minus' : 'plus'

    const hr = isClicked ? <hr /> : null
    const answer = isClicked ? answerText : null
    return (
      <li className="list-container">
        <div className="list">
          <h1 className="heading">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onButton}>
            <img src={imgUrl} alt={altValue} />
          </button>
        </div>
        {isClicked ? (
          <div>
            {hr}
            <p className="para"> {answer}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
