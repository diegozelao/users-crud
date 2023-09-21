import AuthLogin from "@/components/Auth/AuthLogin"
import AuthRegister from "@/components/Auth/AuthRegister"
import { useAuthentication } from '../hooks/useAuthentication'
import '@/styles/pages/login.css'


interface Props {
  loggedIn: () => void
}
export default function Login({loggedIn}: Props) {
  const {isRegister, toggleAuthPage} = useAuthentication()
  console.log('login', loggedIn)

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