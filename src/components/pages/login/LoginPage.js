import LoginForm from "./LoginForm"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"

export default function LoginPage() {
    return <LoginPageStyled>
            <Logo className="logo-login-page"/>
            <LoginForm />
        </LoginPageStyled>
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ::before {
        content: "";
        background: url("/images/burger-and-fries-background.jpg");
        background-size: cover;
        background-position: center;
        
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .logo-login-page {
        transform: scale(2.5);
    }
`