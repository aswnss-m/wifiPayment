import React from 'react';
import Chart from '../components/Chart';
import PayedTable from '../components/PayedTable';
import {useState} from 'react';
import "../assets/Home.css";

function Home() {
    const [anotherPerson, setAnotherPerson] = useState(false);
    return (
        <div className='homeContainer text-black'>
            <Chart/>
            <form className='detailsForm bg-white'>
                <div className="formGroup">
                    <label htmlFor="name">
                        Name :
                    </label>
                    <input type="text" name="name" id="name" placeholder='Enter your name'/>
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
                        <input type="text" name="otherName" id="otherName" placeholder="Paying for"/>
                    </div>
                )
            } 
            <input type="submit" value="Pay (Rs.85)" className='bg-primary text-white payButton'/>
            </form>
            <PayedTable />
        </div>
    )
}

export default Home
