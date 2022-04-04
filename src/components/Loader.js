import React from 'react'
import loaderGif from '../images/loader.gif'

const Loader = () => {
    return (
        <div className='loader'>
            <div>
                <div className="image__cont">
                    <img src={loaderGif} alt="waste-aid loader" />
                    <p>Please Wait a moment</p>
                </div>
            </div>
        </div>
    )
}

export default Loader
