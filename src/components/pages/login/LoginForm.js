import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  // Déclarations du state
  const [user, setUser] = useState("")
  const navigate = useNavigate()

  // Comportements
  const handleChange = (event) => {
    setUser(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      setUser("")
      navigate("order/" + user)
  }

  // Affichage
  return (
  <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h3>Connectez-vous</h3>
        <input type="text" placeholder='Entrez votre prénom...' value={user} onChange={handleChange} required />
        <input type="submit" value="Accédez à votre espace" />
      </form>
  </div>
)
}