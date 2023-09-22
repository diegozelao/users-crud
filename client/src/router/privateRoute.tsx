import useAuthentication from '@/hooks/useAuthentication'
import { 
  Route,
  useLocation,
  useNavigate,
  Navigate
} from 'react-router-dom'

interface Props {
  children: React.ReactNode
  url: string
  isLoggedIn: boolean
}
export default function PrivateRoute({ url, children, isLoggedIn }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const {isLogged} = useAuthentication()
  // const isLoggedIn = false
  console.log(isLoggedIn, location, navigate)
  return (
    <Route path={url} element={
      isLogged ? children : <Navigate to="/" replace />
    } />

  )
}