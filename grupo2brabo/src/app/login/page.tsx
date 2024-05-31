import React from "react";

export default function Login(): JSX.Element {
    return (
        <div className="w-screen h-screen bg-[#EDEDED] flex">
            <img className="w-2/4 h-screen" src="/imagemlogin.png" alt="Imagem de Login" />
            <div className="w-2/4 h-screen justify-center items-center flex-col flex">
                <div className="w-[32rem] h-44 flex items-center justify-center">
                    <h1 className="text-5xl text-center text-black">Avaliação de Professores</h1>
                </div>
                <form className="h-48 flex flex-col justify-evenly">
                    <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm text-black">
                        <input className="w-[30rem] outline-none" type="email" placeholder="Email" />
                    </div>
                    <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm text-black">
                        <input className="w-[30rem] outline-none" type="password" placeholder="Senha" />
                    </div>
                </form>
                <div className="w-[32rem] h-24 flex justify-evenly items-center">
                    <a href="/feed-logado">
                        <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 btn-brightness">Entrar</button>
                    </a>
                    <a href="/cadastro">
                        <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 btn-brightness">Criar Conta</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
