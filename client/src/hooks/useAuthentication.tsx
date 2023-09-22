import { useEffect, useState } from "react"
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const isLoggedIn = atomWithStorage('isLoggedIn', false)

export const useAuthentication = () => {
  const [isLogged, setIsLogged] = useAtom(isLoggedIn)
  // const [isLogged, setIsLogged] = useState(false)

  const handleLogged = () => {
    setIsLogged(true)
  }

  useEffect(() => {
    
  }, [isLogged])

  return { isLogged,  handleLogged }
}

export default useAuthentication