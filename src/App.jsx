
function App() {

  return (

    <div className="index-page">

      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img src="img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle" />
        </div>

        <a href="index.html" className="logo d-flex align-items-center justify-content-center">

          <img src="img/logo.png" alt="" />
          <h1 className="sitename">Alex Smith</h1>
        </a>

        <div className="social-links text-center">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
            <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
            <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
            <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
            <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
            <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
          </ul>
        </nav>

      </header>

      <main className="main">

        {/* <!-- Hero Section --> */}
        <section id="hero" className="hero section dark-background">

          <img src="public/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <h2>Tsetsi Popova</h2>
            <p>I&apos;m <span className="typed" data-typed-items="Front-End Developer, Freelancer">Front-End Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
          </div>

        </section>

      </main>

      <footer id="footer" className="footer position-relative light-background">

        <div className="container">
          <div className="copyright text-center ">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>

      </footer>

    </div>

  )
}

export default App
