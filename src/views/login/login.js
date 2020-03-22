import React from 'react'

const login = () => {
    return (
    <div>
        <input name='user' id='user' type='email' placeholder='Digite seu email' />
        <input name='password' id='password' type='password' placeholder='Digite sua senha' />
    </div>
    )
}

export default login;