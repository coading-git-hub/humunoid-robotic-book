import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // Using cover-image.png from static/img folder
  const heroImageUrl = useBaseUrl('/img/cover-image.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro/index">
                Start Learning 🚀
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/hardware-setup/digital-twin-workstation">
                Setup Guide ⚙️
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImageUrl} alt="Physical AI & Humanoid Robotics" className={styles.robotImage} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="A comprehensive 13-week course on Physical AI and Humanoid Robotics covering ROS 2, digital twins, NVIDIA Isaac, and more.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}