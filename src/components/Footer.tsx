import { Link } from 'react-router-dom';

import Container from './Container';

import logoImg from '../assets/logo.png';

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <Container className="text-sm text-text-secondary items-center py-4 flex justify-between">
        <Link to="/">
          <img src={logoImg} alt="Logo" className="h-6" />{' '}
        </Link>

        <p>&copy; {year} React Shop. All rights reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
