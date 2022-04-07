import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" className="logo" />
      </div>
      <ul>
        {['home', 'about', 'work', 'skills'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
