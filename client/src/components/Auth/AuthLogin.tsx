import { useForm } from "react-hook-form"
import requestServices from "@/services/requestApi"



import '@/styles/components/auth.login.css'
import useAuthentication from "@/hooks/useAuthentication"
interface Props {
  toggleAuthPage: () => void
}

type FormData = {
  username: string
  password: string
}

export default function AuthLogin(props: Props) {
  const { loginAction } = requestServices
  const {handleLogged} = useAuthentication()
  const {toggleAuthPage} = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  
  const onSubmit = handleSubmit(async (data) => {
    const isLogin = await loginAction(data)
    if(isLogin) {
      handleLogged()
    }

  })
  

  // const handleSubmit2 = () => AuthLoginAction({username: "teste1", password: "Teste@123"})

  return (
    <div className="containerAuth" onSubmit={onSubmit}>
      <form className="w-full p-3">
        <h2 className="p-8 text-4xl font-bold text-center text-white">Login</h2>
        <div className="flex flex-col gap-5 p-3">
          <input {...register("username", { required: true })} className="py-2 rounded-lg" type="text" placeholder="Username" />
            {errors.username && <span>This field is required</span>}
          <input {...register("password", { required: true })} className="py-2 rounded-lg" type="password" placeholder="Password" />
            {errors.password && <span>This field is required</span>}
        </div>
        <div className="flex flex-col p-2">
          <button className="btnContainerLogin" type="submit">Login</button>
        </div>
        <div className="flex flex-row gap-2 p-2">
          <button onClick={toggleAuthPage} className="bg-blue-800 btnContainerLogin hover:bg-blue-500">Register</button>
        </div>
      </form>
    </div>
  )
}