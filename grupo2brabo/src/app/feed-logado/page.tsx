"use client";
import React, { useState } from "react";
import Nav from "@/app/components/Nav";

// Interface para os dados do professor
interface ProfessorCardProps {
  name: string;
  subject: string;
  imageUrl: string;
  /*  aqui eu adicionei a data */
  date: string;
}

/* O que é mostrado no card do professor */
const ProfessorCard: React.FC<ProfessorCardProps> = ({ name, subject, imageUrl, date }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px', width: '236px', height: '281px', backgroundColor: '#FFFFFF', border: '1px solid #000', padding: '10px' }}>
      <img src={imageUrl} alt={`${name}'s avatar`} style={{ width: '185px', height: '185px' }} />
      <h3 className='frase-preta text-[30px]' style={{ margin: '5px 0 5px 0', fontSize: '14px' }}>{name}</h3>
      <p className='frase-preta text-[30px]' style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{subject}</p>
      <p className='frase-preta text-[30px]' style={{ margin: 0, fontSize: '14px' }}>Data: {date}</p> {/* Exibindo a data */}
    </div>
  );
}

// Componente principal
export default function Login(): JSX.Element {
  // Estado para controlar a exibição das opções de ordenação
  const [showOptions, setShowOptions] = useState(false);
  // Estado para armazenar a consulta de pesquisa do usuário
  const [searchQuery, setSearchQuery] = useState("");
  // Estado para controlar a ordenação atual dos professores
  const [sortBy, setSortBy] = useState<"name" | "subject" | "recent" | "old">("name");
  // Estado para controlar a ordem de ordenação (ascendente ou descendente)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(""); // Estado para armazenar o texto digitado pelo usuário

  // Função para lidar com a abertura do modal
  const openModal = () => {
    setShowModal(true);
  };


  // Função para lidar com o fechamento do modal
  const closeModal = () => {
    setShowModal(false);
    // Limpar o texto quando o modal é fechado
    setText("");
  };
  const [showGreenScreen, setShowGreenScreen] = useState(false);
  // Função para alternar a exibição das opções de ordenação
  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  // Função para atualizar o estado com a consulta de pesquisa
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Função para atualizar a ordenação atual
  const handleSort = (sortBy: "name" | "subject" | "recent" | "old") => {
    setSortBy(sortBy);
    // Alternar a ordem de ordenação se o mesmo critério for clicado novamente
    setSortOrder(sortBy === sortBy ? (sortOrder === "asc" ? "desc" : "asc") : "asc");
  };
  const toggleGreenScreen = () => {
    setShowGreenScreen(!showGreenScreen);
  };



  // Função para ordenar os professores
  const sortProfessors = (professors: ProfessorCardProps[]) => {
    return professors.sort((a, b) => {
      let valueA = '';
      let valueB = '';
      if (sortBy === "name" || sortBy === "subject") {
        valueA = a[sortBy].toLowerCase();
        valueB = b[sortBy].toLowerCase();
      } else if (sortBy === "recent" || sortBy === "old") {
        // Se for ordenar por data, considerei que haveria uma propriedade 'date' nos objetos ProfessorCardProps
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        valueA = sortBy === "recent" ? dateA.getTime().toString() : dateB.getTime().toString();
        valueB = sortBy === "recent" ? dateB.getTime().toString() : dateA.getTime().toString();
      }
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // Dados dos professores 
  const novosProfessores: ProfessorCardProps[] = [
    { name: 'Rick Sanchez', subject: 'Segurança Computacional', imageUrl: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-38-anos-2.png', date: '2024-06-01' },
    { name: 'Marta Silva', subject: 'Biologia', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblNoGuPCs3KLSTfmjzTr5giFXU80sMye1zxS_6cl7t91QbXaPLzcLPgUZyeEuxr5FFrg&usqp=CAU', date: '2024-04-22' },
    { name: 'Pedro Almeida', subject: 'História', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ltRE-VmAL3fakF1QTQKjAWwBD-AsBveoyLE8JLf5gneE5S7ax5hq-PlRWpWwX0a1XZ0&usqp=CAU', date: '2024-02-13' },
    { name: 'Luciana Santos', subject: 'Matemática', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeaYuNoHucjMCMYM629uwCPMmOWOrCL-ZaXKdsoVlGarF0vA9euNC6KECBu-khrfxWdY&usqp=CAU', date: '2023-12-21' }
  ];

  const todosProfessores: ProfessorCardProps[] = [
    { name: 'João Pereira', subject: 'Português', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVt_ojDR6dMWlvsb7a8KwE2HMlV4TZxsgoMNhOI7etLYqgGnwU8VdEDicPt24FEEqXXtY&usqp=CAU', date: '2023-10-31' },
    { name: 'Carla Oliveira', subject: 'Química', imageUrl: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/0839e92c-e989-48ef-ba07-f9350e745b15.png', date: '2023-08-26' },
    { name: 'Ricardo Santos', subject: 'Física', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszigmKrC5C2I5gVs3SW87KkYKtwTSvLD-AmlBHTWz0WJQkTk3GCMGD5O7QSkXwhEguNw&usqp=CAU', date: '2023-06-12' },
    { name: 'Camila Sousa', subject: 'Artes', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZq-a8c8RFpn1Cyt2o9tRNF70N9rWS2i_u0KsKPmqfYQpGQ-qlSL4QXTBNq9bkJ5XUKI&usqp=CAU', date: '2023-04-05' }
  ];

  // Filtrar e ordenar os professores com base na consulta de pesquisa e na ordenação atual
  const filteredProfessors = sortProfessors([...novosProfessores, ...todosProfessores].filter(professor =>
    professor.name.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <div>
      {/* Estou puxando a nav e depois colocando o botão de login, dentro dela */}
      <div className="relative">
        <Nav />
        {/* Botão da logo */}


        <img
          className="py-1 px-1"
          src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/1d606de3cc4a464fe631e13f764212595cb2cc9d"
          alt="Logo usuario"
          style={{ width: '45px', height: '45px', marginLeft: '90%', position: 'absolute', top: '12px' }}
        />

        <a href="/login"><button><img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/01a8d5d7c15093ace855e5e2965f92a9c7a6a5cc" alt="Sair" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '12px' }} /></button>
        </a>

      </div>
      <div className="bg-[#EDEDED]" style={{ width: '100%', height: 'auto', paddingBottom: '10px' }}>
        <div className="border-t-4 border-black mt-10">
          <div className="flex items-center justify-between">
            <h1 className="frase-preta text-[30px]" style={{ marginTop: '30px' }}>Todos os professores</h1>
            <div>
              {/*  botao que abre o modal nova publicação */}
              <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Nova Publicação"
                onClick={toggleGreenScreen}
                style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }}
              />
            </div>
            <div>
              <input
                className="mr-2 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black"
                placeholder="Buscar Professor(a)"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <input
              className="sm:text-sm rounded-md"
              type="button"
              value="Ordenar"
              style={{ width: '150px', height: '55px', background: '#87CEEB', marginLeft: 'auto' }}
              onClick={handleButtonClick}
            />
          </div>
        </div>

        {/* Opções de ordenação */}
        {showOptions && (
          <div className="mt-4">
            <table className="table-auto w-full border-t-4" style={{ background: '#ADD8E6', marginLeft: 'auto', maxWidth: '250px' }}>
              <tbody>
                <tr>
                  <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleSort("name")}>Nome</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleSort("subject")}>Matéria</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleSort("recent")}>Mais Recentes</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border border-gray-300" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleSort("old")}>Mais Antigos</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>)}
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredProfessors.map((professor, index) => (
          <ProfessorCard
            key={index}
            name={professor.name}
            subject={professor.subject}
            imageUrl={professor.imageUrl}
            date={professor.date} // Passando a data para o componente ProfessorCard
          />
        ))}
      </div>
      {/* Botão de nova publicação */}
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
          {/* Campo de entrada para Nome do Professor */}
          <input
            className="sm:text-sm rounded-md text-black"
            type="text"
            placeholder="Nome do Professor"
            style={{
              fontSize: '18px',
              width: '95%',
              height: '45px',
              marginTop: '10px',
              backgroundColor: '#FFFFFF',
              border: 'none',
              paddingLeft: '10px',
            }}
          />
          {/* Campo de entrada para Disciplina */}
          <input
            className="sm:text-sm rounded-md text-black"
            type="text"
            placeholder="Disciplina"
            style={{
              fontSize: '18px',
              width: '95%',
              height: '45px',
              marginTop: '10px',
              backgroundColor: '#FFFFFF',
              border: 'none',
              paddingLeft: '10px',
            }}
          />
          {/* Coloquei textarea para que a parte de baixo o usuario consiga digitar */}
          <textarea
            className="sm:text-sm rounded-md text-black"
            style={{ marginTop: '20px', height: '65%', background: '#A4FED3', width: '98%' }}
            placeholder="Escreva algo aqui..."
          ></textarea>
          {/* botões debaixo da tela de escrever */}
          <div style={{ alignItems: 'center' }}>
            <a href="/feed-logado">
              <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Cancelar"
                style={{ width: '20%', background: '#3EEE9A', marginLeft: '55%', marginTop: '25px', height: '55px' }}
              /></a>
            <a href="/feed-logado">
              <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Avaliar"
                style={{ width: '20%', height: '55px', background: '#A4FED3', marginLeft: 'auto', marginTop: '25px' }}
              /></a>
          </div>
        </div>
      )}

    </div>

  );
}
