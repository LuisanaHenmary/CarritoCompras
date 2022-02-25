import styled from "styled-components"

const Nav = styled.nav`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:100px;
    justify-content:space-between;
    position:relative;
    padding:0 50px;
    box-shadow:0 2px 3px rgb(0,0,0,0.1);

`

const Logo = styled.div`
    font-weight:700;
    font-size:2rem;
`

const NavBar = () =>{
    return(
        <Nav>
            <Logo >Shop</Logo>
        </Nav>
    )
}

export default NavBar