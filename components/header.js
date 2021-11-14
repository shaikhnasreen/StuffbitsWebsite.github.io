class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

	<style>
		header {
		  height: 70px;
		  z-index: 997;
		  transition: all 0.5s ease-in-out;
		  background: #fff;
		  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
		}
		header .logo h1 {
		  font-size: 28px;
		  float : right;
		  padding: 10px;
		  margin: 30px 0 0 0;
		  line-height: 0;
		  font-weight: 600;
		  letter-spacing: 1px;
		}
		header .logo h1 a, header .logo h1 a:hover {
		  color: #3c4133;
		  text-decoration: none;
		}

		header .logo img {

		  margin: 0;
		  padding: 0;
		  margin: 0;
		  max-height: 80px;
		}

		/*--------------------------------------------------------------
		# Navigation Menu
		--------------------------------------------------------------*/
		/**
		* Desktop Navigation
		*/
		.navbar {
		  padding: 0;
		}
		.navbar ul {
		  margin: 0;
		  padding: 0;
		  display: flex;
		  list-style: none;
		  align-items: center;
		}
		.navbar li {
		  position: relative;
		}
		.navbar a, .navbar a:focus {
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  padding: 10px 0 10px 30px;
		  font-family: "Raleway", sans-serif;
		  font-size: 15px;
		  font-weight: 600;
		  color: #565e49;
		  white-space: nowrap;
		  transition: 0.3s;
		}
		.navbar a i, .navbar a:focus i {
		  font-size: 12px;
		  line-height: 0;
		  margin-left: 5px;
		}
		.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
		  color: rgb(255, 161, 63);
		}
		.navbar .getstarted, .navbar .getstarted:focus {
		  background: rgb(255, 161, 63);
		  padding: 8px 25px;
		  margin-left: 30px;
		  border-radius: 50px;
		  color: #fff;
		}
		.navbar .getstarted:hover, .navbar .getstarted:focus:hover {
		  color: #fff;
		  background: rgb(255, 128, 64);
		}
		.navbar .dropdown ul {
		  display: block;
		  position: absolute;
		  left: 28px;
		  top: calc(100% + 30px);
		  margin: 0;
		  padding: 10px 0;
		  z-index: 99;
		  opacity: 0;
		  visibility: hidden;
		  background: #fff;
		  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
		  transition: 0.3s;
		}
		.navbar .dropdown ul li {
		  min-width: 200px;
		}
		.navbar .dropdown ul a {
		  padding: 10px 20px;
		  font-size: 15px;
		  text-transform: none;
		}
		.navbar .dropdown ul a i {
		  font-size: 12px;
		}
		.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
		  color: rgb(255, 161, 63);
		}
		.navbar .dropdown:hover > ul {
		  opacity: 1;
		  top: 100%;
		  visibility: visible;
		}
		.navbar .dropdown .dropdown ul {
		  top: 0;
		  left: calc(100% - 30px);
		  visibility: hidden;
		}
		.navbar .dropdown .dropdown:hover > ul {
		  opacity: 1;
		  top: 0;
		  left: 100%;
		  visibility: visible;
		}
		@media (max-width: 1366px) {
		  .navbar .dropdown .dropdown ul {
		    left: -90%;
		  }
		  .navbar .dropdown .dropdown:hover > ul {
		    left: -100%;
		  }
		}

		/**
		* Mobile Navigation
		*/
		.mobile-nav-toggle {
		  color: #3c4133;
		  font-size: 28px;
		  cursor: pointer;
		  display: none;
		  line-height: 0;
		  transition: 0.5s;
		}
		.mobile-nav-toggle.bi-x {
		  color: #fff;
		}

		@media (max-width: 991px) {
		  .mobile-nav-toggle {
		    display: block;
		  }

		  .navbar ul {
		    display: none;
		  }
		}
		.navbar-mobile {
		  position: fixed;
		  overflow: hidden;
		  top: 0;
		  right: 0;
		  left: 0;
		  bottom: 0;
		  background: rgba(34, 36, 29, 0.9);
		  transition: 0.3s;
		  z-index: 999;
		}
		.navbar-mobile .mobile-nav-toggle {
		  position: absolute;
		  top: 15px;
		  right: 15px;
		}
		.navbar-mobile ul {
		  display: block;
		  position: absolute;
		  top: 55px;
		  right: 15px;
		  bottom: 15px;
		  left: 15px;
		  padding: 10px 0;
		  background-color: #fff;
		  overflow-y: auto;
		  transition: 0.3s;
		}
		.navbar-mobile a, .navbar-mobile a:focus {
		  padding: 10px 20px;
		  font-size: 15px;
		  color: #3c4133;
		}
		.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
		  color: rgb(255, 161, 63);
		}
		.navbar-mobile .getstarted, .navbar-mobile .getstarted:focus {
		  margin: 15px;
		}
		.navbar-mobile .dropdown ul {
		  position: static;
		  display: none;
		  margin: 10px 20px;
		  padding: 10px 0;
		  z-index: 99;
		  opacity: 1;
		  visibility: visible;
		  background: #fff;
		  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
		}
		.navbar-mobile .dropdown ul li {
		  min-width: 200px;
		}
		.navbar-mobile .dropdown ul a {
		  padding: 10px 20px;
		}
		.navbar-mobile .dropdown ul a i {
		  font-size: 12px;
		}
		.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
		  color: rgb(255, 161, 63);
		}
		.navbar-mobile .dropdown > .dropdown-active {
		  display: block;
		}

      </style>

      <header>
         <div class="container d-flex align-items-center justify-content-between">

		    <div class="logo" >
		      <h1 class="text-light"><a href="index.html">Stuffbits</a></h1>
		      <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></img></a>
		    </div>

 			<nav id="navbar" class="navbar">
		      <ul>
		        <li><a class="active" href="index.html">Home</a></li>
		        <li><a href="about.html">About Us</a></li>
		        <li class="dropdown"><a href="#"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
		          <ul>
		            <li><a href="services.html#Hardware">Embedded Hardware</a></li>
		            <li><a href="services.html#Firmware">Embedded Firmware</a></li>
		            <li><a href="services.html#Layout">PCB Design</a></li>
		            <li><a href="services.html#Assembly">PCB Assembly</a></li>
		            <li><a href="services.html#Enclosure">Enclosure Design</a></li>
		            <li><a href="services.html#FrontEnd">FrontEnd Design</a></li>
		          </ul>
		        </li>

		        <li class="dropdown"><a href="#"><span>Products</span> <i class="bi bi-chevron-down"></i></a>
		          <ul>
		            <li><a href="products.html#SMPS">SMPS</a></li>
		            <li><a href="products.html#Proto">Megawin Proto</a></li>
		            <li><a href="products.html#TFT">TFT Sheild</a></li>
		            <li><a href="products.html#Timer">Universal Timer</a></li>
		          </ul>
		        </li>

		        <li><a href="portfolio.html">Portfolio</a></li>
		        <li><a href="blog.html">Blog</a></li>
		        <li><a href="contact.html">Contact</a></li>
		      </ul>
		      <i class="bi bi-list mobile-nav-toggle"></i>
		    </nav>

		  </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
