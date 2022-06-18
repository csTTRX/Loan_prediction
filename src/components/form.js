import React from 'react'

const form = () => {
  return (
    <div>
                <form action="" >
        <select name="Gender" id="Gender">
            <option key ='g_0' value = {1}>MALE</option>
            <option key ='g_1' value = {0}>FEMALE</option>
        </select>
        <select name="Maried" id="Maried">
            <option key ='m_0' value = {1}>YES</option>
            <option key ='m_1' value = {0}>NO</option>
        </select>
        <select name="Education" id="Education_id">
            <option key ='e_0' value = {1}>GRADUATED</option>
            <option key ='e_1' value = {0}>NOT GRADUATED</option>
        </select>
        <select name="Gender" id="Gender">
            <option key ='g_0' value = {1}>MALE</option>
            <option key ='g_1' value = {0}>FEMALE</option>
        </select>
        <select name="Dependents" id="Dependents_id">
            <option key ='d_0' value = {0}>0</option>
            <option key ='d_1' value = {1}>1</option>
            <option key ='d_2' value = {2}>2</option>
            <option key ='d_3' value = {3}>3+</option>
        </select>
        <select name="Self_Employment" id="Self_Employment_id">
            <option key ='se_0' value = {1}>YES</option>
            <option key ='se_1' value = {0}>NOT</option>
        </select>
        <select name="Property_Area" id="Property_Area_id">
            <option key ='pa_0' value = {0}>RURAL</option>
            <option key ='pa_1' value = {1}>SEMIRURAL</option>
            <option key ='pa_2' value = {2}>URBAN</option>
        </select>

        </form>

    </div>
  )
}

export default form
