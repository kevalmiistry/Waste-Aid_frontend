import { useNavigate, useParams } from "react-router-dom"
import React, { useContext, useEffect } from 'react'
import PostContext from "../Context/Posts/PostContext"
import Loader from "./Loader"

const QRProcessing = () => {
    const { id } = useParams()

    const { tokenDone, tokenUpdateFunc } = useContext(PostContext)
    const nev = useNavigate()

    useEffect(() => {
        tokenUpdateFunc(id)
        // eslint-disable-next-line
    }, [])


    return (
        <section className="center__component">
            {
                tokenDone ? nev('/qrscanned') : <Loader />

            }
        </section>
    )
}

export default QRProcessing