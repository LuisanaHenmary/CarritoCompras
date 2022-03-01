import styled from "styled-components"
import Car from "./Car"

const Nav = styled.nav`
    background-color:black;
    display:flex;
    flex-direction:row;
    align-items:center;
    height:80px;
    justify-content:space-between;
    position:relative;
    padding:0 50px;
    box-shadow:0 2px 3px rgb(0,0,0,0.1);

`

const Logo = styled.div`
    font-weight:700;
    font-size:2rem;
    background-color:#fff;
    padding:10px;
    border-radius:300px;
`

const NavBar = ({ carBuy, displayCar, setDisplay }) => {
    return (
        <Nav>
            <Logo >🍅Shop</Logo>
            <Car
                car={carBuy}
                display={displayCar}
                changeDisplay={setDisplay}
            />
        </Nav>
    )
}

export default NavBar