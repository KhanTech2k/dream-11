import PropTypes from "prop-types";
const Navbar = ({credit}) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
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
          <button className="btn">{credit} coin <span></span></button>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes={
  credit: PropTypes.object
}
export default Navbar;