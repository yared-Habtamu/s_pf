import "./App.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaDownload,
  FaTimesCircle,
} from "react-icons/fa";
import profileImg from "./assets/pdf_images/profile.jpg";
import sketch1 from "./assets/pdf_images/sketch1.jpg";
import sketch2 from "./assets/pdf_images/sketch2.jpg";
import sketch3 from "./assets/pdf_images/sketch3.jpg";
import residentialGplus1 from "./assets/pdf_images/residential_gplus1.jpg";
import residential from "./assets/pdf_images/residential.jpg";
import commercial1 from "./assets/pdf_images/commercial_1 (1).jpg";
import commercial2 from "./assets/pdf_images/commercial_2.jpg";
import commercial3 from "./assets/pdf_images/commercial_3 (2).jpg";
import mixedUseBldg from "./assets/pdf_images/mixed_use_bldg.jpg";
import mixedUseBldg2 from "./assets/pdf_images/mixed_use_bldg2.jpg";
import mixedUseBldg3 from "./assets/pdf_images/mixed_use_bldg3.jpg";
import publicPark1 from "./assets/pdf_images/public_park1.jpg";
import publicPark2 from "./assets/pdf_images/public_park2.jpg";
import publicPark3 from "./assets/pdf_images/public_park3.jpg";
// import publicPark3 from "./assets/pdf_images/public_park3.jpg";
import residentialsGplus12 from "./assets/pdf_images/residential_gplus12.jpg";
import residentialsGplus13 from "./assets/pdf_images/residential_gplus13.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function scrollToSection(e, href) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="app-container">
      <motion.nav
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Desktop/Tablet Nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-link-desktop">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger for Mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="nav-dropdown"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      scrollToSection(e, link.href);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
      <main>
        <motion.section
          id="home"
          className="section home-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <motion.img
              src={profileImg}
              alt="Senait Kindeya"
              className="profile-img"
              style={{ marginBottom: 32 }}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.h1
              style={{ fontSize: "2.8rem", marginBottom: 12 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Senait Kindeya
            </motion.h1>
            <motion.h2
              style={{
                fontWeight: 400,
                fontSize: "1.5rem",
                color: "#ffd580",
                marginBottom: 24,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Architect & Urban Planning Student
            </motion.h2>
            <motion.p
              style={{ maxWidth: 500, fontSize: "1.15rem", color: "#e6eaf3cc" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            ></motion.p>
          </div>
        </motion.section>
        <motion.section
          id="about"
          className="section about-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about-profile">
            <motion.img
              src={profileImg}
              alt="Senait Kindeya"
              className="profile-img"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                About
              </motion.h2>
              <motion.p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "#e6eaf3cc",
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                I am a fourth-year Architecture and Urban Planning student at
                Jimma University, driven by a passion for designing sustainable
                and functional spaces. As an innovative junior architect, I have
                successfully completed various projects, ranging from conceptual
                sketches to fully developed residential and mixed-use buildings.
                My portfolio reflects my commitment to creative and practical
                architectural solutions.
              </motion.p>
              <a href="/seni-pf.pdf" download className="download-cv-btn">
                <FaDownload style={{ marginRight: 8 }} /> Download CV
              </a>
            </div>
          </div>
        </motion.section>
        <motion.section
          id="projects"
          className="section projects-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{ marginBottom: 32 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="project"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Journal and Sketches</h3>
            <div className="project-gallery">
              <motion.img
                src={sketch1}
                alt="Sketch 1"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(sketch1)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={sketch2}
                alt="Sketch 2"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(sketch2)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={sketch3}
                alt="Sketch 3"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(sketch3)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Explored works of different architects, gaining inspiration and
              expanding my own understanding.
            </motion.p>
          </motion.div>
          <motion.div
            className="project"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Residential G+1 Building</h3>
            <div className="project-gallery">
              <motion.img
                src={residentialGplus1}
                alt="Residential G+1"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(residentialGplus1)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={residentialsGplus12}
                alt="Residential G+1 - 2"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(residentialsGplus12)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={residentialsGplus13}
                alt="Residential G+1 - 3"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(residentialsGplus13)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <b>Year:</b> 2016
              <br />
              <b>Location:</b> Jimma, Ethiopia
              <br />
              My first residential building, designed for family comfort and
              practicality. Includes living areas, bedrooms, kitchen, and
              playroom tailored for client needs.
            </motion.p>
          </motion.div>
          <motion.div
            className="project"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Residential G+3 Building</h3>
            <div className="project-gallery">
              <motion.img
                src={residential}
                alt="Residential"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(residential)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <b>Year:</b> 2017
              <br />
              <b>Location:</b> Jimma, Ethiopia
              <br />
              Apartment-style building with three houses, each tailored to
              client needs.
            </motion.p>
          </motion.div>
          <motion.div
            className="project"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Commercial G+1 Building</h3>
            <div className="project-gallery">
              <motion.img
                src={commercial1}
                alt="Commercial G+1 - 1"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(commercial1)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={commercial2}
                alt="Commercial G+1 - 2"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(commercial2)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={commercial3}
                alt="Commercial G+1 - 3"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(commercial3)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <b>Year:</b> 2017
              <br />
              <b>Location:</b> Jimma, Ethiopia
              <br />
              Prefabricated, sustainable commercial building using modular
              components for efficiency and eco-friendliness. Innovative design
              and passive strategies for adaptability and energy efficiency.
            </motion.p>
          </motion.div>
          <motion.div
            className="project"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Mixed Use Building</h3>
            <div className="project-gallery">
              <motion.img
                src={mixedUseBldg}
                alt="Mixed Use Building"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(mixedUseBldg)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={mixedUseBldg2}
                alt="Mixed Use Building 2"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(mixedUseBldg2)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={mixedUseBldg3}
                alt="Mixed Use Building 3"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(mixedUseBldg3)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <b>Year:</b> 2017
              <br />
              <b>Location:</b> Jimma, Ethiopia
              <br />
              Combines commercial spaces on lower floors with residential units
              above, promoting urban density and community. Commercial zones
              activate the street level, supporting local businesses and
              enhancing public interaction. Residential areas offer privacy,
              comfort, and access to amenities.
            </motion.p>
          </motion.div>
          <motion.div
            className="project"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Public Park</h3>
            <div className="project-gallery">
              <motion.img
                src={publicPark1}
                alt="Public Park 1"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(publicPark1)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={publicPark2}
                alt="Public Park 2"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(publicPark2)}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={publicPark3}
                alt="Public Park 3"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setLightboxImg(publicPark3)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <b>Year:</b> 2017
              <br />
              <b>Location:</b> Jimma, Bosa Addis
              <br />
              Designed a public park in an area lacking recreational spaces,
              providing a much-needed community amenity.
            </motion.p>
          </motion.div>
        </motion.section>
        <motion.section
          id="contact"
          className="section contact-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Contact
          </motion.h2>
          <motion.div
            className="contact-icons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <a href="tel:+251945721285" className="contact-icon" title="Call">
              <FaPhoneAlt size={32} />
            </a>
            <a
              href="https://t.me/mapad21"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <FaTelegramPlane size={32} />
            </a>
            <a
              href="mailto:senaitkindeya5@gmail.com"
              className="contact-icon"
              title="Email"
            >
              <FaEnvelope size={32} />
            </a>
            <a
              href="#"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
          </motion.div>
        </motion.section>
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="lightbox-modal"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <button
                  className="lightbox-close"
                  onClick={() => setLightboxImg(null)}
                  aria-label="Close image"
                >
                  <FaTimesCircle size={32} />
                </button>
                <img src={lightboxImg} alt="Enlarged project" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
