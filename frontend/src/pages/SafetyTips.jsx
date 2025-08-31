// src/pages/SafetyTips.jsx
import React from 'react';
import styles from './SafetyTips.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SafetyTips = () => {
  return (
    <div className={styles.safetyTipsContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Safety Tips & Guidelines</h1>
          <p className={styles.heroSubtitle}>
            Comprehensive guide to recognizing harassment and staying safe in all environments
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={styles.contentWrapper}>
        
        {/* Understanding Harassment Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Understanding Harassment</h2>
          
          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>Definition</h3>
            <p className={styles.paragraph}>
              Harassment is any unwanted behavior that makes a person feel uncomfortable, unsafe, or threatened. 
              It can happen in different environments and take various forms such as:
            </p>
            
            <div className={styles.harassmentTypes}>
              <div className={styles.typeCard}>
                <div className={styles.cardIcon}>🗣️</div>
                <h4 className={styles.typeTitle}>Verbal</h4>
                <p>Catcalling, inappropriate comments, sexist jokes.</p>
              </div>
              <div className={styles.typeCard}>
                <div className={styles.cardIcon}>✋</div>
                <h4 className={styles.typeTitle}>Physical</h4>
                <p>Unwanted touching, stalking, blocking someone's way.</p>
              </div>
              <div className={styles.typeCard}>
                <div className={styles.cardIcon}>💻</div>
                <h4 className={styles.typeTitle}>Online (Cyber Harassment)</h4>
                <p>Abusive messages, stalking on social media, spreading private photos without consent.</p>
              </div>
              <div className={styles.typeCard}>
                <div className={styles.cardIcon}>🏢</div>
                <h4 className={styles.typeTitle}>Workplace</h4>
                <p>Unwanted advances, inappropriate jokes, discrimination, or misuse of power.</p>
              </div>
              <div className={styles.typeCard}>
                <div className={styles.cardIcon}>🏙️</div>
                <h4 className={styles.typeTitle}>Public Spaces</h4>
                <p>Staring, following, unsolicited attention.</p>
              </div>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionTitle}>Why It Matters</h3>
            <p className={styles.paragraph}>
              Harassment doesn't just harm women physically — it deeply affects mental health, confidence, 
              and professional growth. Recognizing harassment is the first step toward standing up, reporting, 
              and seeking justice.
            </p>
          </div>
        </div>

        {/* General Safety Tips Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>General Safety Tips</h2>
          
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.cardIcon}>🧠</div>
              <h4 className={styles.tipTitle}>Trust Your Instincts</h4>
              <p>Your gut feeling is powerful. If a person or situation feels unsafe, act immediately — 
              walk away, call someone, or alert people around you.</p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.cardIcon}>👀</div>
              <h4 className={styles.tipTitle}>Stay Aware of Your Surroundings</h4>
              <p>Avoid distractions like loud music in headphones when walking alone at night. 
              Stay alert to movements, vehicles, and people nearby.</p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.cardIcon}>📍</div>
              <h4 className={styles.tipTitle}>Share Your Location</h4>
              <p>Many apps allow live location sharing. Share your route with family or friends, 
              especially during late-night travel.</p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.cardIcon}>📞</div>
              <h4 className={styles.tipTitle}>Emergency Contacts</h4>
              <p>Save helpline numbers such as 100 (police), 1091 (women's helpline), 
              and trusted relatives/friends on speed dial.</p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.cardIcon}>🚗</div>
              <h4 className={styles.tipTitle}>Safe Transport</h4>
              <p>Book rides only through trusted apps. Check the driver's photo, license plate, 
              and details before boarding. Sit in the back seat and avoid sharing rides with strangers.</p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.cardIcon}>🔒</div>
              <h4 className={styles.tipTitle}>Digital Safety</h4>
              <p>Avoid sharing sensitive personal information publicly. Report and block anyone 
              sending harassing or inappropriate content.</p>
            </div>
          </div>
        </div>

        {/* Workplace Safety Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Workplace Safety</h2>
          
          <div className={styles.workplaceTips}>
            <div className={styles.workplaceTip}>
              <div className={styles.cardIcon}>⚖️</div>
              <h4>Know Your Rights</h4>
              <p>Be aware of workplace laws such as POSH (Prevention of Sexual Harassment Act, 2013 in India). 
              Every organization is legally required to have an Internal Complaints Committee (ICC).</p>
            </div>
            
            <div className={styles.workplaceTip}>
              <div className={styles.cardIcon}>📢</div>
              <h4>Report Channels</h4>
              <p>If you face harassment, report it to HR, the ICC, or relevant authorities. Speaking up is your right.</p>
            </div>
            
            <div className={styles.workplaceTip}>
              <div className={styles.cardIcon}>📝</div>
              <h4>Keep Records</h4>
              <p>Maintain a log of incidents, emails, or screenshots. Documentation strengthens your case 
              if you choose to take legal action.</p>
            </div>
            
            <div className={styles.workplaceTip}>
              <div className={styles.cardIcon}>🤝</div>
              <h4>Support Network</h4>
              <p>Speak to colleagues, friends, or family. Having support can reduce the feeling of isolation.</p>
            </div>
          </div>
        </div>

        {/* Public & Travel Safety Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Public & Travel Safety</h2>
          
          <div className={styles.publicSafetyGrid}>
            <div className={styles.safetyItem}>
              <div className={styles.cardIcon}>👥</div>
              <h4>Stay in Crowded Spaces</h4>
              <p>Prefer well-lit, busy areas. Avoid deserted alleys or empty public transport compartments at night.</p>
            </div>
            
            <div className={styles.safetyItem}>
              <div className={styles.cardIcon}>🥊</div>
              <h4>Self-Defense Tools</h4>
              <p>Carry pepper spray, personal safety alarms, or use mobile SOS features. 
              These can buy time to escape danger.</p>
            </div>
            
            <div className={styles.safetyItem}>
              <div className={styles.cardIcon}>🧳</div>
              <h4>Travel Smart</h4>
              <p>Share cab/bus details with a trusted person. Avoid accepting drinks or food from strangers.</p>
            </div>
            
            <div className={styles.safetyItem}>
              <div className={styles.cardIcon}>💪</div>
              <h4>Confident Body Language</h4>
              <p>Walk with purpose and avoid appearing lost. Confidence can discourage potential harassers.</p>
            </div>
          </div>
        </div>

        {/* Online Safety Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Online Safety</h2>
          
          <div className={styles.onlineSafetyContent}>
            <div className={styles.onlineTip}>
              <div className={styles.cardIcon}>🔒</div>
              <h4>Privacy First</h4>
              <p>Adjust social media settings to control who sees your information. Avoid oversharing 
              personal details like your address, workplace, or daily routine.</p>
            </div>
            
            <div className={styles.onlineTip}>
              <div className={styles.cardIcon}>🚫</div>
              <h4>Cyber Harassment</h4>
              <p>If someone sends abusive or threatening messages, take screenshots as proof, 
              then block and report them.</p>
            </div>
            
            <div className={styles.onlineTip}>
              <div className={styles.cardIcon}>💬</div>
              <h4>Safe Communication</h4>
              <p>Be cautious about meeting strangers you connect with online. If you do, 
              always choose a public place and inform someone beforehand.</p>
            </div>
          </div>
        </div>

        {/* What to Do If Harassed Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What to Do If Harassed</h2>
          
          <div className={styles.actionSteps}>
            <div className={styles.actionCard}>
              <div className={styles.cardIcon}>🚨</div>
              <h4 className={styles.actionTitle}>Immediate Action</h4>
              <p>If you feel unsafe, make noise, draw attention, or move to a safer place. 
              Don't hesitate to ask for help from bystanders.</p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.cardIcon}>⚖️</div>
              <h4 className={styles.actionTitle}>Legal Action</h4>
              <p>You have the right to file a complaint through various channels:</p>
              <ul className={styles.actionList}>
                <li>Police Helpline (100 in India)</li>
                <li>Women's Helpline (1091 in India)</li>
                <li>Cyber Crime Reporting Portal for online harassment</li>
              </ul>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.cardIcon}>🏥</div>
              <h4 className={styles.actionTitle}>Medical Help</h4>
              <p>In case of physical harm, seek medical attention immediately. Doctors can also 
              provide legal medical records if needed.</p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.cardIcon}>🤗</div>
              <h4 className={styles.actionTitle}>Support Groups</h4>
              <p>Reach out to NGOs, women's organizations, or counseling centers for emotional 
              support and legal guidance.</p>
            </div>
          </div>
        </div>

        {/* Self-Empowerment Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Self-Empowerment & Community</h2>
          
          <div className={styles.empowermentContent}>
            <div className={styles.empowermentCard}>
              <div className={styles.cardIcon}>🥋</div>
              <h4>Self-Defense Training</h4>
              <p>Enroll in workshops that teach basic martial arts or defense moves. 
              Even simple techniques can help in emergencies.</p>
            </div>
            
            <div className={styles.empowermentCard}>
              <div className={styles.cardIcon}>📚</div>
              <h4>Inspiration Through Stories</h4>
              <p>Read and share stories of women who took a stand against harassment. 
              They serve as powerful motivation.</p>
            </div>
            
            <div className={styles.empowermentCard}>
              <div className={styles.cardIcon}>👫</div>
              <h4>Bystander Awareness</h4>
              <p>Encourage friends and community members to intervene safely when they witness harassment. 
              Collective action creates safer spaces.</p>
            </div>
          </div>
        </div>

        {/* Emergency Numbers Section */}
        <div className={styles.emergencySection}>
          <h2 className={styles.emergencyTitle}>Key Emergency Numbers (India)</h2>
          <div className={styles.emergencyNumbers}>
            <div className={styles.emergencyCard}>
              <div className={styles.emergencyIcon}>🚔</div>
              <h4 className={styles.emergencyNumber}>100</h4>
              <p className={styles.emergencyLabel}>Police</p>
            </div>
            <div className={styles.emergencyCard}>
              <div className={styles.emergencyIcon}>👩‍⚖️</div>
              <h4 className={styles.emergencyNumber}>1091</h4>
              <p className={styles.emergencyLabel}>Women's Helpline</p>
            </div>
            <div className={styles.emergencyCard}>
              <div className={styles.emergencyIcon}>📞</div>
              <h4 className={styles.emergencyNumber}>7827 170 170</h4>
              <p className={styles.emergencyLabel}>NCW Helpline</p>
            </div>
            <div className={styles.emergencyCard}>
              <div className={styles.emergencyIcon}>💻</div>
              <h4 className={styles.emergencyWebsite}>cybercrime.gov.in</h4>
              <p className={styles.emergencyLabel}>Cyber Crime Reporting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;