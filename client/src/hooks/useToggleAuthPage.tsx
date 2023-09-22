import { removeAuthHeader } from "@/services/apiInstance"
import { useEffect } from "react"
import { useState } from "react"


export function useToggleAuthPage() {
  const [isRegister , setIsRegister] = useState(false)
  const toggleAuthPage = () => {
    setIsRegister(!isRegister)
  }

  useEffect(() => {
    if(isRegister){
      removeAuthHeader()
    }
  }, [isRegister])

  return {isRegister, toggleAuthPage}
}