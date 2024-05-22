import React from "react"
export default function cadastro(): JSX.Element {
    return(
        <div className="w-screen h-screen bg-[#EDEDED] flex">
        <img className="w-2/4 h-screen" src="/imagemlogin.png"></img>
        <div className="w-2/4 h-screen justify-center items-center flex-col flex"> 
             <div className="w-[32rem] h-44 flex items-center justify-center"> 
                 <h1 className="text-5xl text-center ">Cadastro</h1>
             </div>
             <form className="h-96 flex flex-col justify-evenly">
                 <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Nome"></input>
                 </div><br></br>

                 <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Email"></input>
                 </div><br></br>

                 <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Senha"></input>
                 </div><br></br>

                 <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Curso"></input>
                 </div><br></br>

                 <div className="w-[32rem] border-2 h-12 rounded-xl flex items-center justify-center bg-[#FFFFFF] drop-shadow-sm">
                     <input className="w-[30rem] outline-none" placeholder="Departamento"></input>
                 </div><br></br>
                
             </form><br></br>
             <div className="w-[32rem] h-24 flex justify-evenly items-center">
                 <button className="bg-[#A4FED3] w-40 rounded-xl border-2 border-[#222E50] drop-shadow-lg text-lg h-12 btn-brightness">Criar Conta</button>
             </div>
         
         </div> 
           
     </div>
                
          
    );
};