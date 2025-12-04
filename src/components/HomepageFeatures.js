import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'ROS 2 Fundamentals',
    description: (
      <>
        Master the Robot Operating System 2 with hands-on tutorials covering
        nodes, topics, services, and launch files for building robust robotics applications.
      </>
    ),
  },
  {
    title: 'Digital Twin Technology',
    description: (
      <>
        Learn simulation techniques using Gazebo and Unity to create virtual
        environments for testing and developing humanoid robots before real-world deployment.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac & AI',
    description: (
      <>
        Explore advanced AI-powered perception, manipulation, and reinforcement
        learning using NVIDIA Isaac Sim for next-generation robotics applications.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    description: (
      <>
        Dive deep into bipedal locomotion, manipulation, and human-robot interaction
        design for building sophisticated humanoid robotic systems.
      </>
    ),
  },
  {
    title: 'Hardware Integration',
    description: (
      <>
        Get comprehensive setup guides for Digital Twin workstations, Physical AI Edge Kits,
        and Cloud-Native configurations to match your learning environment.
      </>
    ),
  },
  {
    title: 'Capstone Project',
    description: (
      <>
        Apply your knowledge in a culminating project: a simulated humanoid robot
        with conversational AI, integrating all course concepts into a complete system.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>
          <span className={styles.iconPlaceholder}>🤖</span>
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <h2>Course Modules</h2>
          <p>A comprehensive 13-week journey through Physical AI and Humanoid Robotics</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}