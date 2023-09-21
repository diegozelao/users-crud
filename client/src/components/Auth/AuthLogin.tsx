import { useForm } from "react-hook-form"

import '@/styles/components/auth.login.css'

interface Props {
  toggleAuthPage: () => void
}

type FormData = {
  username: string
  password: string
}

export default function AuthLogin(props: Props) {
  const {toggleAuthPage} = props

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <div className="containerAuth">
      <div className="w-full p-3">
        <h2 className="p-8 text-4xl font-bold text-center text-white">Login</h2>
        <div className="flex flex-col gap-5 p-3">
          <input className="py-2 rounded-lg" type="text" placeholder="Username" />
          <input className="py-2 rounded-lg" type="password" placeholder="Password" />
        </div>
        <div className="flex flex-col p-2">
          <button className="btnContainerLogin">Login</button>
        </div>
        <div className="flex flex-row gap-2 p-2">
          <button onClick={toggleAuthPage} className="bg-blue-800 btnContainerLogin hover:bg-blue-500">Register</button>
        </div>
      </div>
    </div>
  )
}