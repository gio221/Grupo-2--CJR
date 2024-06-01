"use client";

import React, { useState } from "react";
import Nav from "@/app/components/Nav"

// Definindo a interface para as props do componente ProfessorCard
interface ProfessorCardProps {
  name: string;
  subject: string;
  imageUrl: string;
}

// Componente ProfessorCard que exibe um avatar com nome e disciplina
const ProfessorCard: React.FC<ProfessorCardProps> = ({ name, subject, imageUrl }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px', width: '236px', height: '281px', backgroundColor: '#FFFFFF', border: '1px solid #000', padding: '10px' }}>
      <img src={imageUrl} alt={`${name}'s avatar`} style={{ width: '185px', height: '185px' }} />
      <h3 className='frase-preta text-[30px] 'style={{ margin: '5px 0 5px 0', fontSize: '14px'}}>{name}</h3>
      <p className='frase-preta text-[30px] 'style={{ margin: 0, fontSize: '20px' }}>{subject}</p>
    </div>
  );
}

// Componente principal
export default function Login(): JSX.Element {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };
  const [showGreenScreen, setShowGreenScreen] = useState(false);

  const novosProfessores = [
    { name: 'Nome', subject: 'Disciplina', imageUrl: 'https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/e6982e6c845dc909c50d919bd3b40deeb417a8bb' },
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

  const toggleGreenScreen = () => {
    setShowGreenScreen(!showGreenScreen);
  };

  return (
    <div>
       {/* Estou puxando a nav e depois colocando o botão de login, dentro dela */}
       <div className="relative">
        <Nav />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/9a188b44cab75de84a60500b8d6b541bb01d27ba" alt="Notificação" style={{ width: '45px', height: '45px', marginLeft: '80%', position: 'absolute', top: '12px' }} />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/1d606de3cc4a464fe631e13f764212595cb2cc9d" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '90%', position: 'absolute', top: '12px' }} />
        <a href="/login"><button><img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/01a8d5d7c15093ace855e5e2965f92a9c7a6a5cc" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '12px' }} /></button>
        </a>
      </div>
      <div className="bg-[#EDEDED]" style={{ width: '100%', height: 'auto' }}>
      <div style={{ width: '1159px', margin: '0 auto' }}>
            <div className="flex items-center">
              <h1 className="frase-preta text-[30px]" style={{ marginTop: '40px' }}>Todos os professores</h1>
              <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Nova Publicação"
                onClick={toggleGreenScreen}
                style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }}
              /> <div className="m-auto">
              <input className="mr-2 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black" 
                placeholder="Buscar Professor(a)"/>
            </div>
               <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Ordenar"
                style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }}
                onClick={handleButtonClick}
              />
    
            </div>
        
          {showOptions && (
             <div className="mt-4">
             <table className="table-auto w-full border-t-4" style={{ background: '#ADD8E6', marginLeft: 'auto', maxWidth: '250px' }}>
               <tbody>
                 <tr>
                   <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                    {/*coloquei a tag button para que a lista se torne clicável*/}
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
           </div>
          )}
        </div>


        {/* Adicionando os cartões de novos professores */}
        <div className="flex justify-center flex-wrap">
          {novosProfessores.map((professor, index) => (
            <ProfessorCard
              key={index}
              name={professor.name}
              subject={professor.subject}
              imageUrl={professor.imageUrl}
            />
          ))}
        </div>

        

        {/* Adicionando os cartões de todos os professores */}
        <div className="flex justify-center flex-wrap mt-10">
          {todosProfessores.map((professor, index) => (
            <ProfessorCard
              key={index}
              name={professor.name}
              subject={professor.subject}
              imageUrl={professor.imageUrl}
            />
          ))}
        </div>
      </div>
      {showGreenScreen && (
        <div className="sm:text-sm rounded-md" style={{
          position: 'fixed',
          top: '50px',
          left: '250px',
          width: '75%',
          height: '90%',
          backgroundColor: '#3EEE9A',
          zIndex: 9999,
          padding: '20px',
        }}>
          {/* Botão para Nome do Professor */}
          <button className="sm:text-sm rounded-md"
            style={{
              fontSize: '18px',
              width: '95%',
              height: '45px',
              position: 'absolute',
              top: '10px',
              left: '40px',
              backgroundColor: '#FFFFFF',
              border: 'none',
              textAlign: 'left',
              color: '#808080',
              paddingLeft: '10px',
            }}
          >  
            Nome do Professor
            <img className="py-1 px-1" src="seta.png" alt="Notificação" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '4px' }} />
          </button>

          {/* Botão para Disciplina */}
          <button className="sm:text-sm rounded-md"
            style={{
              fontSize: '18px',
              width: '95%',
              height: '45px',
              position: 'absolute',
              top: '80px',
              left: '40px',
              backgroundColor: '#FFFFFF',
              border: 'none',
              textAlign: 'left',
              color: '#808080',
              paddingLeft: '10px',
            }}
          >
            Disciplina
            <img className="py-1 px-1" src="seta.png" alt="Notificação" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '2px' }} />
          </button>
           {/* Espaço em branco grande vazio */}
           <div className="sm:text-sm rounded-md"style={{ marginTop: '120px', height: '65%', background: '#A4FED3' }}>   <img className="py-1 px-1" src="logos.png" alt="Notificação" style={{ width: '20%', height: '15%', marginLeft: '0%', top: '1px' }} /></div>
         
           <div style={{ display: 'flex', alignItems: 'center' }}>
         
    <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Cancelar"
                style={{ width: '40%', background: '#3EEE9A' , marginLeft:'75%',marginTop: '25px',}}
              />
               <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Avaliar"
                style={{ width: '40%', height: '55px', background: '#A4FED3', marginLeft: 'auto', marginTop: '25px',}}
              />
</div>


        </div>
      )}
    </div>
  );
}
