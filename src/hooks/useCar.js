import { useState } from "react";

const useCar = (initial_state) =>{

    const [carBuy,setCar] = useState(initial_state.car)
  //  const [display,setDisplay] = useState(initial_state.carDisplay)
  
    const setStock = (product) =>{

        const nam = product.target.name
        let newcar;

        if(carBuy.find(x=>x.producto===nam)){
             newcar = carBuy.map(x=>x.producto === nam
				?({

					...x,
					cantidad:x.cantidad+1
				})
				:x)
            
        }else{
             newcar = carBuy.concat({producto:nam, cantidad:1,})
        }

        setCar(newcar)

    }
/*
    const setBool = () =>{

    }*/



    return [carBuy,setStock]

}

export default useCar