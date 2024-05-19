// pages/Index.js
import Header from '../components/Header';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Bienvenido a la Aplicación</h2>
        <p>Por favor, <Link href="/login"><a>inicia sesión</a></Link> o <Link href="/register"><a>regístrate</a></Link>.</p>
      </main>
    </div>
  );
};

export default IndexPage;
