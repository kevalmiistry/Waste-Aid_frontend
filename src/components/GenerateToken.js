import React, { useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

const GenerateToken = () => {
    const transform = 'translateY(0)'
    const ref = useRef(0)
    const handleToggle = () => { }
    const handleClick = () => { }

    return (
        <>
            <div style={{ transform: transform }} className="addpost__background">
                <div style={{ transform: 'translateX(-50%) ' + transform }} className="addpost__container">
                    <form className='addpost_form' action='post'>
                        <Scrollbars style={{ maxWidth: '100%', height: '98vh' }}>
                            <h1 className='head__text txt__center'>Generate Token</h1>

                        </Scrollbars>
                    </form>
                    <div className="flx form__btns">
                        <button ref={ref} className='cancel-btn block btn my-1-5' onClick={handleToggle}>Cancel</button>
                        <button className='block my-1-5 btn btn-primary' id="submit" onClick={handleClick}>Submit Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerateToken