import React from 'react'
import svg from '../images/wasteaid_svg.svg'

const Login = () => {
    return (
        <>
            <section className="login__main">
                <div className="login__form">
                    <h1 className='head__text'>Login to your Account</h1>
                    <div className="f__login">
                        <img src={svg} alt="none" srcSet="" />

                        <form>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email here' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password here' />
                            </div>
                            <div>
                                <button className='btn btn-primary' type='button'>Login </button>
                            </div>
                            <small className='small'>Don't have an account? <a>Signup</a> </small>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login