import AuthLogin from "@/components/Auth/AuthLogin"
import AuthRegister from "@/components/Auth/AuthRegister"
import { useToggleAuthPage } from '../hooks/useToggleAuthPage'
import '@/styles/pages/login.css'


interface Props {
  isLogged: boolean
}
export default function Login({isLogged}: Props) {
  const {isRegister, toggleAuthPage} = useToggleAuthPage()
  console.log('login', isLogged)

  // const handleRegister = useCallback(() => {
  //   setIsRegister(true)
  // })


  return (
    <div className="initBody">
      <div className="containerFlexFull flexCenter1Container">
        <h1>BACKGROUND...</h1>
      </div>  
      <div className="containerFlexFull">
        {isRegister ? 
          <AuthRegister toggleAuthPage={toggleAuthPage} /> : 
          <AuthLogin toggleAuthPage={toggleAuthPage} />}
      </div>
    </div>
  )
}