"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";

interface Post {
    date: string;
    category: string;
    content: string;
    comments: number;
}

interface User {
    name: string;
    course: string;
    email: string;
    avatar: string;
    posts: Post[];
}

// infos do morty(usuario)
const user: User = {
    name: "Morty Gamer",
    course: "Ciência da Computação / Dept. Ciência da Computação",
    email: "Morty.gamer.23@cjr.org.br",
    avatar: "avatar.png",
    posts: [
        {
            date: "17/04/2024, às 21:42",
            category: "João Frango - Surf",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin texts.",
            comments: 2,
        },
        {
            date: "15/04/2024, às 21:42",
            category: "Rick - Viagem Interdimensional",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            comments: 3,
        },
    ],
};

export default function PerfilDoAlunoDeslogado(): JSX.Element {
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

        // Verificar se todas as senhas têm pelo menos 8 caracteres
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

        if (isValid) {
            // Se as senhas tiverem o comprimento mínimo, fechar o modal
            closeModal();
        }
    };
    // Função para lidar com a abertura do modal
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        // Limpar o texto quando o modal é fechado
        setText("");
        setShowModal(false);
        setPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };



    const [showGreenScreen, setShowGreenScreen] = useState(false);
    return (
        <div className="bg-[#EDEDED] h-screen overflow-y-auto">
            {/* Estou puxando a nav e depois colocando o botão de login, dentro dela */}
            <div className="relative">
                <Nav />
                <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/1d606de3cc4a464fe631e13f764212595cb2cc9d" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '90%', position: 'absolute', top: '12px' }} />
                <a href="/login"><button><img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/01a8d5d7c15093ace855e5e2965f92a9c7a6a5cc" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '12px' }} /></button>
                </a>
            </div>

            {/* as publicações do perfil */}
            <div className="flex justify-center w-full mt-8">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-md">
                    <img className="py-1 px-1" src="setamaior.png" alt="Notificação" style={{ width: '65px', height: '65px', marginLeft: '-80px', top: '8px' }} />

                    {/* perfil do usuario */}
                    <div className="bg-[#3EEE9A] p-4 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={user.avatar} className="w-20 h-20 rounded-full border-4 border-white" alt="Avatar" />
                            <div className="ml-4">
                                <h2 className="text-2xl font-bold text-black">{user.name}</h2>
                                <p className="text-lg text-black">{user.course}</p>
                                <div className="flex items-center">
                                    <img
                                        className="py-1 px-1"
                                        src="https://static.thenounproject.com/png/620322-200.png"
                                        alt="Notificação"
                                        style={{ width: '39px', height: '39px', marginRight: '12px' }}
                                    />
                                    <p className="text-lg text-black">{user.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <button onClick={openModal}>
                                <button className="bg-[#A4FED3] hover:bg-[#81E8B2] text-black font-bold py-2 px-14 rounded-full">Editar Perfil</button>
                            </button>
                            <button className="bg-[#FFB6B6] hover:bg-[#FF7F7F] text-black font-bold py-2 px-4 rounded-full">Excluir Perfil</button>
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
                        </div>
                    </div>

                    {/* linhazinha da divisória */}
                    <hr className="border-gray-300 my-4" />

                    {/* titulo das publicações */}
                    <div className="px-4">
                        <h3 className="text-black font-bold">Publicações</h3>
                    </div>

                    <div className="p-4">
                        <div className="space-y-4">
                            {user.posts.map((post, index) => (
                                <div key={index} className="bg-[#3EEE9A] p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                                        <div className="ml-2">
                                            <h4 className="text-lg font-bold text-black">{user.name}</h4>
                                            <p className="text-sm text-gray-800 ">{post.date} · <span className="text-black-600 font-semibold">{post.category}</span></p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-900">{post.content}</p>
                                    <div className="mt-2 flex items-center">
                                        <img className="py-1 px-1" src="cometario.png"
                                            alt="Comemtário"
                                            style={{ width: '36px', height: '36px', marginLeft: '-15px', top: '6px' }}
                                        />
                                        <p className="text-sm text-gray-600 font-bold  ml-2">{post.comments} comentários</p>
                                        <button
                                            style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', marginLeft: 'auto' }}
                                        >
                                            <img
                                                src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/9cb257e39b468ffcefd3f773c1a5b86158583e3c"
                                                alt="Edit"
                                                style={{ width: '24px', height: '24px' }}
                                            />
                                        </button>
                                        <button
                                            style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', marginLeft: '8px' }}
                                        >
                                            <img
                                                src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/6521bc214120289f32b07807d5a3f7113ad37ad7"
                                                alt="Delete"
                                                style={{ width: '24px', height: '24px' }}
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
