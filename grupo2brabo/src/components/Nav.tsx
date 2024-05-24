import React from 'react';

// Componente funcional para a navegação
const Nav: React.FC = () => {
  return (
    <div className="w-screen h-24 bg-[#A4FED3] flex items-center justify-between pr-4 pl-4">
    <img src="caminho_para_a_logo_unb.png" className="h-16" alt="Logo" />
    <button className="h-12 w-32 bg-[#00ABED] border-2 border-[#FFFFFF] rounded-xl text-xl drop-shadow-lg hover:bg-[#49a1be]">Login</button> 
</div>
  );
}

export default Nav;
