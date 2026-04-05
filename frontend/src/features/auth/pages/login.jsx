import React from 'react'
import '../auth.form.scss'
import { Link } from 'react-router';


const login = () => {

    const handlesubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="form-container">
                <h2>Login</h2>
                <form action="" onSubmit={handlesubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Enter your email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='Enter your password' />
                    </div>
                    <button className='button primary-button' type='submit'>Login</button>
                </form>
                <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </div>
        </main> 
    )
}

export default login