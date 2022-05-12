import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import Loader from './Loader'

const VerifyEmail = () => {
    const { authtoken } = useParams()
    const [result, setResult] = useState({ loaded: false, message: '' })

    const { verifyEmailFunc } = useContext(PostContext)
    const afterEffect = async () => {
        const response = await verifyEmailFunc(authtoken)
        if (response.ok) {
            const json = await response.json()
            setResult({ loaded: true, message: json.message })
        }
    }

    useEffect(() => {
        afterEffect()
        // eslint-disable-next-line
    }, [])


    return (
        <div className="emailverify__background">
            <div className="emailverify__container">
                {result.loaded ?
                    (<div className='success'><h1 className='txt__center'>Congrats! Your Email has been verified</h1>
                        <Link to="/login" style={{ textDecoration: 'none' }}><button className='btn btn-primary'>Go to Login</button></Link>
                    </div>) :
                    (<><h1 className='txt__center'>Please wait! We are verifying your email address</h1><Loader /></>)}
            </div>
        </div>
    )
}

export default VerifyEmail