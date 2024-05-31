"use client";  

import React, { useState } from "react";
import Nav from "@/app/components/Nav";


/* Interface dos professores */
interface ProfessorCardProps {
  name: string;
  subject: string;
  imageUrl: string;
}


const ProfessorCard: React.FC<ProfessorCardProps> = ({ name, subject, imageUrl }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px', width: '236px', height: '281px', backgroundColor: '#FFFFFF', border: '1px solid #000', padding: '10px' }}>
      <img src={imageUrl} alt={`${name}'s avatar`} style={{  width: '185px', height: '185px' }} />
      <h3 className='frase-preta text-[30px]' style={{ margin: '5px 0 5px 0', fontSize: '14px'}}>{name}</h3>
      <p className='frase-preta text-[30px]' style={{ margin: 0, fontSize: '20px' }}>{subject}</p>
    </div>
  );
}

// Componente principal
export default function Login(): JSX.Element {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const novosProfessores = [
    { name: 'Rick Sanchez', subject: 'Segurança Computacional', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/90bb52ec50263e63d50e09c255f65025237c62b4' },
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' },
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' },
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' }
  ];

  const todosProfessores = [
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' },
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' },
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' },
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' }
  ];

  return (
    <div>
      {/* Estou puxando a nav e depois colocando o botão de login, dentro dela */}
      <div className="relative">
        <Nav />
        <a href="/login"><button  className="absolute top-0 right-0 m-4 h-12 w-32 bg-[#00ABED] border-2 border-[#FFFFFF] rounded-xl text-xl drop-shadow-lg hover:bg-[#49a1be]">
          Login
        </button></a>
      </div>
      <div className="bg-[#EDEDED]" style={{ width: '100%', height: 'auto', paddingBottom: '10px' }}>
        <div className="flex items-center justify-center h-20">
          <div className="w-1/2">
            <h1 className="frase-preta text-[30px] relative left-[35%]">Novos professores</h1>
          </div>
          {/* Barra de buscar professor, com letras pretas */}
          <div className="w-1/2 flex">
          <div className="m-auto">
            <input className="mr-10 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black"
              placeholder="Buscar Professor(a)"/>
          </div>
          </div>
        </div>
       <div className="flex justify-center flex-wrap">
          {novosProfessores.map((professor, index) => (
            <ProfessorCard
              key={index}
              name={professor.name}
              subject={professor.subject}
              imageUrl={professor.imageUrl}/>
          ))}
       </div>
       <div style={{ width: '1159px', margin: '0 auto' }}>
        <div className="border-t-4 border-black mt-10">
          <div className="flex items-center">
            <h1 className="frase-preta text-[30px]">Todos os professores</h1>
           {/*  Botão de Ordenar  */}
            <input 
              className="sm:text-sm rounded-md"
              type="button"
              value="Ordenar"
              style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }}
              onClick={handleButtonClick}/>
          </div>
        </div>
        {showOptions && (
        <div className="mt-4">
          <table className="table-auto w-full border-t-4" style={{ background: '#ADD8E6', marginLeft: 'auto', maxWidth: '250px' }}>
          <tbody>
            <tr>
              <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Nome</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Matéria</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Recentes</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Antigas</button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>)}
       </div>
       <div className="flex justify-center flex-wrap mt-10">
          {todosProfessores.map((professor, index) => (
            <ProfessorCard
              key={index}
              name={professor.name}
              subject={professor.subject}
              imageUrl={professor.imageUrl}/>
          ))}
       </div>
      </div>
    </div>
  );
}
