import React from "react"

const users=[{
    name:"Cleyton",
    course:"Administração",
    email:"cleytongamerpvp@gmail.com",
}]

export default function perfildoalunodeslogado(): JSX.Element {
    return(
       <div className="bg-[#EDEDED] h-screen overflow-y-auto"> {/*Div da tela principal*/}

            <div className="w-screen h-24 bg-[#A4FED3] flex items-center justify-between pr-4 pl-4"> {/*div da navbar*/}
                <img src="caminho_para_a_logo_unb.png" className="h-16"/>
                <button className="h-12 w-32 bg-[#00ABED] border-2 border-[#FFFFFF] rounded-xl text-xl drop-shadow-lg">Login</button>
            </div>
            
            <div className="flex justify center">
            <img src="Seta.svg"/>
                <div className="w-1/2 h-screen"></div>
                    <div className="w-full">
                        <div className="bg-[#3EEE9A] h-40"></div>
                        <div className="bg-[#FFFFFF] h-40 w-full"></div>
                    </div>
            </div>
        </div>
    );
};
