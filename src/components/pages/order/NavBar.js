import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavBar( { username } ) {
    return (
    <NavBarStyled>
          <h1>Bienvenue {username} !</h1>
          <Link to="/">
              <button>Déconnexion</button>
          </Link>
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
    height: 10vh;
    background: blue;
`
