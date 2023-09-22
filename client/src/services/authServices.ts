import { AxiosInstance } from "axios";
import { updateApiInstance } from "./apiInstance";

// const { setJwtAuthPage } = useAuthentication()


interface AuthLoginProps {
  username: string
  password: string
}
const login = (token: string) => {
  localStorage.setItem('token', token)
  updateApiInstance(token)
}

const AuthLoginAction = (http: AxiosInstance, data: AuthLoginProps) => {
  // const [token, setToken] = useAtom(JwtToken)
  
  return http.post(`/auth/login`, data)
    .then((res) => {
      const token = res.data.result.token
      login(token)
      return true
    }).catch((err) => {
      return { error: err.message}
    })
}

const AuthRegisterAction = (http: AxiosInstance, data: AuthLoginProps) => {
  
  return http.post(`/auth/register`, data)
    .then((res) => {
      console.log(res);
      
      const token = res.data.result.token
      login(token)
      return true
    }).catch((err) => {
      return { error: err.message}
    })

}


const AuthServices = {
  AuthLoginAction,
  AuthRegisterAction
}

export default AuthServices
