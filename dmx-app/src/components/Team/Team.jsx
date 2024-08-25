import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import logo from '../../assets/logo.png'
import team from '../../assets/TeamCard1.png'

const Team = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreMarketing, setShowMoreMarketing] = useState(false);
  const [showMoreTechnical, setShowMoreTechnical] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Jenny Wilson', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Bessie Cooper', image: 'TeamCard1.png' },
    { name: 'Member 7', image: 'TeamCard1.png' },
    { name: 'Member 8', image: 'TeamCard1.png' },
    { name: 'Member 9', image: 'TeamCard1.png' },
  ]);

  const [marketingTeam, setMarketingTeam] = useState([
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Jenny Wilson', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Bessie Cooper', image: 'TeamCard1.png' },
    { name: 'Member 7', image: 'TeamCard1.png' },
  ]);

  const [technicalTeam, setTechnicalTeam] = useState([
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Jenny Wilson', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Guy Hawkins', image: 'TeamCard1.png' },
    { name: 'Bessie Cooper', image: 'TeamCard1.png' },
    { name: 'Member 7', image: 'TeamCard1.png' },
  ]);


  const handleMoreClick = () => {
    setShowMore(true);
    setTeamMembers([...teamMembers].slice(0, teamMembers.length));
  };
  const handlemarketingClick = () => {
    setShowMoreMarketing(true)
    setMarketingTeam([...marketingTeam].slice(0,marketingTeam.length))
  }
  const handletechnicalClick = () => {
    setShowMoreTechnical(true)
    setTechnicalTeam([...technicalTeam].slice(0,technicalTeam.length))
  }

  return (
    <><main>
          <section className="team-section-1">
              <h1>Our Team</h1>
              <p className="subheading">Our team members are ready to help our clients!</p>
              <p className="description">
                  Lorem ipsum dolor sit amet. Qui autem voluptatibus aut ipsum molestiae aut consequatur consectetur est sunt rerum et alias velit non modi suscipit ex quia voluptatem.
              </p>
          </section>

          <section className="profile-section">
              <div className="profile-container">
                  {showMore ? teamMembers.map((member, index) => (
                      <div key={index} className="profile-card">
                          <img src={team} alt={member.name} className="profile-image" />
                          <div className="profile-content">
                              <h3>{member.name}</h3>
                              <p>
                                  “Together, we challenge ourselves for a better tomorrow by meaningful designs that help live our best life and maintain lasting relevance.”
                              </p>
                          </div>
                      </div>
                  )) : teamMembers.slice(0, 6).map((member, index) => (
                      <div key={index} className="profile-card">
                          <img src={team} alt={member.name} className="profile-image" />
                          <div className="profile-content">
                              <h3>{member.name}</h3>
                              <p>
                                  “Together, we challenge ourselves for a better tomorrow by meaningful designs that help live our best life and maintain lasting relevance.”
                              </p>
                          </div>
                      </div>
                  ))}
                  {teamMembers.length > 6 && !showMore && (
                      <div className="overflow-dots">
                          <button className="more-button" onClick={handleMoreClick}>
                              More
                          </button>
                      </div>
                  )}
              </div>
          </section>

          <section id="team-section">
              <div className="team-section-1">
                  <h2 className="team-title">MARKETING TEAM</h2>
                  <p className="team-description">
                      We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
                  </p>
                  <div className="team-grid">
                      {showMoreMarketing ? marketingTeam.map((member, index) => (
                          <div key={index} className="team-member">
                              <img src={team} alt={member.name} />
                              <div className="member-name">{member.name}</div>
                          </div>
                      )) : marketingTeam.slice(0, 6).map((member, index) => (
                          <div key={index} className="team-member">
                              <img src={team} alt={member.name} />
                              <div className="member-name">{member.name}</div>
                          </div>
                      ))}
                      {marketingTeam.length > 6 && !showMoreMarketing && (
                          <div className="overflow-dots">
                              <button className="more-button-1" onClick={handlemarketingClick}>
                                  More
                              </button>
                          </div>
                      )}
                  </div>
              </div>

              <div className="team-section-1">
                  <h2 className="team-title">TECHNICAL TEAM</h2>
                  <p className="team-description">
                      We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
                  </p>
                  <div className="team-grid">
                      {showMoreTechnical ? technicalTeam.map((member, index) => (
                          <div key={index} className="team-member">
                              <img src={team} alt={member.name} />
                              <div className="member-name">{member.name}</div>
                          </div>
                      )) : technicalTeam.slice(0, 6).map((member, index) => (
                          <div key={index} className="team-member">
                              <img src={team} alt={member.name} />
                              <div className="member-name">{member.name}</div>
                          </div>
                      ))}
                      {technicalTeam.length > 6 && !showMoreTechnical && (
                          <div className="overflow-dots">
                              <button className="more-button-1" onClick={handletechnicalClick}>
                                  More
                              </button>
                          </div>
                      )}
                  </div>

              </div>
          </section>
      </main>
        <footer>
                  <div class="footer-container">
                      <div class="footer-section logo" id="footer-section-logo">
                          <img className='img' src={logo} alt="Logo" />
                          <p>
                              Vedant ipsum dolor sit amet, consectetur adipiscing amet, consectetur adiping fringilla in in mollis Etiam eleifend.
                          </p>
                          <div class="social-icons">
                              <Link><i class="fa-brands fa-facebook-f"></i></Link>
                              <Link><i class="fa-brands fa-whatsapp"></i></Link>
                              <Link><i class="fa-brands fa-instagram"></i></Link>
                              <Link><i class="fa-brands fa-twitter"></i></Link>
                          </div>
                      </div>
                      <div class="footer-section links">
                          <h4>Links</h4>
                          <ul>
                              <li><Link>Home</Link></li>
                              <li><Link>About us</Link></li>
                              <li><Link>Management</Link></li>
                              <li><Link>News & Event</Link></li>
                              <li><Link>Gallery</Link></li>
                              <li><Link>Contact us</Link></li>
                          </ul>
                      </div>
                      <div class="footer-section find-us">
                          <h4>Find Us</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipising.</p>
                          <p><i class="fa-solid fa-envelope"></i> info@gmail.com</p>
                          <p><i class="fa-solid fa-phone"></i> +234 805 028 1255<br />+234 907 228 0656</p>
                      </div>
                      <div class="footer-section contact-us">
                          <h4>Contact us</h4>
                          <form>
                              <input type="text" placeholder="Lorem ipsum" />
                              <input type="text" placeholder="Lorem ipsum" />
                              <textarea placeholder="Lorem ipsum dolor..."></textarea>
                              <button type="submit">Send Message</button>
                          </form>
                      </div>
                  </div>
                  <div class="footer-bottom">
                      <p>Copyright AI-IT © 2022. All Rights Reserved.</p>
                  </div>
              </footer>
          </>
  );
};

export default Team;