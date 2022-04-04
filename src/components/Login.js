import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import svg from '../images/wasteaid_svg.svg'
import Loader from './Loader'

const Login = () => {

    let nevigate = useNavigate()

    const context = useContext(PostContext)
    const { logInFunc } = context

    const [creds, setCreds] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        const response = await logInFunc(creds.email, creds.password)
        setIsLoading(false)

        if (response.ok) {
            nevigate('/')
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            <section className="login__main">
                <div className="login__form">
                    <h1 className='head__text'>Login to your Account</h1>
                    <div className="f__login">
                        <img src={svg} alt="none" srcSet="" />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email here' onChange={onChange} />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder='Enter Your Password here' onChange={onChange} />
                            </div>
                            <div>
                                <button className='btn btn-primary' type='submit'>Login </button>
                            </div>
                            <small className='small'>Don't have an account? <Link style={{ textDecoration: 'none' }} to='/signup'>Signup</Link></small>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login