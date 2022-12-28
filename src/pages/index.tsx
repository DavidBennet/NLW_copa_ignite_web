import Image from "next/image";
import appNlw from "../assets/app-nlw-copa-preview.png";
import logo from "../assets/logo.svg";
import avatares from "../assets/avatares.png";
import iconCheck from "../assets/iconCheck.svg";
import { api } from "../lib/axios";
import { FormEvent, useState } from "react";

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
  const [poolTitle, setPoolTitle] = useState ('')

  async function createPool(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('pools', {
        title: poolTitle,
      })

      const {code} = response.data

      await navigator.clipboard.writeText(code)
      alert('Bolão criado com sucesso!')

      setPoolTitle('')

    } catch (err) {
      alert('Falha ao criar seu bolão, tente novamente!');
    }
  }

  return (
   <div className="grid grid-cols-2 mt-14 mb-4 mx-36 gap-28">
    <main className="flex flex-col">
      <Image src={logo} alt='logo nlw' className="w-52 h-10"/>

      <h1 className="mt-12 font-lobster font-bold leading-tight text-5xl">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

      <div className="mt-10 mr-7 flex flex-row items-center gap-2">
        <Image src={avatares} alt="avatares dos usuários"/>

        <strong className="font-bold font-lobster text-xl">
          <span className="text-verde-500 mr-2">
            +{props.userCount}
          </span> 
          pessoas já estão usando
        </strong>
      </div>

      <form onSubmit={createPool} className="mt-10 flex gap-2">
        <input 
          className="w-72 h-14 rounded border border-solid border-gray-700 bg-gray-900 items-center justify-items-center text-gray-100 font-oswald font-normal text-sm px-6 py-4" 
          type="text" 
          required 
          placeholder="Qual nome do seu bolão?"
          onChange={event => setPoolTitle(event.target.value)}
          value={poolTitle}
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
            <strong>+{props.poolCount}</strong>
            <p>Bolões criados</p>
          </div>
        </div>
        
        <div className="mt-10 flex justify-end items-center gap-6">
          <Image src={iconCheck} alt="" />
          
          <div>
            <strong>+{props.guessCount}</strong>
            <p>Palpites enviados</p>
          </div>
        </div>
      </div>
    </main>

    <Image src={appNlw} alt='dois celulares com as imagens do aplicativo neles' className="h-[605]"/>

   </div>
  )
}

export const getServerSideProps = async () => {

  const [poolCountResponse, guessCountResponse, usersCountResponse] = await Promise.all([
    api.get('/pools/count'),
    api.get('/guesses/count'),
    api.get('/users/count')
  ])

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: usersCountResponse.data.count,
    }
  }
}