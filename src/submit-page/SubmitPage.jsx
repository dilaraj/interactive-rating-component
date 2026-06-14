import './SubmitPage.css'
import { useLocation } from 'react-router-dom'
import submittedImg from '../assets/images/illustration-thank-you.svg'

export default function SubmitPage() {

    const location = useLocation()
    const { rating } = location.state || {}

    return (
        <div className="submit-page-main-container">
            <img src={submittedImg} alt="Submitted Image" className="submit-img" />
            <div className="your-rating">You selected {rating} out of 5</div>
            <div className='thank-you'>Thank You!</div>
            <div className="message">
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </div>
        </div>
    )
}