import styled from "styled-components";

const Card = styled.div`
border:solid 1px #eee;
box-shadow:0 5px 5px rgb(0,0,0,0.1);
width:30%;
padding:10px 15px;
border-radius:5px;
`

const Image = styled.img`
    width:100%;
`

const Product = ({ product }) => {
    return (
        <Card>
            <Image alt={product.name} src={product.img} />
            <h3>{product.name}</h3>
            <h3>{product.price} $</h3>
        </Card>
    )
}

export default Product