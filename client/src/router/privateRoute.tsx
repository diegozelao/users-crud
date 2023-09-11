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
  // const isLoggedIn = false
  console.log(isLoggedIn, location, navigate)
  return (
    <Route path={url} element={
      isLoggedIn ? children : <Navigate to="/" replace />
    } />

  )
}