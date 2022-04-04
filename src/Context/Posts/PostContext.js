import { createContext, useState } from "react"

const PostContext = createContext()

export const PostProvider = (props) => {
    const AUTH_STORAGE_KEY = 'Waste_Aid_authtoken'

    const [posts, setPosts] = useState([])

    // Add Post
    const AddPostFunc = async (formData) => {
        const response = await fetch('http://localhost:5000/api/post/addpost', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            },
            body: formData
        })

        return response
    }

    // Fetch All Posts
    const fetchAllPosts = async () => {
        const response = await fetch('http://localhost:5000/api/post/fetchposts', {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
            }
        })
        const thePosts = await response.json()

        setPosts(thePosts)
    }

    // SignUp
    const signUpFunc = async (fname, lname, email, password, cpassword) => {

        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fname, lname, email, password, cpassword })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem(AUTH_STORAGE_KEY, json.authToken)
        }
        return response
    }

    // Login
    const logInFunc = async (email, password) => {

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem(AUTH_STORAGE_KEY, json.authToken)
        }
        return response
    }

    return (
        <PostContext.Provider value={{ AddPostFunc, signUpFunc, logInFunc, fetchAllPosts, posts }} >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContext
