import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="name">
        <h4 className="nav_link">Shital</h4>
      </div>
      <div className="options">
        <div className="optionlist">
          <h4><a href="#home" className="nav_link">Home</a></h4>
          <h4><a href="#about" className="nav_link">About</a></h4>
          <h4><a href="#skills" className="nav_link">Skills</a></h4>
          <h4><a href="#qualification" className="nav_link">Qualifications</a></h4>
          <h4><a href="#projects-container" className="nav_link">Projects</a></h4>
          <h4><a href="#contact" className="nav_link">Contact Me</a></h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
