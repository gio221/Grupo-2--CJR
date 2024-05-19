import React from "react";

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
      <img src={imageUrl} alt={`${name}'s avatar`} style={{  width: '185px', height: '185px' }} />
      <h3 className='frase-preta text-[30px] 'style={{ margin: '5px 0 5px 0', fontSize: '14px'}}>{name}</h3>
      <p className='frase-preta text-[30px] 'style={{ margin: 0, fontSize: '20px' }}>{subject}</p>
    </div>
  );
}

// Componente principal
export default function Login(): JSX.Element {
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
      <div style={{ width: '1359px', height: '99px', backgroundColor: '#A4FED3' }}>
        <img className="py-1 px-1" src="caminho_para_a_logo_unb.png" alt="Logo UNB" style={{ width: '99px', height: '66px', marginLeft: '30px' }} />
        <input className="sm:text-sm rounded-md" type="button" value="Login" style={{ width: '150px', height: '55px', position: 'absolute', top: '12px', left: '1133px', background: '#87CEEB' }} />
      </div>
      <div className="bg-[#EDEDED]" style={{ width: '1359px', height: 'auto', paddingBottom: '10px' }}>
        <div className="flex items-center justify-center h-20">
          <div className="w-1/2">
            <h1 className="frase-preta text-[30px] relative left-[150px]">Novos professores</h1>
          </div>
          <div className="w-1/2 flex">
            <div className="m-auto">
              <input className="mr-10 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-540 focus:border-indigo-550 sm:text-sm rounded-md" placeholder="Buscar Professor(a)" />
            </div>
          </div>
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

        <div>
      <div className="border-t-4 border-black mt-10" style={{ width: '1159px', margin: '0 auto' }}>
        <div className="flex items-center">
          <h1 className="frase-preta text-[30px]">Todos os professores</h1>
          <input className="sm:text-sm rounded-md" type="button" value="Ordenar" style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }} />
        </div>
      </div>
      <div className="mt-4" style={{ width: '1159px', margin: '0 auto' }}>
        <table className="w-full bg-navyblue divide-y divide-white divide-solid">
          <tbody>
            <tr>
              <td className="py-2 text-white">Nome</td>
            </tr>
            <tr>
              <td className="py-2 text-white">Matéria</td>
            </tr>
            <tr>
              <td className="py-2 text-white">Recentes</td>
            </tr>
            <tr>
              <td className="py-2 text-white">Antigas</td>
            </tr>
          </tbody>
        </table>
      </div>
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
    </div>
  );
}

    