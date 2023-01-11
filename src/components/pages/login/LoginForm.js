import React, { useState } from 'react'

export default function LoginForm() {
  // Déclarations du state
  const [user, setUser] = useState("")

  // Comportements
  const handleChange = (event) => {
    setUser(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      alert("Bonjour " + user)
      setUser("")
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
