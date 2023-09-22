import AuthServices from './authServices'
import { apiInstance } from './apiInstance';

const { AuthLoginAction, AuthRegisterAction } = AuthServices



interface AuthLoginProps {
  username: string
  password: string
}
interface AuthRegisterProps {
  username: string
  password: string
  email: string
  name: string
}

const loginAction = async (data: AuthLoginProps) => {
  const logged = await AuthLoginAction(apiInstance, data)
  return logged
}

const registerAction = async (data: AuthRegisterProps) => {
  const register = await AuthRegisterAction(apiInstance, data)
  return register
}


const requestServices = {
  loginAction,
  registerAction,
}

export default requestServices
