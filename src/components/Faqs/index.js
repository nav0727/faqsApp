import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="container">
      <div className="main-container">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem faqDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
