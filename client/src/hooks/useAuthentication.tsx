import { useEffect } from "react"
import { useState } from "react"


export function useAuthentication() {
  const [isRegister , setIsRegister] = useState(false)
  const toggleAuthPage = () => {
    setIsRegister(!isRegister)
  }

  useEffect(() => {

  }, [isRegister])

  return {isRegister, toggleAuthPage}
}