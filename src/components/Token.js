import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'

const Token = (props) => {
    const { post_id, amount, recieved } = props.token
    const context = useContext(PostContext)

    const { onePost, fetchOnePost } = context

    const nev = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('Waste_Aid_authtoken')) {
            fetchOnePost(post_id)
        } else {
            nev('/login')
        }
        // eslint-disable-next-line
    }, [])


    return (
        <>
            {
                onePost.map((post) => {
                    const { _id, title } = post
                    return (
                        <div key={_id} className="token">
                            <div className="tokrn__title">Post: <Link style={{ textDecoration: 'none', color: '#333' }} target={'_blank'} to={`/post/${_id}`}> {title} </Link> </div>
                            <div className="flx">
                                <div className="token__amount">Amt: {amount}</div>
                                <div className="token__recieved">reached? {
                                    recieved ? 'Yes :D' : 'Not yet :('
                                }</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Token
