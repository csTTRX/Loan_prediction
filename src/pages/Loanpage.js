import React from 'react'
import { useState } from 'react'
import '../App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Loanpage = () => {
    const [gender, setSelectedGender] = useState('')
    const [married, setSelectedMarried] = useState('')
    const [education, setSelectedEducation] = useState('')
    const [dependents, setSelectedDependents] = useState('')
    const [self_employment, setSelectedSelfEmployment] = useState('')
    const [property_area, setSelectedPropertyArea] = useState('')
    const [credit_history, setSelectedCreditHistory] = useState(0)
    const [applicant_income, setApplicantIncome] = useState(500)
    const [loan_amount, setLoanAmount]= useState(1000)
    const [coapplicant_income, setCoapplicantIncome] = useState(1000)
    const [loan_amount_term, setLoanAmountTerm] = useState(10)
    const [loan_result, setLoanResult] = useState([])

    const decision = ()=>{
        if (loan_result.result ===1){
            return (<div className='succes'>
                <p>👏👏👏 <span> Your loan application has been aproved</span> 🤑🤑🤑</p>
                </div>)
        } else if (loan_result.result ===0){
            return (<div className='sorry'>
                <p>🤒🤒🤒 <span>Soury Your loan application has not been aproved</span> 🤒🤒🤒</p>
                </div>)
        }
    }
    
    const handleApplicantIncome = (e)=>{
        setApplicantIncome(e.target.value)
    }
    const handleLoanAmount = (e)=>{
        setLoanAmount(e.target.value)
    }
    const handleCoapplicantIncome = (e)=>{
        setCoapplicantIncome(e.target.value)
    }
    const handleLoanAmountTerm = (e)=>{
        setLoanAmountTerm(e.target.value)
    }

    const handleChangeGender =(e) =>{
        setSelectedGender(e.target.value)
      }
    const handleChangeMarried =(e) =>{
        setSelectedMarried(e.target.value)
      }
    const handleChangeEducation =(e) =>{
        setSelectedEducation(e.target.value)
      }
    const handleChangeDependents =(e) =>{
        setSelectedDependents(e.target.value)
      }
    const handleChangeEmployment =(e) =>{
        setSelectedSelfEmployment(e.target.value)
      }
    const handleChangePropertyArea =(e) =>{
        setSelectedPropertyArea(e.target.value)
      }
    const handleChangeCreditHistory =(e) =>{
        setSelectedCreditHistory(e.target.value)
      }
    
    let input_data = {
     gender,
     married,
     education,
     dependents, 
     self_employment, 
     property_area, 
     applicant_income,
     loan_amount,
     coapplicant_income, 
     loan_amount_term,
     credit_history,
    }
    const Handlesubmit1 = async (e)=>{
        e.preventDefault()
        const res = await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/loan_predict/',
            data: JSON.stringify(input_data),
        })
        console.log(res.data)

    }
    const Handlesubmit = async(e)=>{
        e.preventDefault()
        console.log(input_data)
        let response = await fetch('http://127.0.0.1:8000/loan_predict/',{
        method : "POST",
        mode : 'cors',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': 'csrftoken'
        },
        body:JSON.stringify(input_data)
        })
        let data = await response.json()
        if (response.status===200){
            setLoanResult(data)
        }
        console.log(data)
    }

    return (
        <div className='form-box'>
            <form action="" className='loan-form' onSubmit={Handlesubmit}>
                <h1> Loan Application</h1>
                <div className='paire-field'>
                    <FormControl className = 'formcontrol'>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                        name='gender_v'
                        labelId="gender"
                        id="gender_id"
                        value={gender}
                        label="Gender"
                        onChange={handleChangeGender}
                        >
                        <MenuItem value={1}>MALE</MenuItem>
                        <MenuItem value={0}>FEMALE</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className = 'formcontrol'>
                        <InputLabel id="education">Education</InputLabel>
                        <Select
                        name = 'education_v'
                        labelId="education"
                        id="education_id"
                        value={education}
                        label="Education"
                        onChange={handleChangeEducation}
                        >
                        <MenuItem value={1}>GRADUATED</MenuItem>
                        <MenuItem value={0}>NOT GRADUATED</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='paire-field'>
                    <FormControl className = 'formcontrol'>
                        <InputLabel id="dependents">Dependents</InputLabel>
                        <Select
                        name = 'dependents_v'
                        labelId="dependents"
                        id="dependents_id"
                        value={dependents}
                        label="Dependents"
                        onChange={handleChangeDependents}
                        >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3+</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className = 'formcontrol'>
                        <InputLabel id="married">Married</InputLabel>
                        <Select
                        name = 'married_v'
                        labelId="married"
                        id="married_id"
                        value={married}
                        label="Married"
                        onChange={handleChangeMarried}
                        >
                        <MenuItem value={1}>YES</MenuItem>
                        <MenuItem value={0}>NO</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='paire-field'>
                    <FormControl className = 'formcontrol-3'>
                        <InputLabel id="employment">Self Employed</InputLabel>
                        <Select
                        name = 'employment_v'
                        labelId="employment"
                        id="gender_id"
                        value={self_employment}
                        label="Self Employed"
                        onChange={handleChangeEmployment}
                        >
                        <MenuItem value={1}>YES</MenuItem>
                        <MenuItem value={0}>NO</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className = 'formcontrol-3'>
                        <InputLabel id="property">Property Area</InputLabel>
                        <Select
                        name = 'property_v'
                        labelId="property"
                        id="property_id"
                        value={property_area}
                        label="Property Area"
                        onChange={handleChangePropertyArea}
                        >
                        <MenuItem value={0}>RURAL</MenuItem>
                        <MenuItem value={1}>SEMIRURAL</MenuItem>
                        <MenuItem value={2}>URBAN</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className = 'formcontrol-3'>
                        <InputLabel id="credit">Credit History</InputLabel>
                        <Select
                        name = 'credit_v'
                        labelId="credit"
                        id="credit_id"
                        value={credit_history}
                        label="Credit History"
                        onChange={handleChangeCreditHistory}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={0}>0</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='paire-field'>
                    <div className = 'slider'>
                        <Typography id="applicant_income_id" gutterBottom>
                            Applicant Income
                        </Typography>
                        <Slider name='appl_in' defaultValue={500} step={100} marks min={0} max={10000} 
                        valueLabelDisplay="auto" 
                        aria-labelledby ='applicant_income_id'
                        onChange={handleApplicantIncome}
                        />
                    </div>

                    <div className = 'slider'>
                        <Typography id="coapplicant_income_id" gutterBottom>
                            Coapplicant Income
                        </Typography>
                        <Slider name = 'coappl_in' defaultValue={500} step={100} marks min={0} max={10000} 
                        valueLabelDisplay="auto" 
                        aria-labelledby='coapplicant_income_id'
                        onChange={handleCoapplicantIncome}
                        />
                    </div>
                </div>
                

                <div className='paire-field'>
                    <div className = 'slider'>
                        <Typography id="loan_amount_id" gutterBottom>
                            Laon amount
                        </Typography>
                        <Slider name='loan_m' defaultValue={500} step={100} marks min={100} max={10000} 
                        valueLabelDisplay="auto"
                        aria-labelledby='loan_amount_id'
                        onChange={handleLoanAmount}
                        />
                    </div>

                    <div className = 'slider'>
                        <Typography id="loan_amount_term_id" gutterBottom>
                            Laon Amount Term
                        </Typography>
                        <Slider name='loan_term' defaultValue={10} step={1} marks min={10} max={4000} 
                        valueLabelDisplay="auto"
                        aria-labelledby='loan_amount_term_id'
                        onChange={handleLoanAmountTerm}
                        />
                    </div>
                </div>
                <button type='submit' className='sub-button'>MAKE PREDICTION</button>
                <br />
                <br />
                <div>
                    {decision()}
                </div>
            </form>
        </div>
    )
    }

export default Loanpage