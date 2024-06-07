"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";

/* interface do post */
interface Post {
    date: string;
    category: string;
    content: string;
    comments: number;
}
/* interface do usuário */
interface User {
    name: string;
    course: string;
    email: string;
    avatar: string;
    posts: Post[];
}
/* criando as publicações */
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
/* interface comentario */
interface Comment {
    avatar: string;
    name: string;
    date: string;
    content: string;
}
/* criando comentario */
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
    const [modalAberto2, setModalAberto2] = useState(false);

    const [isCommentModalOpen, setIsCommentModalOpen] = useState(Array(user.posts.length).fill(false));
    const openModal2 = () => {
        setModalAberto2(true);
    };

    const closeModal2 = () => {
        setModalAberto2(false);
    };

    const toggleCommentModal = (index: number) => {
        const updatedIsCommentModalOpen = [...isCommentModalOpen];
        updatedIsCommentModalOpen[index] = !updatedIsCommentModalOpen[index];
        setIsCommentModalOpen(updatedIsCommentModalOpen);
    };

    return (
        <div className="bg-[#EDEDED] h-screen overflow-y-auto">
            <div className="relative">
                <Nav />
                <a href="/login"><button className="absolute top-0 right-0 m-4 h-12 w-32 bg-[#00ABED] border-2 border-[#FFFFFF] rounded-xl text-xl drop-shadow-lg hover:bg-[#49a1be]">
                    Login
                </button></a>
            </div>
            <div className="flex justify-center w-full mt-8">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-md">
                    {/* botão da seta leva para feed logado */}
                    <button className="py-1 px-1" style={{ width: '65px', height: '65px', marginLeft: '-80px', top: '8px', border: 'none', position: 'relative' }}>
                        <a href="/feed-logado"> <img src="setamaior.png" alt="Notificação" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></a>
                    </button>
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
                                                        {/* Aqui está o botão "Comentar" */}
                                                        <button onClick={openModal2} className="bg-[#3EEE9A] hover:bg-[#FF7F7F] text-black font-bold py-4 px-14 rounded-full" style={{ marginLeft: '332px' }}>Comentar</button>
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
                                                    {/* Modal 2 */}
                                                    {/* Botão de comentar */}
                                                    {modalAberto2 && (
                                                        <div className="sm:text-sm rounded-md" style={{
                                                            position: 'fixed',
                                                            top: '50px',
                                                            left: '250px',
                                                            width: '75%',
                                                            height: '70%',
                                                            backgroundColor: '#3EEE9A',
                                                            zIndex: 9999,
                                                            padding: '20px',
                                                        }}>
                                                            {/* Coloquei textarea para que a parte de baixo o usuario consiga digitar */}
                                                            <textarea
                                                                className="sm:text-sm rounded-md text-black"
                                                                style={{ marginTop: '20px', height: '85%', background: '#A4FED3', width: '98%' }}
                                                                placeholder="Escreva algo aqui..."
                                                            ></textarea>
                                                            {/* botões debaixo da tela de escrever */}
                                                            <div style={{ alignItems: 'center' }}>
                                                                <a href="/perfil-aluno-deslogado">
                                                                    <input
                                                                        className="sm:text-sm rounded-md"
                                                                        type="button"
                                                                        value="Cancelar"
                                                                        style={{ width: '20%', background: '#3EEE9A', marginLeft: '55%', marginTop: '25px', height: '55px' }}
                                                                    /></a>
                                                                <a href="/perfil-aluno-deslogado">
                                                                    <input
                                                                        className="sm:text-sm rounded-md"
                                                                        type="button"
                                                                        value="Comentar"
                                                                        style={{ width: '20%', height: '55px', background: '#A4FED3', marginLeft: 'auto', marginTop: '25px' }}
                                                                    /></a>
                                                            </div>
                                                        </div>
                                                    )}
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
