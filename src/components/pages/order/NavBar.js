import styled from "styled-components"
import NavBarRightSide from "./NavBarRightSide"
import Logo from "../../reusable-ui/Logo"

export default function NavBar( { username } ) {
    return (
    <NavBarStyled>
        <Logo/>
        < NavBarRightSide username={username} />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
    height: 10vh;
    background: blue;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`
