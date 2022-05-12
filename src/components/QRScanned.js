import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import Success from '../images/success_tick.gif'
import yellow_error from '../images/yellow_error.jpg'

const QRScanned = () => {
    const { qrMsg } = useContext(PostContext)

    return (
        <>
            <section className="center__component">
                {
                    qrMsg.success ? (<img src={Success} alt="QR scanned succesfully" />) :
                        (<img src={yellow_error} alt="QR not scanned succesfully" />)
                }
                <h1 className='txt__center'>{qrMsg.message}</h1>
                <Link to={'/'}><button className='btn btn-primary go_home_btn'>Go to Home</button></Link>
            </section>
        </>
    )
}

export default QRScanned