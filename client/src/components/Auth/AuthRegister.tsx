
import '@/styles/components/auth.register.css'


interface Props {
  toggleAuthPage: () => void
}
export default function AuthRegister(props: Props) {
  const {toggleAuthPage} = props

  return (
    <div className="containerAuth">
      <div className="w-full p-3">
        <h2 className="p-8 text-4xl font-bold text-center text-white">Register</h2>
        <div className="flex flex-col gap-5 p-3">
          <input className="py-2 rounded-lg" type="text" placeholder="Nome Completo" />
          <input className="py-2 rounded-lg" type="text" placeholder="Username" />
          <input className="py-2 rounded-lg" type="email" placeholder="exemple@example.com" />
          <input className="py-2 rounded-lg" type="password" placeholder="Password" />
        </div>
        <div className="flex flex-row gap-2 p-2">
          <button className="bg-blue-800 btnContainerLogin hover:bg-blue-500">Register</button>
        </div>
        <div className="flex flex-col p-2">
          <button className="btnContainerLogin" onClick={toggleAuthPage}>Voltar</button>
        </div>
      </div>
    </div>
  )
}