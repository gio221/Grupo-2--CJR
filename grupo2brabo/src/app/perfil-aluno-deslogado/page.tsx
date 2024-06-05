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
            comments: 1,
        },
        {
            date: "15/04/2024, às 21:42",
            category: "Rick - Viagem Interdimensional",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            comments: 1,
        },
    ],
};
interface Comment {
    avatar: string;
    name: string;
    date: string;
    content: string;
}

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
const newPost: Post = {
    date: "20/06/2024",
    category: "Outro Autor - Outro Tópico",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula lectus nec massa fringilla, eget lobortis ipsum tempus. Aliquam euismod auctor ligula, ut lobortis tortor aliquet non. Nam nec metus quis ex tincidunt tempor sit amet sit amet lacus. Nullam auctor nec neque a rhoncus. Donec sed velit eget est commodo fermentum. Mauris non nunc eu libero consectetur pharetra. Donec ut sapien sit amet lorem eleifend accumsan. Vestibulum placerat lacus eget felis vestibulum, non vulputate metus ultrices.",
    comments: 0,
};

const updatedPosts = [...user.posts, newPost];


export default function PerfilDoAlunoDeslogado(): JSX.Element {
    const [text, setText] = useState("");
    const [showModal, setShowModal] = useState(false);
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

    const handlePostComment = () => {
        // Adicionar lógica para postar o comentário
        // Aqui você pode enviar o conteúdo do novo comentário para o servidor, etc.
        // Por enquanto, apenas limpar o texto do novo comentário
        setNewComment("");
    };

    return (
        <div className="bg-[#EDEDED] h-screen overflow-y-auto">
           <div className="relative">
        <Nav />
        <a href="/login"><button  className="absolute top-0 right-0 m-4 h-12 w-32 bg-[#00ABED] border-2 border-[#FFFFFF] rounded-xl text-xl drop-shadow-lg hover:bg-[#49a1be]">
          Login
        </button></a>
      </div>
            <div className="flex justify-center w-full mt-8">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-md">
                    <img className="py-1 px-1" src="setamaior.png" alt="Notificação" style={{ width: '65px', height: '65px', marginLeft: '-80px', top: '8px' }} />
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
                       
                    </div>
                    <hr className="border-gray-300 my-4" />
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
                                            <img
                                                src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/9cb257e39b468ffcefd3f773c1a5b86158583e3c"
                                                alt="editar"
                                                style={{ width: '24px', height: '24px' }}
                                            />
                                        </button>
                                        <button
                                            style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', marginLeft: '8px' }}
                                        >
                                            <img
                                                src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/6521bc214120289f32b07807d5a3f7113ad37ad7"
                                                alt="excluir"
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
