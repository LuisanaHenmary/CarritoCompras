import styled from "styled-components"
import CarDetails from "./CarDetails"

const Bubble = styled.span`
    position:relative;
    left:12;
    top:20;
`
const Button = styled.button`
    background-color:#359A2C;
    color:white;
    border:none;
    padding:15px;
    border-radius:15px;
    cursor:pointer;
`


const BubbleAlert = styled.span`
    background-color:#E9725A;
    border-radius:15px;
    color:#fff;
    padding:2px 10px;
    font-size:0.9rem;
    width:15px;

`

const Car = ({car,display,changeDisplay}) =>{
    const cantidad = car.reduce((acc,el) => acc + el.cantidad,0)
    
    const getNumber=()=>{
		if (!cantidad){ return ' '}
		return cantidad > 9 ? '9+': cantidad
	}

    return(
        <div>
            <Bubble>
              {cantidad !== 0 ? <BubbleAlert>{getNumber()}</BubbleAlert>:null}
            </Bubble>
            <Button type="button" onClick={changeDisplay}>
               car
            </Button>
            {display?<CarDetails car={car} />:null}
        </div>

    )
}

export default Car