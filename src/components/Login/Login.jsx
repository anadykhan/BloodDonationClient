import { Button, TextField } from "@mui/material"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        const newForm = { email, password}

        signIn(email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

    }
  return (
    <div>
          <form onSubmit={handleSubmit} className="w-[30rem]">
              <TextField
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
              />
              <TextField
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"

              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
              </Button>
          </form>
    </div>
  )
}
export default Login