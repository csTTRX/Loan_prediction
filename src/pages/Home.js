import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <section>
            <p> Get your chances with machine Learn app </p>
            <Link className = 'button' to = '/make-prediction'> Loan Application</Link>
        </section>
    </div>
  )
}

export default Home
