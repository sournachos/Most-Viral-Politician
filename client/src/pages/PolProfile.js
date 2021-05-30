import React from "react"
import { Card } from "react-bootstrap"
//import { useAuth } from "../contexts/AuthContext"
//import { useHistory } from "react-router-dom"

export default function PolPRofile() {
  //const [error, setError] = useState("")
  //const { currentUser, logout } = useAuth()
  //const history = useHistory()

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/home")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }

  return (
    <>
      <Card className="w-25 mx-2 my-4">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email:</strong>
        </Card.Body>
      </Card>
      <Card className="w-75 mx-2 my-4">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email: fasgagafgafga</strong> 
        </Card.Body>
      </Card>
      <Card className="w-100 mx-2 mb-2">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email: sthsrjrjhjdhfj</strong> 
        </Card.Body>
      </Card>

    </>
  )
}