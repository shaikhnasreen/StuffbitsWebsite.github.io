 class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
	<style>

		footer {
		  background: #141611;
		  padding: 0 0 30px 0;
		  color: #fff;
		  font-size: 14px;
		}
		footer .footer-top {
		  background: #1c1f18;
		  padding: 60px 0 30px 0;
		}
		footer .footer-top .footer-info {
		  margin-bottom: 30px;
		}
		footer .footer-top .footer-info h3 {
		  font-size: 26px;
		  margin: 0 0 10px 0;
		  padding: 2px 0 2px 0;
		  line-height: 1;
		  font-weight: 600;
		  letter-spacing: 3px;
		  color: rgb(255, 128, 64);
		}
		footer .footer-top .footer-info p {
		  font-size: 14px;
		  line-height: 24px;
		  margin-bottom: 0;
		  font-family: "Raleway", sans-serif;
		  color: #fff;
		}
		footer .footer-top .social-links a {
		  display: inline-block;
		  background: #3c4133;
		  color: #fff;
		  line-height: 1;
		  margin-right: 4px;
		  border-radius: 50%;
		  text-align: center;
		  width: 36px;
		  height: 36px;
		  transition: 0.3s;
		  display: inline-flex;
		  align-items: center;
		  justify-content: center;
		}
		footer .footer-top .social-links a i {
		  line-height: 0;
		  font-size: 16px;
		}
		footer .footer-top .social-links a:hover {
		  background: rgb(255, 161, 63);
		  color: #fff;
		  text-decoration: none;
		}
		footer .footer-top h4 {
		  font-size: 14px;
		  font-weight: bold;
		  color: #fff;
		  text-transform: uppercase;
		  position: relative;
		  padding-bottom: 12px;
		}
		footer .footer-top h4::before, footer .footer-top h4::after {
		  content: "";
		  position: absolute;
		  left: 0;
		  bottom: 0;
		  height: 2px;
		}
		footer .footer-top h4::before {
		  right: 0;
		  background: #3c4133;
		}
		footer .footer-top h4::after {
		  background: rgb(255, 161, 63);
		  width: 60px;
		}
		footer .footer-top .footer-links {
		  margin-bottom: 30px;
		}
		footer .footer-top .footer-links ul {
		  list-style: none;
		  padding: 5px 0 0 0;
		  margin: 0;
		}
		footer .footer-top .footer-links ul li {
		  padding: 0 0 15px 0;
		}
		footer .footer-top .footer-links ul a {
		  color: #fff;
		  transition: 0.3s;
		}
		footer .footer-top .footer-links ul a:hover {
		  color: rgb(255, 161, 63);
		}
		footer .footer-top .footer-contact {
		  margin-bottom: 30px;
		}
		footer .footer-top .footer-contact p {
		  line-height: 26px;
		}
		footer .footer-top .footer-newsletter {
		  margin-bottom: 30px;
		}
		footer .footer-top .footer-newsletter input[type=email] {
		  border: 0;
		  padding: 6px 8px;
		  width: 65%;
		  border-radius: 4px 0 0 4px;
		}
		footer .footer-top .footer-newsletter input[type=submit] {
		  background: rgb(255, 161, 63);
		  border: 0;
		  border-radius: 0 4px 4px 0;
		  width: 35%;
		  padding: 6px 0;
		  text-align: center;
		  color: #fff;
		  transition: 0.3s;
		  cursor: pointer;
		}
		footer .footer-top .footer-newsletter input[type=submit]:hover {
		  background: rgb(234, 117, 0);
		}
		footer .copyright {
		  text-align: center;
		  padding-top: 30px;
		}
		footer .credits {
		  padding-top: 10px;
		  text-align: center;
		  font-size: 13px;
		  color: #fff;
		}
      </style>

      <footer>
       <div class="footer-top">
    	<div class="container">
      		<div class="row">

        <div class="col-lg-4 col-md-6 footer-info">
          <h3>About Us </h3>
          <p>We are service providers as well as manufacturers of Industrial Electronics Products.<br>
          A one-stop solution for all your Embedded Electronics needs.</p>
        </div>

        <div class="col-lg-2 col-md-6 footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#Hardware">Embedded Hardware</a></li>
            <li><a href="services.html#Firmware">Embedded Firmware</a></li>
            <li><a href="services.html#Layout">PCB Design</a></li>
            <li><a href="services.html#Assembly">PCB Assembly</a></li>
            <li><a href="services.html#Enclosure">Enclosure Design</a></li>
            <li><a href="services.html#FrontEnd">FrontEnd Design</a></li>
          </ul>
        </div>


        <div class="col-lg-2 col-md-6 footer-links">
          <h4>Company</h4>
          <ul>
      		<li><a href="index.html">Home</a></li>
        		<li><a href="index.html">About Us</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
        		<li><a href="blog.html">Blog</a></li>

          </ul>
        </div>


        <div class="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
           <strong>Address:</strong>
            A1-004, Shruti Park, <br>
            Dhokali Balkum Road <br>
            Thane West, 400607 <br>
            Maharashtra, India <br><br>
            <strong>Phone:</strong> +91 970216-8576<br>
            <strong>Email:</strong> kumar.sawant@stuffbits.in <br><br>
            <strong>Phone:</strong> +91 970236-4041<br>
            <strong>Email:</strong> nasreen.stuffbits@gmail.com <br>
          </p>

          <div class="social-links">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/stuffbits-technologies-llp" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>Stuffbits Technologies LLP - 2021 </span></strong>. All Rights Reserved
    </div>
    <div class="credits">

      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
