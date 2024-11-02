import { Outlet } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const content = (
    <>
      <Header />

      <Container className="text-text-secondary px-14">
        <Outlet />
      </Container>

      <Footer />
    </>
  );

  return content;
}

export default App;
