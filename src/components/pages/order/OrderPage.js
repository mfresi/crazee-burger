import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function OrderPage() {

  const {user} = useParams()
  
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          <h1>Bienvenue {user} !</h1>
          <Link to="/">
              <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main">
          Main
        </div>
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

    .navbar {
      height: 10vh;
      background: blue;
    }

    .main {
      flex: 1;
      background: green;
    }
  }
`