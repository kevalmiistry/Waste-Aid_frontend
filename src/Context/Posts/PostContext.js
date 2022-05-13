import { createContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = (props) => {
  const AUTH_STORAGE_KEY = 'Waste_Aid_authtoken';
  const SERVER_ADDRESS = process.env.HEROKU_URL || 'http://localhost:5000';

  const [alert, setAlert] = useState({ type: '', message: '', show: '' });

  const showAlert = (type, message) => {
    setAlert({
      message,
      type,
      show: 'show'
    });
    setTimeout(() => {
      setAlert({ type: '', message: '', show: '' });
    }, 2000);
  };

  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState([]);
  const [amPost, setAmPost] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [fullPostID, setFullPostID] = useState(null);
  const [tokens, setTokens] = useState([]);
  const [created, setCreated] = useState(null);

  // Add Post
  const AddPostFunc = async (formData) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/post/addpost`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      },
      body: formData
    });
    const json = await response.json();
    if (json.success) {
      showAlert('success', json.message);
      fetchAMPost();
    }

    return response;
  };

  // Fetch One Post
  const fetchOnePost = async (id) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/post/fetchonepost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      },
      body: JSON.stringify({ id })
    });
    const thePosts = await response.json();
    setOnePost(thePosts);
  };

  // Fetch Aid-man's Post
  const fetchAMPost = async () => {
    const response = await fetch(`${SERVER_ADDRESS}/api/post/fetchampost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      }
    });
    const thePosts = await response.json();
    setAmPost(thePosts);
  };

  // Delete Post
  const deleteAMPost = async (id) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/post/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      },
      body: JSON.stringify({ id })
    });
    const json = await response.json();
    if (json.success) {
      showAlert('success', json.message);
      fetchAMPost();
    }
  };

  // Fetch All Posts
  const fetchAllPosts = async () => {
    const response = await fetch(`${SERVER_ADDRESS}/api/post/fetchposts`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      }
    });
    const thePosts = await response.json();
    setPosts(thePosts);
  };

  // SignUp
  const signUpFunc = async (fname, lname, email, password, cpassword) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fname, lname, email, password, cpassword })
    });
    const json = await response.json();
    if (json.success) {
      setCreated(json.message);
    } else {
      showAlert('error', json.message);
    }
    return json;
  };

  // Login
  const logInFunc = async (email, password) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem(AUTH_STORAGE_KEY, json.authToken);
      showAlert('success', json.message);
      fetchUserInfo();
    } else {
      showAlert('error', json.message);
    }
    return response;
  };

  // Fetch user info`pi/auth/getuser
  const fetchUserInfo = async () => {
    const response = await fetch(`${SERVER_ADDRESS}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      }
    });
    const res = await response.json();
    setUserInfo(res);
  };

  // Logout
  const LogOutFunc = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    showAlert('success', 'Logged out from your Account');
  };

  // Genrate Token
  const generateTokenFunc = async (am_id, amount, post_id) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/token/gen`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      },
      body: JSON.stringify({ am_id, amount, post_id })
    });

    return response;
  };

  // fetch Tokens
  const fetchTokensFunc = async () => {
    const response = await fetch(`${SERVER_ADDRESS}/api/token/fetch`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      }
    });
    const t = await response.json();
    setTokens(t);
  };

  // token update
  const [tokenDone, setTokenDone] = useState(false);
  const [qrMsg, setQrMsg] = useState({ success: null, message: '' });

  const tokenUpdateFunc = async (_id) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/token/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem(AUTH_STORAGE_KEY)
      },
      body: JSON.stringify({
        id: _id,
        recieved: true
      })
    });
    if (response.ok) {
      setTokenDone(true);
      const json = await response.json();
      setQrMsg({ success: json.success, message: json.message });
    }
  };
  // Verify Email
  const verifyEmailFunc = async (authToken) => {
    const response = await fetch(`${SERVER_ADDRESS}/api/auth/verify`, {
      method: 'PATCH',
      headers: {
        'auth-token': authToken
      }
    });
    return response;
  };

  return (
    <PostContext.Provider
      value={{
        verifyEmailFunc,
        created,
        qrMsg,
        alert,
        showAlert,
        tokenDone,
        tokenUpdateFunc,
        tokens,
        fetchTokensFunc,
        generateTokenFunc,
        userInfo,
        fetchUserInfo,
        deleteAMPost,
        amPost,
        fetchAMPost,
        onePost,
        fetchOnePost,
        AddPostFunc,
        signUpFunc,
        logInFunc,
        fetchAllPosts,
        posts,
        fullPostID,
        setFullPostID,
        LogOutFunc
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
