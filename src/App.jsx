import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import RatingPage from './rating-page/RatingPage'
import SubmitPage from './submit-page/SubmitPage'

export default function App() {

  return (
    <BrowserRouter basename='/interactive-rating-component'>
      <Routes>
        <Route path='/' element={<RatingPage />} />
        <Route path='/thank-you' element={<SubmitPage />} />
      </Routes>
    </BrowserRouter>
  )
}