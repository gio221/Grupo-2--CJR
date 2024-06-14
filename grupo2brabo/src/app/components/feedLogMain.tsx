"use client";
import React, { useState } from "react";
import Nav from "@/app/components/Nav";
import { Professor } from "./interfacesPadrao";


// Interface para os dados do professor

/* O que é mostrado no card do professor */

interface LoginMainProps {
    logged: number
    profesores: Professor[]
}

// Componente principal
const FeedLogged: React.FC<LoginMainProps> = ({ profesores, logged }) => {
  const ProfessorCard: React.FC<Professor> = ({ name,departamento: subject, foto: imageUrl, id , date }) => {
    return (
      <a href={`/perfil-professor-logado/${logged}/${id}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px', width: '236px', height: '281px', backgroundColor: '#FFFFFF', border: '1px solid #000', padding: '10px' }}>
        <img src={imageUrl} alt={`${name}'s avatar`} style={{ width: '185px', height: '185px' }} />
        <h3 className='frase-preta text-[30px]' style={{ margin: '5px 0 5px 0', fontSize: '14px' }}>{name}</h3>
        <p className='frase-preta text-[30px]' style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{subject}</p>
        <p className='frase-preta text-[30px]' style={{ margin: 0, fontSize: '14px' }}>Data: {date}</p> {/* Exibindo a data */}
      </a>
    );
  }
  // Estado para controlar a exibição das opções de ordenação
  const [showOptions, setShowOptions] = useState(false);
  // Estado para armazenar a consulta de pesquisa do usuário
  const [searchQuery, setSearchQuery] = useState("");
  // Estado para controlar a ordenação atual dos professores
  const [sortBy, setSortBy] = useState<"name" | "departamento" | "recent" | "old">("name");
  // Estado para controlar a ordem de ordenação (ascendente ou descendente)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showGreenScreen, setShowGreenScreen] = useState(false);
  const [text, setText] = useState(""); // Estado para armazenar o texto digitado pelo usuário
  const [showModal, setShowModal] = useState(false);
  /* para poder confirma se as senhas do modal edital perfil */
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');
  const handleSave = () => {
    let isValid = true;

    if (password.length < 8) {
      setPasswordError('A senha precisa ter no mínimo 8 caracteres.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (newPassword.length < 8) {
      setNewPasswordError('A nova senha precisa ter no mínimo 8 caracteres.');
      isValid = false;
    } else {
      setNewPasswordError('');
    }

    if (confirmNewPassword.length < 8) {
      setConfirmNewPasswordError('A confirmação da nova senha precisa ter no mínimo 8 caracteres.');
      isValid = false;
    } else {
      setConfirmNewPasswordError('');
    }
    if (password === newPassword) {
      setConfirmNewPasswordError("A nova senha não pode ser igual à senha atual.");
      isValid = false;
    } else {
      setNewPasswordError('');
    }
    if (newPassword !== confirmNewPassword) {
      setConfirmNewPasswordError("A nova senha precisa ser igual a confirma nova senha");
      isValid = false;
    } else {
      setNewPasswordError('');
    }
    if (isValid) {
      closeModal();
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setText("");
    setShowModal(false);
    setPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };
  // Função para alternar a exibição das opções de ordenação
  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  // Função para atualizar o estado com a consulta de pesquisa
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Função para atualizar a ordenação atual
  const handleSort = (sortBy: "name" | "departamento" | "recent" | "old") => {
    setSortBy(sortBy);
    // Alternar a ordem de ordenação se o mesmo critério for clicado novamente
    setSortOrder(sortBy === sortBy ? (sortOrder === "asc" ? "desc" : "asc") : "asc");
  };
  const toggleGreenScreen = () => {
    setShowGreenScreen(!showGreenScreen);
  };

  // Função para ordenar os professores
  const sortProfessors = (professors:Professor[]) => {
    return professors.sort((a, b) => {
      let valueA = '';
      let valueB = '';
      if (sortBy === "name" || sortBy === "departamento") {
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

  const novosProfessores:Professor[] = []
  const todosProfessores = profesores

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


        <button onClick={openModal} style={{ position: 'absolute', top: '12px', right: '150px', border: 'none', background: 'none', cursor: 'pointer' }}>
          <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/1d606de3cc4a464fe631e13f764212595cb2cc9d" alt="Logo UNB" style={{ width: '45px', height: '45px' }} />
        </button>
        <a href="/login"><button><img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/01a8d5d7c15093ace855e5e2965f92a9c7a6a5cc" alt="Sair" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '12px' }} /></button>
        </a>

      </div>
      <div className="bg-[#FFFFFF]" style={{ width: '100%', height: 'auto', paddingBottom: '10px' }}>
        <div className="border-t-4 border-black ">
          {/* modal de editar perfil */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="bg-white p-16 rounded-lg flex flex-col justify-center items-center ">

                {/* Campo de entrada para o email */}
                <div className="mb-2 w-full">

                  <input
                    type="text"
                    id="Nome"
                    placeholder="Nome "
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  />
                </div>

                {/* Campo de entrada para o email */}
                <div className="mb-2 w-full">

                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  />
                </div>

                {/* Campo de entrada para o curso */}
                <div className="mb-2 w-full">


                  <input
                    type="text"
                    id="curso"
                    placeholder="Curso"
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  />
                </div>

                {/* Campo de entrada para o departamento */}
                <div className="mb-2 w-full">

                  <input
                    type="text"
                    id="departamento"
                    placeholder="Departamento"
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  />
                </div>
                {/* Campo de entrada para senha*/}
                <div className="mb-2 w-full">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha atual"
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  /></div>
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                {/* Campo de entrada para nova senha*/}
                <div className="mb-2 w-full">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Nova senha"
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  /></div>
                {newPasswordError && <p className="text-red-500">{newPasswordError}</p>}
                {/* Campo de entrada para confirma nova senha */}
                <div className="mb-2 w-full">
                  <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    placeholder="Confirme sua nova senha"
                    className="border border-gray-400 p-2 rounded-md w-full text-black"
                  /></div>
                {confirmNewPasswordError && <p className="text-red-500">{confirmNewPasswordError}</p>}
                <div className="flex justify-center w-full">
                  <div className="mr-2">
                    <button onClick={handleSave} className="px-4 py-2 rounded-md" style={{ backgroundColor: '#A4FED3' }}>
                      Salvar
                    </button>
                  </div>
                  <div className="mr-2">
                    <button onClick={closeModal} className="px-5 py-2 rounded-md" style={{ backgroundColor: '#A4FED3' }}>
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
          }
          <div className="flex items-center justify-between">
            <h1 className="frase-preta text-[30px]" style={{ marginTop: '30px' }}>Todos os professores</h1>
            <div className="flex">
              {/* Botão que abre o modal nova publicação */}
              <input
                className="sm:text-sm rounded-md "
                type="button"
                value="Nova Publicação"
                onClick={toggleGreenScreen}
                style={{ width: '150px', height: '55px', background: '#87CEEB' }}
              />
              {/* Adicionando espaço entre os botões */}
              <div style={{ width: '650px' }}></div>
              {/* Input de busca */}
              <input
                className="mr-2 block  px-2 py-2 border bg-white border-black shadow-sm focus:ring-indigo-400 focus:border-indigo-500 sm:text-sm rounded-md text-black"
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
                    <button className="text-black" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleSort("departamento")}>Matéria</button>
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
            id ={professor.id}
            name={professor.name}
            departamento={professor.departamento}
            foto={professor.foto}
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
            <a href="/feed-logado/1">
              <input
                className="sm:text-sm rounded-md"
                type="button"
                value="Cancelar"
                style={{ width: '20%', background: '#3EEE9A', marginLeft: '55%', marginTop: '25px', height: '55px' }}
              /></a>
            <a href="/feed-logado/1">
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

export default FeedLogged;