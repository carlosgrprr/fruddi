// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Inicio</a></Link></li>
        <li><Link href="/recipes"><a>Recetas</a></Link></li>
        <li><Link href="/menu"><a>Menú</a></Link></li>
        <li><Link href="/orders"><a>Órdenes</a></Link></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navbar;
