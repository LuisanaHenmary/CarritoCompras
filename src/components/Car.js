import styled from "styled-components"

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
//,display,changeDisplay
const Car = ({car}) =>{
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
            <Button>
               car
            </Button>
        </div>

    )
}

export default Car