import styled from "styled-components"

const Details = styled.div`
    background-color:#fff;
    position:absolute;
    margin-top:30;
    box-shadow:1px 5px 5px rgb(0,0,0,0.3);
    border-radius: 5px;
    width:200px;
    right:5px;
`

const List = styled.ul`
    margin:0;
    padding:0;
`

const Product = styled.li`
    list-style-type:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 10px;
    border-bottom:solid 1px #AAA;
`

const Image = styled.img`
    width:50px;
    height:32px;
`

const CarDetails = ({car}) =>{
    return(
        <Details>
            <List>
                {car.map(c=>
                <Product key={c.name}>
                    <Image src={c.img} />
                    {`${c.name} ${c.cantidad} ${c.cantidad*c.price}$`}
                </Product>
                )}
            </List>
        </Details>
    )
}

export default CarDetails