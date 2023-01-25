import styled from "styled-components"
import Main from "./Main"
import NavBar from "./NavBar"
import { useParams } from "react-router-dom"
import { theme } from "../../../theme"

export default function OrderPage() {

  const { user } = useParams()

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={user} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 95%;
    display: flex;
    flex-direction: column;
    background: red;
    border-radius: ${theme.borderRadius.extraRound}
  }
`