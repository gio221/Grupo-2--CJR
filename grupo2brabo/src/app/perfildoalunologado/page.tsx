import React from "react";
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
            comments: 5,
        },
    ],
};

export default function PerfilDoAlunoDeslogado(): JSX.Element {
    return (
        <div className="bg-[#EDEDED] h-screen overflow-y-auto">
            {/* Estou puxando a nav e depois colocando o botão de login, dentro dela */}
       <div className="relative">
        <Nav />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/9a188b44cab75de84a60500b8d6b541bb01d27ba" alt="Notificação" style={{ width: '45px', height: '45px', marginLeft: '80%', position: 'absolute', top: '12px' }} />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/1d606de3cc4a464fe631e13f764212595cb2cc9d" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '90%', position: 'absolute', top: '12px' }} />
        <img className="py-1 px-1" src="https://www.figma.com/file/rm3unqBZqA3aRyZ6uXIpGf/image/01a8d5d7c15093ace855e5e2965f92a9c7a6a5cc" alt="Logo UNB" style={{ width: '45px', height: '45px', marginLeft: '93%', position: 'absolute', top: '12px' }} />
      </div>

            {/* as publicações do perfil */}
            <div className="flex justify-center w-full mt-8">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-md"> 
                    <img className="py-1 px-1" src="https://s3-alpha-sig.figma.com/img/41d2/9b03/1f1304be9e1316052b37d56ea083de64?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vk73cX7gn3-9byD2wbFMkVh9V51DWRt3vtxMcHv8-PnY-jQBH3aDeqSYaGmMOHhgeLNKJxGvdyckJ9mTv0JulzYjQzsnidCjDBRt12xY9Y-kWd~QAUADR48jKCO27pekwwwg7U~Zf1NQF8hV~C~jYqahvK4HDhCLnimKqp4y2L64rRtq0WqtdX7~ozoImcSBdOK1BF1MYC7axRq8Aol3YnNJTFvfg0eeNM1RIHAUXfXIB4srNfZdmwE2YnSlOtK6MaDZ4NDKvvXbQ4OsACGpgyhb~7Sy2OjrDMIyeEu0KPU6hlimYI9KQFG~qLftsjVklKjf0pAK-skXhg7POb9T5g__" alt="Notificação" style={{ width: '65px', height: '65px', marginLeft: '-80px', top: '8px' }} />
                    
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
                            <button className="bg-[#A4FED3] hover:bg-[#81E8B2] text-black font-bold py-2 px-4 rounded-full">Editar Perfil</button> {/*hover:bg - efeito de passar o mouse */}
                            <button className="bg-[#FFB6B6] hover:bg-[#FF7F7F] text-black font-bold py-2 px-4 rounded-full">Excluir Perfil</button>
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
                                        <img className="py-1 px-1" src="https://s3-alpha-sig.figma.com/img/1b65/efaf/4d4043a919b34c9b4f05a7c437b9c7a5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RAFmSkSgCTZOB8euznMV7mhreQeu32AnTm6Vl2yrAYRgatRUpgIsiio89wjH-O5srN2pADKxz7VDK~IlwJ4P~VKEEJCfeGxLmhLNP4Gfxj~AkAU8Ssu5UIe9vKlJ2Igb4E5OoWvhUO~OQUg8AgNdXwYbhvxBSli6mvJ7nrzjU2kX5O-xYqCKymBqF~nYVpNX1I2d0aJv4YVmF7dsUk6jRQ3w~sGHq7ovDyWsHtAOUXvOSC-2JeAD33BFuS~b7VpB7WdrnLnbVITxpxBIxac0vOIb3w6Q1ciupxng7XI1MWzG8XnPfBxA7Kf5ou724eM-6RflLnXw~hX3cPWTiCnVVw__" 
                                        alt="Notificação"
                                        style={{ width: '36px', height: '36px', marginLeft: '-15px', top: '6px' }}
                                        />
                                        <p className="text-sm text-gray-600 font-bold  ml-2">{post.comments} comentários</p>
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
