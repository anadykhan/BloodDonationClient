import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <ul className="flex gap-10">
        <li><Link to='/registration'>Registraion</Link></li>
        <li>
          {
            user ? <button className="btn" onClick={handleSignOut}>Sign Out</button> : <Link to='/login'>Sign In</Link>
          }
        </li>
        <li>
          {
            user ? <Link to='/dashboard'>Dashboard</Link> : ""
          }
        </li>

      </ul>
    </div>
  )
}
export default Navbar