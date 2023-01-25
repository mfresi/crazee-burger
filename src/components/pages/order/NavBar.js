import styled from "styled-components"
import NavBarRightSide from "./NavBarRightSide"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme"

export default function NavBar( { username } ) {
    return (
    <NavBarStyled>
        <Logo className=".logo-navbar" onclick={ () => {window.location.reload() } } />
        <NavBarRightSide username={username} />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
    height: 10vh;
    background: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};

    .logo-navbar {
        cursor: pointer;
    }
`