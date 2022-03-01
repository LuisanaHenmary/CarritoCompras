import { useState } from "react";

const useCar = (initial_state) => {

  const [carBuy, setCar] = useState(initial_state.car)
  const [display, setDisplay] = useState(initial_state.carDisplay)

  const setStock = (product) => {

    const nam = product.name
    let newcar;

    if (carBuy.find(x => x.name === nam)) {
      newcar = carBuy.map(x => x.name === nam
        ? ({

          ...x,
          cantidad: x.cantidad + 1
        })
        : x)

    } else {
      newcar = carBuy.concat({ ...product,cantidad:1, })
    }

    setCar(newcar)

  }

  const setBool = () => {
    setDisplay(!display)
  }

  return [carBuy, setStock, display, setBool]

}

export default useCar