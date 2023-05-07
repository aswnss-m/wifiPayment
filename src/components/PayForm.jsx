import React from 'react';
import {useState} from 'react';
import "../assets/PayForm.css";

function PayForm() {
    const [anotherPerson, setAnotherPerson] = useState(false);
    return (
        <div className='homeContainer text-black'>
            <form className='detailsForm bg-white'>
                <div className="formGroup">
                    <label htmlFor="name">
                        Name :
                    </label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' className='inputField'/>
                </div>
                <div className='formGroup'><label htmlFor="checkbox">Are you paying for some other person ?</label>
                <input type="checkbox" name="checkbox" id="checkbox" className='checkbox'
                    onChange={
                        () => {
                            setAnotherPerson(!anotherPerson)
                        }
                    }/> </div>
                    {
                anotherPerson && (
                    <div className='formGroup'>
                        <label htmlFor="otherName">His Name:</label>
                        <input type="text" name="otherName" id="otherName" placeholder="Paying for" className='inputField'/>
                    </div>
                )
            } 
            <input type="submit" value="Pay" className=' inputField  payButton'/>
            </form>
        </div>
    )
}

export default PayForm
