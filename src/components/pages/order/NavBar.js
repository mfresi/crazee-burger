import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function NavBar() {
    
    const {user} = useParams()
    
    return (
    <NavBarStyled>
          <h1>Bienvenue {user} !</h1>
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
