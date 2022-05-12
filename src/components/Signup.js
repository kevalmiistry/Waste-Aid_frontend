import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import svg from '../images/wasteaid_svg.svg'
import Loader from './Loader'
import { Scrollbars } from 'react-custom-scrollbars'

const Signup = () => {

    const context = useContext(PostContext)
    const { signUpFunc, created } = context

    const [creds, setCreds] = useState({ fname: '', lname: '', email: '', password: '', cpassword: '' })
    const [isLoading, setIsLoading] = useState(false)

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        await signUpFunc(creds.fname, creds.lname, creds.email, creds.password, creds.cpassword)
        setIsLoading(false)
    }

    return (
        <>
            {isLoading && <Loader />}
            <section className="login__main">
                <div className="login__form">
                    <h1 className='head__text'>Signup for an Account</h1>
                    <div className="f__login">
                        <img src={svg} alt="none" srcSet="" />
                        <form onSubmit={handleSubmit} >
                            <Scrollbars style={{ height: '70vh' }}>
                                <div>
                                    <div>
                                        <label htmlFor="name">First Name</label>
                                        <input type="text" name="fname" id="fname" placeholder='Enter Your First Name here' onChange={onChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="name">Last Name</label>
                                        <input type="text" name="lname" id="lname" placeholder='Enter Your Last Name here' onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder='Enter Your Email here' onChange={onChange} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder='Enter Your Password here' onChange={onChange} />
                                </div>
                                <div>
                                    <label htmlFor="password">Confirm-Password</label>
                                    <input type="password" name="cpassword" id="cpassword" placeholder='Re-Enter Your Password here' onChange={onChange} />
                                    <span className='red mx-1'>{(creds.password === creds.cpassword) ? '' : 'Password must be Same'}</span>
                                </div>
                                <div>
                                    {(creds.password === creds.cpassword) ? <button className='btn btn-primary' type='submit' >SignUp </button> : <button className='btn btn-primary' disabled >SignUp </button>}
                                </div>
                                {created && <p style={{ color: 'green', fontWeight: '600', margin: '10px 0' }}>{created}</p>}
                                <small className='small'>Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></small>
                            </Scrollbars>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
