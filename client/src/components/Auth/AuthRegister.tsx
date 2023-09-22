import useAuthentication from '@/hooks/useAuthentication'
import requestServices from '@/services/requestApi'
import '@/styles/components/auth.register.css'
import { useForm } from 'react-hook-form'


interface Props {
  toggleAuthPage: () => void
}

type FormData = {
  username: string
  password: string
  email: string
  name: string
}
export default function AuthRegister(props: Props) {
  const {toggleAuthPage} = props
  const { registerAction } = requestServices
  const {handleLogged} = useAuthentication()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  
  const onSubmit = handleSubmit(async (data) => {
    const isLogin = await registerAction(data)
    if(isLogin) {
      handleLogged()
    }

  })

  return (
    <div className="containerAuth" onSubmit={onSubmit}>
      <form className="w-full p-3">
        <h2 className="p-8 text-4xl font-bold text-center text-white">Register</h2>
        <div className="flex flex-col gap-5 p-3">
          <input {...register("name", { required: true })} className="py-2 rounded-lg" type="text" placeholder="Nome Completo" />
            {errors.name && <span>This field is required</span>}
          <input {...register('username', {required: true})} className="py-2 rounded-lg" type="text" placeholder="Username" />
            {errors.username && <span>This field is required</span>}
          <input {...register('email', {required: true})} className="py-2 rounded-lg" type="email" placeholder="exemple@example.com" />
            {errors.email && <span>This field is required</span>}
          <input {...register('password', {required: true})} className="py-2 rounded-lg" type="password" placeholder="Password" />
            {errors.password && <span>This field is required</span>}
        </div>
        <div className="flex flex-row gap-2 p-2">
          <button type='submit' className="bg-blue-800 btnContainerLogin hover:bg-blue-500">Register</button>
        </div>
        <div className="flex flex-col p-2">
          <button className="btnContainerLogin" onClick={toggleAuthPage}>Voltar</button>
        </div>
      </form>
    </div>
  )
}