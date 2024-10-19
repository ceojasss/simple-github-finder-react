import React from 'react'


const User = ({ user }) => {
    console.log(user);
    const { avatar_url, id, followers, public_repos, url, name, login } = user;


    return (
        <div className='User'>
            <div>
                <img src={avatar_url} className='avatar' alt="user" />
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
            </div>
            
        </div>
    )
}

export default User