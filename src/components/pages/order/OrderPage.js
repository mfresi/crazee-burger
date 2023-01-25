import styled from "styled-components"
import Main from "./Main"
import NavBar from "./NavBar"
import { useParams } from "react-router-dom"

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
  backgrouond: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`