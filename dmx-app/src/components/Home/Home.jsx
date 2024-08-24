import React from "react";
import logo from "../../assets/logo.png";
import DMX from "../../assets/What is DMX.png";
import DMX2 from "../../assets/What is dmx2.png";
import Upcoming from "../../assets/Upcoming projects.png";
import Team from "../../assets/Our team.png";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="spinning-background">
        </div>
        <div className="container-1">
            <img src={logo} alt="" />
            <div className="logo-line"></div>
            <h2>Revolutionize the Future with DMX and</h2>
            <h3>Witness a New Evolution of Intelligence</h3>
          </div>
      </section>

      <section className="what-is-dmx">
        <img src={DMX} alt="What is dmx" />
        <div className="content">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet. Qui cumque laborum est beatae corrupti
              a rerum temporibus et architecto libero vel quis asperiores. Et
              maiores aliquid nam aliquam consequatur eum dolore maxime.
            </p>
          </div>
          <div className="image">
            <img src="coding-image.png" alt="Coding Illustration" />
          </div>
        </div>
      </section>

      <section className="what-is-dmx-2">
        <img src={DMX2} alt="What is dmx" />
        <div className="content">
          <div className="image">
            <img src="server-image.png" alt="Server Illustration" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet. Qui cumque laborum est beatae corrupti
              a rerum temporibus et architecto libero vel quis asperiores. Et
              maiores aliquid nam aliquam consequatur eum dolore maxime.
            </p>
          </div>
        </div>
      </section>

      <section className="events-section">
        <img src={Upcoming} alt="What is dmx" />
        <div className="container1">
          <div className="event-card">
            <h3>EVENT 1 - Blockchain</h3>
            <p>
              Services are geared to the purchasing, transactional, and
              fulfillment needs of event attendees, such as the buying of food
              and drink without the need to stand in long lines; event promotion
              programs (free tickets to future events, etc.), as well as
              purchasing event memorabilia and souvenirs.
            </p>
          </div>
          <div className="event-card1">
            <h3>EVENT 1 - Blockchain</h3>
            <p>
              Services are geared to the purchasing, transactional, and
              fulfillment needs of event attendees, such as the buying of food
              and drink without the need to stand in long lines; event promotion
              programs (free tickets to future events, etc.), as well as
              purchasing event memorabilia and souvenirs.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <img className="img-team" src={Team} alt="Our Team" />
        <div className="team-cards">
          <div className="team-card">
            <img className="imgn" src={image} alt="Team Member" />
            <p className="name">Name</p>
          </div>
          <div className="team-card">
            <img className="imgn" src={image} alt="Team Member" />
            <p className="name">Name</p>
          </div>
          <div className="team-card">
            <img className="imgn" src={image} alt="Team Member" />
            <p className="name">Name</p>
          </div>
        </div>
        <button className="more-button">More</button>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-section logo" id="footer-section-logo">
            <img src={logo} alt="logo" />
            <p>
              Vedant ipsum dolor sit amet, consectetur adipiscing amet,
              consectetur adiping fringilla in in mollis Etiam eleifend.
            </p>
            <div className="social-icons">
              <Link href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="footer-section links">
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Management</Link>
              </li>
              <li>
                <Link href="#">News & Event</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section find-us">
            <h4>Find Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipising.</p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +234 805 028 1255
              <br /> +234 907 228 0656
            </p>
          </div>
          <div className="footer-section contact-us">
            <h4>Contact us</h4>
            <form>
              <input type="text" placeholder="Lorem ipsum" />
              <input type="text" placeholder="Lorem ipsum" />
              <textarea placeholder="Lorem ipsum dolor..."></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright AI-IT © 2022. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
