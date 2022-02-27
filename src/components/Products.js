import styled from "styled-components"
import Product from "./Product"

const Prod = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`

const Products = ({ products, addToCar }) => {
    return (
        <Prod>
            {products.map(pr => <Product
                key={pr.name}
                product={pr}
                event={addToCar}
            />
            )}
        </Prod>
    )
}

export default Products