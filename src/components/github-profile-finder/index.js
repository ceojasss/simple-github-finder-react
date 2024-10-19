import React, { useState } from 'react'
import User from './user';

const GithubProfileFinder = () => {
    const [username, setUserName] = useState('ceojasss')
    const [userData,setUserData]= useState(null);
    const [loading,setLoading] =useState(false)

    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
    
        const data = await response.json()
    
        console.log('data: ', data);

        if(data) {
            setUserData(data)
            setLoading(false)
            setUserName('')

        }   
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    if(loading){
        return<h1>Oke , Mohon di tunggu...</h1>
    }

    return (
        <div className='github-profile-finder'>
            <div className='input-wrapper'>
                <input
                    name='search-by-username'
                    type='text'
                    placeholder='Search By Name'
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
                />

                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <User user={userData}/> : null }
        </div>
    )
}

export default GithubProfileFinder
