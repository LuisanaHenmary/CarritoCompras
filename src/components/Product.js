import styled from "styled-components";

const Card = styled.div`
    border:solid 1px #eee;
    box-shadow:0 5px 5px rgb(0,0,0,0.1);
    width:30%;
    border-radius:5px;
    margin:20px;
    align-items: center;
`

const Button = styled.button`
    background-color:black;
    color:white;
    padding:15px 20px;
    border:none;
    border-radius:5px;
    cursor:pointer;
    width:100%;
    font-size:20px;
`

const Image = styled.img`
    width:100%;
`

const Name = styled.h2`
    background-color:black;
    color:white;
    text-align:center;
    padding: 10px;
`

const Product = ({ product,event}) => {
    return (
        <Card>
            <Name>{product.name}</Name>
            <Image alt={product.name} src={product.img} />
            <Button 
                type="button"
                onClick={()=>event(product)}
            >
                Buy for {product.price} $
            </Button>
        </Card>
    )
}

export default Product