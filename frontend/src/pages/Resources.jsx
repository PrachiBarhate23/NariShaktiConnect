// src/pages/Resources.jsx
import React, { useState } from 'react';
import styles from './Resources.module.css';

// Import images from assets folder
import heroBackground from '../assets/hero-background.jpg';
import subscribeBackground from '../assets/newsletter-subscribe-bg.jpeg';

// Report images
import annualReport2024 from '../assets/annual-report-2024.webp';
import youthSurveyReport from '../assets/youth-survey-report.jpg';
import impactAssessment from '../assets/impact-assessment.jpg';
import techIntegration from '../assets/tech-integration.jpg';

// Newsletter images
import august2025Newsletter from '../assets/newsletter.webp';
import july2025Newsletter from '../assets/newsletter.webp';
import june2025Newsletter from '../assets/newsletter.webp';
import may2025Newsletter from '../assets/newsletter.webp';

// Blog images
import technologySafety from '../assets/technology-safety.jpg';
import youthVoices from '../assets/youth-voices.png';
import dataDrivenSafety from '../assets/data-driven-safety.jpg';
import communityPartnerships from '../assets/community-partnerships.webp';
import futureTech from '../assets/future-tech.webp';
import safetyMetrics from '../assets/safety-metrics.webp';

const Resources = () => {
  const [activeSection, setActiveSection] = useState('reports');

  // Sample data - replace with your actual data
  const reportsData = [
    {
      id: 1,
      title: "Annual Safety Report 2024",
      description: "Comprehensive overview of safety initiatives and outcomes across supported cities.",
      date: "March 2024",
      downloadUrl: "#",
      category: "Annual Report",
      imageUrl: annualReport2024, // Using imported image
      iconType: "report"
    },
    {
      id: 2,
      title: "Youth Safety Survey Results",
      description: "Analysis of safety concerns and recommendations from youth community surveys.",
      date: "February 2024",
      downloadUrl: "#",
      category: "Survey Report",
      imageUrl: youthSurveyReport, // Using imported image
      iconType: "survey"
    },
    {
      id: 3,
      title: "Community Impact Assessment",
      description: "Detailed assessment of NariShakti's impact on community safety measures.",
      date: "January 2024",
      downloadUrl: "#",
      category: "Impact Report",
      imageUrl: impactAssessment, // Using imported image
      iconType: "impact"
    },
    {
      id: 4,
      title: "Technology Integration Report",
      description: "How mobile technology is transforming urban safety monitoring and response systems.",
      date: "December 2023",
      downloadUrl: "#",
      category: "Tech Report",
      imageUrl: techIntegration, // Using imported image
      iconType: "tech"
    }
  ];

  const newslettersData = [
    {
      id: 1,
      title: "NariShakti Monthly - August 2025",
      description: "Latest updates on safety initiatives, community partnerships, and upcoming events.",
      date: "August 2025",
      readUrl: "#",
      featured: true,
      coverImage: august2025Newsletter, // Using imported image
      previewImage: august2025Newsletter // Using imported image
    },
    {
      id: 2,
      title: "NariShakti Monthly - July 2025",
      description: "Summer safety campaigns and new city partnerships announcement.",
      date: "July 2025",
      readUrl: "#",
      featured: false,
      coverImage: july2025Newsletter, // Using imported image
      previewImage: july2025Newsletter // Using imported image
    },
    {
      id: 3,
      title: "NariShakti Monthly - June 2025",
      description: "Youth engagement programs and safety app feature updates.",
      date: "June 2025",
      readUrl: "#",
      featured: false,
      coverImage: june2025Newsletter, // Using imported image
      previewImage: june2025Newsletter // Using imported image
    },
    {
      id: 4,
      title: "NariShakti Monthly - May 2025",
      description: "Spring safety initiatives and community feedback highlights.",
      date: "May 2025",
      readUrl: "#",
      featured: false,
      coverImage: may2025Newsletter, // Using imported image
      previewImage: may2025Newsletter // Using imported image
    }
  ];

  const blogsData = [
    {
      id: 1,
      title: "Building Safer Communities Through Technology",
      description: "Exploring how mobile technology can empower communities to create safer environments for everyone.",
      date: "August 25, 2025",
      author: "NariShakti Team",
      readTime: "5 min read",
      category: "Technology",
      imageUrl: technologySafety, // Using imported image
      readUrl: "#"
    },
    {
      id: 2,
      title: "Youth Voices in Urban Safety Planning",
      description: "How young people are leading the conversation about creating inclusive and safe public spaces.",
      date: "August 20, 2025",
      author: "Community Team",
      readTime: "7 min read",
      category: "Community",
      imageUrl: youthVoices, // Using imported image
      readUrl: "#"
    },
    {
      id: 3,
      title: "Data-Driven Approaches to City Safety",
      description: "Understanding how data collection and analysis can inform better safety policies and interventions.",
      date: "August 15, 2025",
      author: "Research Team",
      readTime: "6 min read",
      category: "Research",
      imageUrl: dataDrivenSafety, // Using imported image
      readUrl: "#"
    },
    {
      id: 4,
      title: "Community Partnerships for Safer Cities",
      description: "Success stories from our partnerships with local organizations and government agencies.",
      date: "August 10, 2025",
      author: "Partnership Team",
      readTime: "4 min read",
      category: "Partnerships",
      imageUrl: communityPartnerships, // Using imported image
      readUrl: "#"
    },
    {
      id: 5,
      title: "The Future of Urban Safety Technology",
      description: "Emerging trends and innovations that will shape the next generation of safety applications.",
      date: "August 5, 2025",
      author: "Tech Team",
      readTime: "8 min read",
      category: "Innovation",
      imageUrl: futureTech, // Using imported image
      readUrl: "#"
    },
    {
      id: 6,
      title: "Measuring Impact: Safety Metrics That Matter",
      description: "Key performance indicators and metrics we use to evaluate the effectiveness of safety interventions.",
      date: "July 30, 2025",
      author: "Analytics Team",
      readTime: "6 min read",
      category: "Analytics",
      imageUrl: safetyMetrics, // Using imported image
      readUrl: "#"
    }
  ];

  const renderReports = () => (
    <div className={styles.contentSection}>
      <div className={styles.sectionIntro}>
        <h2>Reports & Research</h2>
        <p>Access our comprehensive reports, research findings, and data insights on urban safety and community development.</p>
      </div>
      
      <div className={styles.contentGrid}>
        {reportsData.map(report => (
          <div key={report.id} className={styles.reportCard}>
            <div className={styles.reportImageContainer}>
              <img 
                src={report.imageUrl || `https://via.placeholder.com/300x200/4FC3F7/FFFFFF?text=${report.iconType}`} 
                alt={report.title}
                className={styles.reportImage}
              />
              <div className={styles.reportOverlay}>
                <span className={styles.reportIcon}>📊</span>
              </div>
            </div>
            <div className={styles.reportContent}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{report.category}</span>
                <span className={styles.date}>{report.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{report.title}</h3>
              <p className={styles.cardDescription}>{report.description}</p>
              <button className={styles.primaryBtn}>
                <span>📄</span>
                Download Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNewsletters = () => (
    <div className={styles.contentSection}>
      <div className={styles.sectionIntro}>
        <h2>Newsletters</h2>
        <p>Stay updated with our monthly newsletters featuring the latest news, updates, and insights from NariShakti.</p>
      </div>

      <div className={styles.subscribeCard}>
        <div className={styles.subscribeImageContainer}>
          <img 
            src={subscribeBackground} 
            alt="Newsletter subscription" 
            className={styles.subscribeImage}
          />
          <div className={styles.subscribeOverlay}></div>
        </div>
        <div className={styles.subscribeContent}>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get monthly updates on safety initiatives, community stories, and platform developments.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email address" className={styles.emailInput} />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className={styles.contentGrid}>
        {newslettersData.map(newsletter => (
          <div key={newsletter.id} className={`${styles.newsletterCard} ${newsletter.featured ? styles.featured : ''}`}>
            {newsletter.featured && <div className={styles.featuredBadge}>Latest Issue</div>}
            <div className={styles.newsletterImageContainer}>
              <img 
                src={newsletter.coverImage || `https://via.placeholder.com/300x200/4DD0E1/FFFFFF?text=Newsletter+Cover`} 
                alt={newsletter.title}
                className={styles.newsletterImage}
              />
            </div>
            <div className={styles.newsletterContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{newsletter.title}</h3>
                <span className={styles.date}>{newsletter.date}</span>
              </div>
              <p className={styles.cardDescription}>{newsletter.description}</p>
              <button className={styles.secondaryBtn}>Read Newsletter</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBlogs = () => (
    <div className={styles.contentSection}>
      <div className={styles.sectionIntro}>
        <h2>Blog</h2>
        <p>Insights, stories, and perspectives on urban safety, community engagement, and technology for social good.</p>
      </div>
      
      <div className={styles.blogsGrid}>
        {blogsData.map(blog => (
          <article key={blog.id} className={styles.blogCard}>
            <div className={styles.blogImageContainer}>
              <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
              <span className={styles.blogCategory}>{blog.category}</span>
            </div>
            <div className={styles.blogContent}>
              <div className={styles.blogMeta}>
                <span className={styles.blogAuthor}>{blog.author}</span>
                <span className={styles.blogDate}>{blog.date}</span>
                <span className={styles.readTime}>{blog.readTime}</span>
              </div>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogDescription}>{blog.description}</p>
              <button className={styles.outlineBtn}>Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.resourcesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img 
            src={heroBackground} 
            alt="NariShakti Resources" 
            className={styles.heroBackgroundImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Resources</h1>
            <p className={styles.heroSubtitle}>
              Explore our collection of reports, newsletters, and blog posts to stay 
              informed about urban safety initiatives and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className={styles.tabsSection}>
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsContainer}>
            <button 
              className={`${styles.tab} ${activeSection === 'reports' ? styles.activeTab : ''}`}
              onClick={() => setActiveSection('reports')}
            >
              Reports
            </button>
            <button 
              className={`${styles.tab} ${activeSection === 'newsletters' ? styles.activeTab : ''}`}
              onClick={() => setActiveSection('newsletters')}
            >
              Newsletters
            </button>
            <button 
              className={`${styles.tab} ${activeSection === 'blogs' ? styles.activeTab : ''}`}
              onClick={() => setActiveSection('blogs')}
            >
              Blog
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {activeSection === 'reports' && renderReports()}
          {activeSection === 'newsletters' && renderNewsletters()}
          {activeSection === 'blogs' && renderBlogs()}
        </div>
      </main>
    </div>
  );
};

export default Resources;