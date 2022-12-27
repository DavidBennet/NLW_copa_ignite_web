import Image from "next/image";
import appNlw from "../assets/app-nlw-copa-preview.png";
import logo from "../assets/logo.svg";
import avatares from "../assets/avatares.png";
import iconCheck from "../assets/iconCheck.svg";


export default function Home() {
  return (
   <div className="grid grid-cols-2 mt-14 mb-4 mx-36 gap-28">
    <main className="flex flex-col">
      <Image src={logo} alt='logo nlw' className="w-52 h-10"/>

      <h1 className="mt-14 font-lobster font-bold text-5xl">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

      <div className="mt-10 mr-7 flex flex-row items-center gap-2">
        <Image src={avatares} alt="avatares dos usuários"/>

        <strong className="font-bold font-lobster text-xl">
          <span className="text-verde-500 mr-2">
            +12.592
          </span> 
          pessoas já estão usando
        </strong>
      </div>

      <form className="mt-10 flex gap-2">
        <input 
          type="text" 
          required 
          placeholder="Qual nome do seu bolão?"
          className="w-72 h-14 rounded border border-solid border-gray-700 bg-gray-900 items-center justify-items-center text-gray-400 font-oswald font-normal text-sm px-6 py-4" 
        />
        <button 
          type="submit"
          className="w-44 h-14 bg-yellowIgnite-400 items-center justify-items-center font-oswald text-black font-bold text-sm rounded hover:bg-yellow-500"
        >
          CRIAR MEU BOLÃO
        </button>
      </form>

      <p className="mt-4 w-96 h-11 text-grayIgnite-300 font-oswald font-normal text-sm leading-5">Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

      <div className="mt-10 grid grid-cols-2 border-t-[1px] border-grayIgnite-800 divide-x divide-grayIgnite-800">
        <div className="mt-10 flex items-center gap-6">
          <Image src={iconCheck} alt="" />
          
          <div>
            <strong>+2.034</strong>
            <p>Bolões criados</p>
          </div>
        </div>
        
        <div className="mt-10 flex justify-end items-center gap-6">
          <Image src={iconCheck} alt="" />
          
          <div>
            <strong>+192.847</strong>
            <p>Palpites enviados</p>
          </div>
        </div>
      </div>
    </main>

    <Image src={appNlw} alt='dois celulares com as imagens do aplicativo neles' className="h-[605]"/>

   </div>
  )
}

