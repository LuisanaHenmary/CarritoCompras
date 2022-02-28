import styled from "styled-components"

const Details = styled.div`
    background-color:#fff;
    position:absolute;
    margin-top:30;
    box-shadow:1px 5px 5px rgb(0,0,0,0.3);
    border-radius: 5px;
    width:110px;
    right:50;
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
    padding:25px 20px;
    border-bottom:solid 1px #AAA;
`

const CarDetails = ({car}) =>{
    return(
        <Details>
            <List>
                {car.map(c=>
                <Product key={c.producto}>
                    {`${c.producto} ${c.cantidad}`}
                </Product>
                )}
            </List>
        </Details>
    )
}

export default CarDetails