"use client";
import React, { useState } from 'react';

export default function Cadastro(): JSX.Element {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorSenha, setErrorSenha] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    };

    const handleCreateAccount = () => {
        if (!email.includes('@')) {
            setErrorEmail('O email deve conter o caractere "@"');
            return;
        } else {
            setErrorEmail('');
        }

        if (senha.length < 8) {
            setErrorSenha('A senha deve ter pelo menos 8 caracteres');
            return;
        } else {
            setErrorSenha('');
        }

        // Redirecionar para a tela de login
        window.location.href = '/login';
    };

    return (
        <div className="w-screen h-screen bg-[#EDEDED] flex">
            <img className="w-2/4 h-screen" src="/imagemlogin.png" alt="Imagem de Login" />
            <div className="w-2/4 h-screen justify-center items-center flex-col flex">
                <div className="w-[32rem] h-44 flex items-center justify-center">
                    <h1 className="text-5xl text-center text-black">Cadastro</h1>
                </div>
                <form className="h-96 flex flex-col justify-evenly">
                    <div className="text-black w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                        <input className="w-[30rem] outline-none" placeholder="Nome" />
                    </div><br></br>
                    <div className="text-black w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                        <input className="w-[30rem] outline-none" placeholder="Email" value={email} onChange={handleEmailChange} />
                    </div><br></br>
                    <div className="text-black w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                        <input className="w-[30rem] outline-none" type="password" placeholder="Senha" value={senha} onChange={handleSenhaChange} />
                    </div><br></br>
                    <div className=" text-black w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Curso"></input>
                 </div><br></br>

                 <div className=" text-black w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Departamento"></input>
                 </div><br></br>
                </form><br></br>
                <div className="text-black w-[32rem] h-24 flex justify-evenly items-center">
                    <a href="/login">
                        <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 btn-brightness" onClick={handleCreateAccount}>Criar Conta</button>
                    </a>
                  
                </div>
                {/* Exibir mensagem de erro se houver */}
                {errorEmail && <div className="text-red-500">{errorEmail}</div>}
                {errorSenha && <div className="text-red-500">{errorSenha}</div>}
            </div>
        </div>
    );
}
