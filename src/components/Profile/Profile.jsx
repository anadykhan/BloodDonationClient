import { Avatar } from "@mui/material"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Profile = () => {

    const {user, loading} = useContext(AuthContext)
    
    if(loading){
      return "Loading"
    }

    console.log(user)

    
  return (
    <div>
        <div>
              <Avatar alt="Remy Sharp" src="" />
        </div>
        <div>
          <h1>{user.email}</h1>
        </div>
    </div>
  )
}
export default Profile