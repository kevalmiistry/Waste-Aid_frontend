import React from 'react'
import { Link } from 'react-router-dom'
import svg from '../images/wasteaid_svg.svg'

const Signup = () => {
    return (
        <>
            <section className="login__main">
                <div className="login__form">
                    <h1 className='head__text'>Signup for an Account</h1>
                    <div className="f__login">
                        <img src={svg} alt="none" srcSet="" />

                        <form>
                            <div>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" name="fname" id="fname" placeholder='Enter Your Full Name here' />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email here' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password here' />
                            </div>
                            <div>
                                <label htmlFor="password">Confirm-Password</label>
                                <input type="password" name="cpassword" id="cpassword" placeholder='Re-Enter Your Password here' />
                            </div>
                            <div>
                                <button className='btn btn-primary' type='button'>Sign </button>
                            </div>
                            <small className='small'>Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></small>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup