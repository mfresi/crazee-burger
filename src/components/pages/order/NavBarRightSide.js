import styled from "styled-components"
import Profile from "./Profile"

export default function NavBarRightSide({username}) {
  return (
    <NavBarRightSideStylde>
      {/* <div className="admin-button">Admin button</div> */}
      <Profile username={username}/>
    </NavBarRightSideStylde>
  )
}

const NavBarRightSideStylde = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    // .admin-button {
    //   background: lightblue;
    // }
`