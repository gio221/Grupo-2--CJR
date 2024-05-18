import React from "react"
export default function login(): JSX.Element {
    return(
        <div className="w-screen h-screen bg-[#EDEDED] flex">
           <img className="w-2/4 h-screen" src="/imagem.png"></img>
           <div className="w-2/4 h-screen justify-center items-center flex-col flex"> 
                <div className="w-[32rem] h-44 flex items-center justify-center"> 
                    <h1 className="text-5xl text-center ">Avaliação de Professores</h1>
                </div>
                <form className="h-48 flex flex-col justify-evenly">
                    <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                        <input className="w-[30rem] outline-none" placeholder="Email"></input>
                    </div>

                    <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                        <input className="w-[30rem] outline-none" placeholder="Senha"></input>
                    </div>
                   
                </form>
                <div className="w-[32rem] h-24 flex justify-evenly items-center">
                    <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 ">Entrar</button>
                    <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12">Criar Conta</button>
                </div>
            
            </div> 
              
        </div>

    );
};