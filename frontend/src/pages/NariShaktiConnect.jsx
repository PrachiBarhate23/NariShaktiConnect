import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import hero1 from '../assets/hero1.webp'; // Placeholder image paths
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import hero5 from '../assets/hero5.webp';
import reetika from '../assets/reetika.jpg';
import prachi from '../assets/prachi.jpg';
import harsh from '../assets/harsh.jpg';
import arushi from '../assets/arushi.jpg';
import collab1 from '../assets/collab1.png';
import collab2 from '../assets/collab2.png';
import collab3 from '../assets/collab3.webp';
import collab4 from '../assets/collab4.jpeg';
import collab5 from '../assets/collab5.png';
import collab6 from '../assets/collab6.png';
import collab7 from '../assets/collab7.png';
import collab8 from '../assets/collab8.jpeg';
import collab9 from '../assets/collab9.webp';
import collab10 from '../assets/collab10.png';
import collab11 from '../assets/collab11.jpg';
import collab12 from '../assets/collab12.jpg';

const NariShaktiConnect = () => {
  // State for image carousel
  const [currentImage, setCurrentImage] = useState(0);
  
  // Placeholder carousel images
  const carouselImages = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

const services = [
   {
     icon: '👥',
     title: 'Simulated Discreet Reporting',
     description: 'A confidential, form for logging incidents of harassment, assuring users that their identity can be protected without sending a real report.'
   },
   {
     icon: '📚',
     title: 'Simplified Legal & Rights Information',
     description: 'Provides easy-to-understand content on the POSH Act and basic labor rights, making complex legal information accessible and empowering.'
   },
   {
     icon: '☎️',
     title: 'Curated Resource Directory',
     description: 'We provide list of NGOs and legal aid contacts with simulated "connect" buttons to demonstrate a clear pathway to real-world help.'
   },
   {
     icon: '💡',
     title: 'Safety & Prevention Tips',
     description: 'We offer pre-written, actionable advice and safety tips specifically for women working in the informal sector.'
   }
 ];

  const teamMembers = [
    { name: 'Reetika Gupta', title: 'CTO', image: reetika },
    { name: 'Prachi Barhate', title: 'Co-Founder', image: prachi },
    { name: 'Harsh Malpani', title: 'Co-Founder', image: harsh },
    { name: 'Arushi Jain', title: 'Head of Partnerships & Outreach', image: arushi }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Open+Sans:wght@300;400;600&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: #212121;
          }

          .container {
            width: 100%;
            margin: 0 auto;
            padding: 0 20px;
          }

          .wide-container {
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 0;
          }

          .hero-section {
            background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
            padding: 20px 0;
            text-align: center;
          }

          .carousel-container {
            position: relative;
            max-width: 800px;
            margin: 0 auto 40px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .carousel-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            display: block;
          }

          .carousel-controls {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.8);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .carousel-controls:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-50%) scale(1.1);
          }

          .carousel-prev {
            left: 20px;
          }

          .carousel-next {
            right: 20px;
          }

          .carousel-indicators {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 15px;
          }

          .indicator {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            border: none;
            background: rgba(4, 136, 209, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .indicator.active {
            background: #0288D1;
            transform: scale(1.2);
          }

          .hero-content h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 3.5rem;
            font-weight: 700;
            color: #0288D1;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .hero-content p {
            font-size: 1rem;
            color: #616161;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-button {
            background: #4FC3F7;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(79, 195, 247, 0.3);
          }

          .cta-button:hover {
            background: #29B6F6;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 195, 247, 0.4);
          }

          .section {
            padding: 80px 0;
          }

          .section h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            font-weight: 600;
            color: #0288D1;
            text-align: center;
            margin-bottom: 30px;
            position: relative;
          }

          .section h2::after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: #4FC3F7;
            margin: 10px auto;
            border-radius: 2px;
          }

          .mission-section {
            background: white;
            text-align: center;
          }

          .mission-content {
            max-width: 800px;
            margin: 0 auto;
            font-size: 1.1rem;
            color: #616161;
            line-height: 1.8;
          }

          .what-is-section {
            background: #F8F9FA;
          }

          .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }

          .what-is-content h2 {
            text-align: left;
            margin-bottom: 30px;
          }

          .what-is-content h2::after {
            margin: 20px 0;
          }

          .what-is-text {
            font-size: 1.1rem;
            color: #616161;
            line-height: 1.8;
          }

          .what-is-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .services-section {
            background: #E3F2FD;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 50px;
          }

          .service-card {
            background: white;
            border: 3px solid #4FC3F7;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(79, 195, 247, 0.2);
            border-color: #0288D1;
          }

          .service-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            display: block;
          }

          .service-card h3 {
            font-family: 'Poppins', sans-serif;
            color: #4FC3F7;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 15px;
          }

          .service-card p {
            color: #616161;
            line-height: 1.6;
          }

          .about-section {
            background: white;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin: 40px 0 60px;
          }

          .team-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .team-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }

          .team-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 20px;
            border: 4px solid #4FC3F7;
          }

          .team-card h4 {
            font-family: 'Poppins', sans-serif;
            color: #0288D1;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .team-card .title {
            color: #616161;
            font-size: 0.95rem;
          }

          .collaborators-section {
            background: #F8F9FA;
            padding: 60px 0;
            margin-top: 40px;
          }

          .collaborators-section h3 {
            font-family: 'Poppins', sans-serif;
            color: #0288D1;
            font-size: 2rem;
            text-align: center;
            margin-bottom: 40px;
          }

          .collaborators-section h3::after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background: #4FC3F7;
            margin: 15px auto;
            border-radius: 2px;
          }

          .collaborators-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
            align-items: center;
            justify-items: center;
          }

          .collaborator-logo {
            width: 120px;
            height: 100px;
            object-fit: contain;
            transition: all 0.3s ease;
            opacity: 0.7;
          }

          .collaborator-logo:hover {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.05);
          }

          .read-more-btn {
            background: transparent;
            color: #0288D1;
            border: 2px solid #0288D1;
            padding: 12px 30px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 30px;
          }

          .read-more-btn:hover {
            background: #0288D1;
            color: white;
            transform: translateY(-2px);
          }

          /* Improved Mobile Responsiveness */
          @media (max-width: 1024px) {
            .container {
              padding: 0 30px;
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 20px;
            }

            .two-column {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .what-is-content h2 {
              text-align: center;
            }

            .what-is-content h2::after {
              margin: 20px auto;
            }

            .section {
              padding: 60px 0;
            }

            .carousel-container {
              margin-bottom: 30px;
            }

            .carousel-image {
              height: 250px;
            }

            .collaborators-grid {
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
              gap: 20px;
            }

            .collaborator-logo {
              width: 100px;
              height: 60px;
            }

            .services-grid {
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }

            .team-grid {
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 15px;
            }

            .service-card,
            .team-card {
              padding: 20px;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .team-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="wide-container">
            <div style={{padding: '0 20px'}}>
              <div className="carousel-container">
                <img 
                  src={carouselImages[currentImage]} 
                  alt={`Slide ${currentImage + 1}`}
                  className="carousel-image"
                />
                <button className="carousel-controls carousel-prev" onClick={prevImage}>
                  ❮
                </button>
                <button className="carousel-controls carousel-next" onClick={nextImage}>
                  ❯
                </button>
              </div>
              
              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section mission-section">
          <div className="container">
            <h2>OUR MISSION</h2>
            <div className="mission-content">
              <p>
                To empower women in India's informal/corporate sector by providing a discreet, accessible platform for reporting workplace harassment and connecting them with trusted resources and legal information.
              </p>
            </div>
          </div>
        </section>

        {/* What is Nari Shakti Connect Section */}
        <section className="section what-is-section">
          <div className="container">
            <div className="two-column">
              <div className="what-is-content">
                <h2>WHAT IS NARI SHAKTI CONNECT?</h2>
                <div className="what-is-text">
                  <p>
                    Nari Shakti Connect is a platform designed to empower women in India's informal/corporate sector against workplace harassment. It addresses the fear of retaliation and limited information, which often prevent women from seeking help. The name, meaning "Women's Power Connect," reflects its goal of bridging the gap between women in need and available support.
                  </p>
                  <p style={{marginTop: '20px'}}>
                    The platform's app, Nari Suraksha Saathi, is a simplified web tool. It offers a simulated, anonymous way to report incidents, building trust and showing that a discreet path to help is possible. It also acts as a central hub for crucial information, providing simplified legal rights and a directory of trusted support organizations, making a path to safety more accessible.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=400&fit=crop"
                  alt="Women in urban planning"
                  className="what-is-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section services-section">
          <div className="container">
            <h2>OUR SERVICES</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="section about-section">
          <div className="container">
            <h2>ABOUT US</h2>
            
            {/* Our Team Subsection */}
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              color: '#0288D1',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              Our Team
            </h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <h4>{member.name}</h4>
                  <p className="title">{member.title}</p>
                </div>
              ))}
            </div>

            {/* Our Collaborators Subsection */}
            <div className="collaborators-section">
              <h3>Our Supporters</h3>
              <div className="collaborators-grid">
                <img src={collab1} alt="Asian Development Bank" className="collaborator-logo" />
                <img src={collab2} alt="UN Women" className="collaborator-logo" />
                <img src={collab3} alt="The Asia Foundation" className="collaborator-logo" />
                <img src={collab4} alt="Cities Alliance" className="collaborator-logo" />
                <img src={collab5} alt="UNICEF" className="collaborator-logo" />
                <img src={collab6} alt="World Bank Group" className="collaborator-logo" />
                <img src={collab7} alt="UNDP" className="collaborator-logo" />
                <img src={collab8} alt="GIZ" className="collaborator-logo" />
                <img src={collab9} alt="GIZ" className="collaborator-logo" />
                <img src={collab10} alt="GIZ" className="collaborator-logo" />
                <img src={collab11} alt="GIZ" className="collaborator-logo" />
                <img src={collab12} alt="GIZ" className="collaborator-logo" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NariShaktiConnect;