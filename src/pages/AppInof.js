import React from 'react'
import train from '../train.png'
import test from '../testplot.png'
import { Link } from 'react-router-dom'
const AppInof = () => {
  return (
    <div className='app-info'>
        <div className='info-content'>
            <div className ='content app-description'>
                <h1> App Description</h1>
                <p> This application uses machine learning to predict such person may or may not have a bank loan.</p>
                <p> The final model used for this app is Logistic Regresor.</p>
                <p> You can see the source code on the github link <Link to="/" > here</Link></p>
            </div>

            <div className ='content tools-used' >
                <h1> Tools Used</h1>
                <ul>
                    <li> Python</li>
                    <li> Scikit'learn</li>
                    <li> Matplotlib</li>
                    <li> Django</li>
                    <li> Django Rest Framework</li>
                    <li> React</li>
                </ul>
            </div>
        </div>
        <div className='info-content'>
            <div className ='content dataset' >
                <h1> Dataset Used</h1>
                <p> We have used the kaggle laon prediction dataset to train our models.<Link to="/" > Get Dataset</Link>.</p>
                <p>We can see dataset visialization on <Link to="/" > this link </Link>.</p>
                <img src = {train} alt = 'trainset'></img>
                <img src = {test} alt = 'testset'></img>
            </div>

            <div className ='content models' >
                <h1> Model tested</h1>

                <ul>
                    <li> Random Forest</li>
                    <li> Logistic Regretion</li>
                    <li> KNN</li>
                    <li> Decission True</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default AppInof
