import React from 'react'
import Success from '../images/success_tick.gif'

const QRScanned = () => {
    return (
        <>
            <section className="center__component">
                <img src={Success} alt="QR scanned succesfully" />
                <h1 className='txt__center'>QR Code is Scanned Successfully!</h1>
            </section>
        </>
    )
}

export default QRScanned