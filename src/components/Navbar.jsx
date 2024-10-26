import PropTypes from "prop-types";
import logo from '../assets/logo.png';
import coin from '../assets/coin.png'
const Navbar = ({ credit }) => {
  return (
    <div>
      <div className="navbar bg-base-100 py-8">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-end">
          <ul className="flex gap-8 px-2 text-[#131313B3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <button className="btn font-bold">{credit} Coin <img src={coin} alt="" /></button>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  credit: PropTypes.number
}
export default Navbar;