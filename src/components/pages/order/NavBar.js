import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavBar( { username } ) {
    return (
    <NavBarStyled>
        <div className="left-side">
            left
        </div>
        <div className="right-side">
            right
            <h1>Bienvenue {username} !</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
    height: 10vh;
    background: blue;
    display: flex;
    justify-content: space-between;

    .left-side {
        background: pink;
    }

    .right-side {
        background: purple;
    }
`
