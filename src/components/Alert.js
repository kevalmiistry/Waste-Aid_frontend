import React, { useContext } from 'react'
import PostContext from '../Context/Posts/PostContext'

const Alert = () => {
    const { alert } = useContext(PostContext)
    return (
        <>
            {
                <div className={`alert alert-${alert.type} alert-${alert.show}`}>
                    {alert.message}
                </div>
            }
        </>
    )
}

export default Alert
