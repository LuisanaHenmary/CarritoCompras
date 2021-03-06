import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Products from './components/Products';
import useCar from './hooks/useCar';

const App = () => {

  const products = [
    { name: 'tomate', price: 1500, img: '/productos/tomate.jpg' },
    { name: 'lechuga', price: 2500, img: "/productos/lechuga.jpg" },
    { name: 'arvejas', price: 500, img: "/productos/arvejas.jpg" },
  ]

const [carBuy,setStock,display,setBool] = useCar({ car: [], carDisplay: false, })

  return (
    <div>
      <NavBar
      carBuy={carBuy}
      displayCar={display}
      setDisplay={setBool}
      />
      <Layout>
        <Products
          addToCar={setStock}
          products={products}
        />
      </Layout>

    </div>
  );
}

export default App;
