import './App.css'
import starIcon from './assets/images/icon-star.svg'

export default function App() {
  return (
    <div className="master-container">
      <div className="star-container">
        <img src={starIcon} alt="Star Image" />
      </div>

      <div className="header">How did we do?</div>
      <div className="body-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
    
      <div className="rating-container">
        <div className="rating" data-rating='1'>1</div>
        <div className="rating" data-rating='2'>2</div>
        <div className="rating" data-rating='3'>3</div>
        <div className="rating" data-rating='4'>4</div>
        <div className="rating" data-rating='5'>5</div>
      </div>

      <button type="submit" className='submit-btn'>Submit</button>
    
    </div>
  )
}