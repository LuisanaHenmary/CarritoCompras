import styled from 'styled-components'
import Layout from './components/Layout';

const Parr = styled.p`
  color:red;
`

const App = () => {
  return (
    <>
      <Layout>
        <Parr>Comenzando ...</Parr>
      </Layout>

    </>
  );
}

export default App;
