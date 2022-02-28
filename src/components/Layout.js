import styled from "styled-components"

const LayoutBase = styled.div`
    background-color:white;
    color:black;
    align-items: center;
    display: flex;
    flex-direction:column;    
` 

const Container = styled.div`
    width:1200px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    padding:80px;
`
const Layout = ({children}) =>{
    return(
        <LayoutBase>
            <Container>
                {children}
            </Container>
        </LayoutBase>
    )
}

export default Layout