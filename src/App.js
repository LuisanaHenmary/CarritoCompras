import styled from 'styled-components'
import Layout from './components/Layout';
import NavBar from './components/NavBar';

const Parr = styled.p`
  color:red;
`

const App = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <Parr>Comenzando ...</Parr>
      </Layout>

    </>
  );
}

export default App;
