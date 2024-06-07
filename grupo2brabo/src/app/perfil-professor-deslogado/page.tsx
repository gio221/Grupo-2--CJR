"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";

/* Declarando oque vai ter no post */
interface Post {
    date: string;
    category: string;
    content: string;
    comments: number;
    avatar: string;
}
/* declarando interface do usuario */
interface User {
    name: string;
    course: string;
    materia: string;
    avatar: string;
    posts: Post[];
}

// infos do professor
const user: User = {
    name: "Morty Gamer",
    course: " Dept. Ciência da Computação",
    materia: "Segurança Computacional, Estrutura de Dados, Viagem Interdimensional",
    avatar: "avatar-professor.png",
    posts: [
        {
            date: "15/04/2024, às 21:42",
            category: "Rick. Viagem Interdimensional",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
            comments: 1,
            avatar: "avatar.png"
        },
        {
            date: "10/04/2024, às 11:12",
            category: "Rick - Estrutura de Dados",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
            comments: 1,
            avatar: "avatar-bart.png"
        },
    ],
};
/* interface comentario */
interface Comment {
    avatar: string;
    name: string;
    date: string;
    content: string;
}
/* criando os comentarios */
const comments: Comment[] = [
    {
        avatar: "avatar-comentario.png",
        name: "Sans",
        date: "18/06/2024 á 21:43",
        content: "Muito Bom"
    },
    {
        avatar: "avatar-bart.png",
        name: "El barto",
        date: "19/06/2024 ás 10:20",
        content: "Legal"
    },
];

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
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(Array(user.posts.length).fill(false));
    const [newComment, setNewComment] = useState("");

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

    const toggleCommentModal = (index: number) => {
        const updatedIsCommentModalOpen = [...isCommentModalOpen];
        updatedIsCommentModalOpen[index] = !updatedIsCommentModalOpen[index];
        setIsCommentModalOpen(updatedIsCommentModalOpen);
    };

    return (
        <div className="bg-[#EDEDED] h-screen overflow-y-auto">
            {/* Estou puxando a nav e depois colocando o botão de login, dentro dela */}
            <div className="relative">
                <Nav />
                <a href="/login"><button className="absolute top-0 right-0 m-4 h-12 w-32 bg-[#00ABED] border-2 border-[#FFFFFF] rounded-xl text-xl drop-shadow-lg hover:bg-[#49a1be]">
                    Login
                </button></a>
            </div>
            {/* as publicações do perfil */}
            <div className="flex justify-center w-full mt-8">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-md">
                    {/* botão da seta leva para feed logado */}
                    <button className="py-1 px-1" style={{ width: '65px', height: '65px', marginLeft: '-80px', top: '8px', border: 'none', position: 'relative' }}>
                        <a href="/feed-logado"> <img src="setamaior.png" alt="Notificação" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></a>
                    </button>

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
                                        alt="livro"
                                        style={{ width: '39px', height: '39px', marginRight: '12px' }}
                                    />
                                    <p className="text-lg text-black">{user.materia}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* linhazinha da divisória */}
                    <hr className="border-gray-300 my-4" />

                    {/* titulo das publicações */}
                    <div className="px-4">
                        <h3 className="text-black font-bold">Avaliações</h3>
                    </div>

                    <div className="p-4">
                        <div className="space-y-4">
                            {user.posts.map((post, index) => (
                                <div key={index} className="bg-[#3EEE9A] p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <img src={post.avatar} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                                        <div className="ml-2">
                                            <h4 className="text-lg font-bold text-black">{user.name}</h4>
                                            <p className="text-sm text-gray-800 ">{post.date} · <span className="text-black-600 font-semibold">{post.category}</span></p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-900">{post.content}</p>
                                    <div className="mt-2 flex items-center">
                                        <button className="comment-button" onClick={() => toggleCommentModal(index)}>
                                            <img
                                                className="py-1 px-1"
                                                src="/cometario.png"
                                                style={{ width: '50px', height: '36px', marginLeft: '-15px', top: '6px' }}
                                                alt="Comentário"
                                            />
                                        </button>
                                        <p className="text-sm text-gray-600 font-bold  ml-2">{post.comments} comentários</p>
                                        <button
                                            style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', marginLeft: 'auto' }}
                                        >
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
                                    {isCommentModalOpen[index] && (
                                        <div className="modal" style={{ backgroundColor: '#A4FED3', width: '651px', height: '292px', top: '34px', left: '57px', gap: '5px', opacity: '1' }}>
                                            <div className="modal-content" style={{ backgroundColor: '#A4FED3', color: 'white' }}>
                                                <span className="close" onClick={() => toggleCommentModal(index)}>&times;</span>
                                                <div className="flex items-center">
                                                    <img src={comments[index].avatar} alt="Avatar" className="w-20 h-20 rounded-full border-4 border-white" />
                                                    <div className="ml-4">
                                                        <h2 className="text-2xl font-bold text-black">{comments[index].name}</h2>

                                                        <div className="flex items-center">
                                                            <img
                                                                className="py-1 px-1"
                                                                src="https://static.thenounproject.com/png/620322-200.png"
                                                                alt="Notificação"
                                                                style={{ width: '39px', height: '39px', marginRight: '12px' }}
                                                            />
                                                            <div>
                                                                <p className="text-lg text-black">{comments[index].date}</p>
                                                                <p className="text-lg text-black">{comments[index].content}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    )}


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
