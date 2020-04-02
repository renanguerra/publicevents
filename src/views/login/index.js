import React, {useState} from 'react'
import {Link}from 'react-router-dom'
import './login.css'
import firebase from '../../config/firebase'
import 'firebase/auth'

import Navbar from '../../components/navbar/'

export default function Login(){
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [texto,setTexto] = useState();

    function Logar(){

        firebase.auth().signInWithEmailAndPassword(email,senha).then(resposta => {
            alert('Logado')
            setTexto('Wow, você está logado')
        }).catch(erro=>{
            alert(erro)
            setTexto('Ops, deu erro')
        })
        
    }
    return (
        <>
            <Navbar/>
            <div className="login-content d-flex align-items-center">
                <form class="form-signin mx-auto">
                <h1 class="h3 mb-3 font-weight-normal text-center text-white font-weight-bold">Login</h1>

                    <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" required autofocus/>
                    <input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" required/>
                    
                    <button class="btn btn-lg btn-block btn-login" type="button" onClick={Logar}>Logar</button>

                    <div className="msg-login text-white text-center my-5 font-weight-bold">
                        <span>{texto}</span>
                        {texto == 'ops' && <span>{texto}</span>}
                    </div>

                    <div className='opcoes-login mt-5 text-center'>
                        <Link className='mx-4' to='/cadastro'>Cadastrar</Link>
                        <Link className='mx-4' href='#'>Recuperar senha</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

