import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <section>
            <p> See if you can get a loan from a bank with our machine App. </p>
            <Link className = 'button' to = '/make-prediction'> Loan Application</Link>
        </section>
    </div>
  )
}

export default Home
