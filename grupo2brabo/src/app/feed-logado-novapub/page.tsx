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

  return (
    <div>
      <div style={{ width: '1359px', height: '99px', backgroundColor: '#A4FED3' }}>
        <img className="py-1 px-1" src="caminho_para_a_logo_unb.png" alt="Logo UNB" style={{ width: '99px', height: '66px', marginLeft: '30px' }} />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/9a188b44cab75de84a60500b8d6b541bb01d27ba" alt="Notificação" style={{ width: '45px', height: '45px', marginLeft: '1100px',position: 'absolute', top: '12px' }} />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/1d606de3cc4a464fe631e13f764212595cb2cc9d" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '1200px',position: 'absolute', top: '12px' }} />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/01a8d5d7c15093ace855e5e2965f92a9c7a6a5cc" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '1250px',position: 'absolute', top: '12px' }} />
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

        <div style={{ width: '1159px', margin: '0 auto' }}>
      <div className="border-t-4 border-black mt-12">
        <div className="flex items-center">
          <h1 className="frase-preta text-[30px]">Todos os professores</h1>
          <input
            className="sm:text-sm rounded-md"
            type="button"
            value="Nova Publicação"
            style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }}
          />
          <input
            className="sm:text-sm rounded-md"
            type="button"
            value="Ordenar"
            style={{ width: '150px', height: '55px', background: '#87CEEB',marginLeft:'40px' }}
          />
        </div>
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
      <div className="sm:text-sm rounded-md" style={{
      position: 'fixed',
      top: '70px',
      left: '250px',
      width: '900px',
      height: '450px',
      backgroundColor: '#25D366',
      zIndex: 9999,
      padding: '20px', // Adiciona um padding interno para espaçamento
    }}>
      {/* Botão para Nome do Professor */}
      <button className="sm:text-sm rounded-md"
        style={{
          fontSize: '18px',
          width: '800px',
          height: '45px',
          position: 'absolute',
          top: '10px',
          left: '40px',
          backgroundColor: '#FFFFFF',
          border: 'none', // Remove a borda
          textAlign: 'left', // Alinha o texto à esquerda
          color: '#808080', // Define a cor do texto como cinza
          paddingLeft: '10px', // Adiciona um espaçamento interno à esquerda
        }}
      >
        Nome do Professor
      </button>

      {/* Botão para Disciplina */}
      <button className="sm:text-sm rounded-md"
        style={{
          fontSize: '18px',
          width: '800px',
          height: '45px',
          position: 'absolute',
          top: '80px',
          left: '40px',
          backgroundColor: '#FFFFFF',
          border: 'none', // Remove a borda
          textAlign: 'left', // Alinha o texto à esquerda
          color: '#808080', // Define a cor do texto como cinza
          paddingLeft: '10px', // Adiciona um espaçamento interno à esquerda
        }}
      >
        Disciplina
      </button>

      {/* Espaço em branco grande vazio */}
      <div style={{marginTop: '120px', height: '300px', background:'#7FFFD4',top: '900px',}}></div>
    </div>
    </div>
  );
}

    