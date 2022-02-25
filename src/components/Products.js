import styled from "styled-components"
import Product from "./Product"

const Prod = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`

const Products = ({products}) =>{
    return(
        <Prod>
            {products.map(pr=><Product key={pr.name} product={pr} />)}
        </Prod>
    )
}

export default Products