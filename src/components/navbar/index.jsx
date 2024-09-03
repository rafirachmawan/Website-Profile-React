import "./style.css";

function index() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">Rafi Rachmawan </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="portofoilo">Portofolio</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default index;
