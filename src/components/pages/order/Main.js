import styled from "styled-components"
import { theme } from "../../../theme"

export default function Main() {
  return (
    <MainStyled className="main" />
  )
}

const MainStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`
