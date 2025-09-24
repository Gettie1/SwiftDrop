import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex  flex-row gap-2 bg-white text-black justify-between">
      {/* <nav className="flex flex-row justify-between"> */}
        <div className="flex flex-row gap-4">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        
        </div>
        <div className="px-2 font-bold">
          <Link to="/about">About</Link>
        </div>
        </div>
        <div className="flex flex-row gap-4">
        <div className="px-2 font-bold">
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/login">Log In</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/register">Register</Link>
        </div>
        </div>
      {/* </nav> */}
    </header>
  )
}
