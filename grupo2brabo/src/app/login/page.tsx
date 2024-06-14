"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login(): JSX.Element {
    // Define estados para email, senha e mensagens de erro
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter()
    // Função para lidar com a submissão do formulário
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email.includes("@")) { // Verifica se o email não contém o símbolo @
            setError("O email deve conter @.");
        } else if (password.length < 8) { // Verifica se a senha tem menos de 8 caracteres
            setError("A senha deve ter no mínimo 8 caracteres.");
        } else {
            setError(""); // Limpa a mensagem de erro se o email e a senha são válidos
        }
    };
    return (
        <div className="w-screen h-screen bg-[#EDEDED] flex">
            {/* Imagem de login ocupando metade da tela */}
            <img className="w-2/4 h-screen" src="/imagemlogin.png" alt="Imagem de Login" />
            {/* formulário de login */}
            <div className="w-2/4 h-screen justify-center items-center flex-col flex">
                {/* Cabeçalho*/}
                <div className="w-[32rem] h-44 flex items-center justify-center">
                    <h1 className="text-5xl text-center text-black">Avaliação de Professores</h1>
                </div>
                <form className="h-48 flex flex-col justify-evenly" onSubmit={handleSubmit}>
                    {/* Campo de entrada para o email */}
                    <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm text-black">
                        <input
                            className="w-[30rem] outline-none"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                        />
                    </div>
                    {/* Campo de entrada para a senha */}
                    <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm text-black">
                        <input
                            className="w-[30rem] outline-none"
                            type="password"
                            placeholder="Senha"
                            minLength={8} // Define o comprimento mínimo da senha
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                        />
                    </div>
                    {/* Exibe mensagem de erro se houver */}
                    {error && <div className="text-red-500">{error}</div>}
                </form>
                <div className="w-[32rem] h-24 flex justify-evenly items-center">
                    {/* Botão de entrar */}
                    <button
                        className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 btn-brightness text-black"
                        onClick={async (e) => {
                            if (!email.includes("@") || password.length < 8) {
                                e.preventDefault(); // Previne a navegação se o email ou senha forem inválidos
                                setError(
                                    !email.includes("@")
                                        ? "O email deve conter @."
                                        : "A senha deve ter no mínimo 8 caracteres."
                                ); // Define mensagem de erro apropriada
                            }
                            else {
                                    router.push("/feed-logado/1")
                                
                            }
                        }}
                    >
                        Entrar
                    </button>
                    {/* Botão de criar conta */}
                    <a href="/cadastro">
                        <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 btn-brightness text-black">Criar Conta</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
