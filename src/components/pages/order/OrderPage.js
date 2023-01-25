import styled from "styled-components"
import Main from "./Main"
import NavBar from "./NavBar"

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar />
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
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`