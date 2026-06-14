import './RatingPage.css'
import { Link } from 'react-router-dom'
import starIcon from '../assets/images/icon-star.svg'
import { useState } from 'react'

export default function RatingPage() {

    const [rating, setRating] = useState("");

    const handleChange = (event) => {
        setRating(event.target.value)
    }

    return (
        <div className="master-rating-container">
            <div className="star-container">
                <img src={starIcon} alt="Star Image" />
            </div>

            <div className="header">How did we do?</div>
            <div className="body-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
            
            <div className="rating-container">
                <label className="rating">
                    <input type="radio" name="rating" value="1" onChange={handleChange}/>
                    1
                </label>
                <label className="rating">
                    <input type="radio" name="rating" value="2" onChange={handleChange}/>
                    2
                </label>
                <label className="rating">
                    <input type="radio" name="rating" value="3" onChange={handleChange}/>
                    3
                </label>
                <label className="rating">
                    <input type="radio" name="rating" value="4" onChange={handleChange}/>
                    4
                </label>
                <label className="rating">
                    <input type="radio" name="rating" value="5" onChange={handleChange}/>
                    5
                </label>
            </div>

            <Link to="/thank-you" state={{ rating }}>
                <button type="submit" className='submit-btn'>
                    Submit
                </button>
            </Link>
        
        </div>
    )
}