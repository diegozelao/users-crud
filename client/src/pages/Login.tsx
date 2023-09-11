

interface Props {
  loggedIn: () => void
}
export default function Login({loggedIn}: Props) {

  console.log('login', loggedIn)


  return (
    <div className="initBody">
      <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 bg-cyan-800">
        <div className="containerFlexFull flexCenter1Container">
          <h1>BACKGROUND...</h1>
        </div>
        <div className="containerFlexFull">
          <div className="containerLogin">
            <div className="w-full p-3">
              <h2 className="text-4xl font-bold text-white text-center p-8">Login</h2>
              <div className="flex flex-col gap-5 p-3">
                <input className="py-2 rounded-lg" type="text" placeholder="Username" />
                <input className="py-2 rounded-lg" type="password" placeholder="Password" />
              </div>
              <div className="flex flex-col p-2">
                <button className="btnContainerLogin">Login</button>
              </div>
              <div className="flex flex-row p-2 gap-2">
                <button className="btnContainerLogin bg-blue-800 hover:bg-blue-500">Register</button>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}