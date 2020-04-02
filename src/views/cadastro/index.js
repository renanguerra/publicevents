import React, {useState} from 'react'
import {Link}from 'react-router-dom'
import firebase from '../../config/firebase'
import 'firebase/auth'
import './cadastro.css'

import Navbar from '../../components/navbar/'

export default function Cadastro(){
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [texto,setTexto] = useState();
    const [load,setLoad] = useState();

    function Cadastrar(){
        setLoad(1);
        setTexto(null);

        if (!email || !senha){
            setLoad(0);
            setTexto('Você precisa informar um email e senha!')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resposta => {
            setTexto('Usuário criado com sucesso!')
            setLoad(0);
        }).catch(erro => {
            setLoad(0);
            switch (erro.message) {
                case "Password should be at least 6 characters":
                    setTexto("A senha deve ter ao menos 6 caracteres.");
                    break;
                case "The email address is already in use by another account.":
                    setTexto('O email desejado já existe, por favor, tente outro!');
                    break;
                case "The email address is badly formatted.":
                    setTexto('O formato do seu email está inválido!');
                    break;
                default:
                    setTexto("Não foi possível cadastrar, tente novamente mais tarde!");
                    break;
            }
        })
    }

    return(
        <>
            <Navbar/>
            <div className='form-cadastro'>
                <form className='text-center form-login mx-auto mt-5'>
                    <h1 className='h3 bm-3 font-weight-bold' >Cadastro</h1>

                    <input onChange={e => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Email'/>
                    <input onChange={e => setSenha(e.target.value)} type='password' className='form-control my-2' placeholder='Senha'/>


                    {load ? 
                    <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div> : 
                    <button onClick={Cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>}                

                    <div className="msg-login text-black text-center my-5 font-weight-bold">
                        <span>{texto}</span>
                    </div>

                    <div className='opcoes-login my-5 text-center'>
                        <Link className='mx-4' href='#'>Voltar parar o Login</Link>
                    </div>
                </form>
            </div>
        </>
    )
}