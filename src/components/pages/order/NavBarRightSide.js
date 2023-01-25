import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavBarRightSide({username}) {
  return (
    <NavBarRightSideStylde>
        right
        <h1>Bienvenue {username} !</h1>
        <Link to="/">
            <button>Déconnexion</button>
        </Link>
    </NavBarRightSideStylde>
  )
}

const NavBarRightSideStylde = styled.div`
    background: purple;
`
