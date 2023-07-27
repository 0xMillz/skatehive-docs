import React from 'react';
import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import { MendableSearchBar } from "@mendable/search"

const style = { darkMode: true,  accentColor: "limegreen" }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img className={styles.imageStyle} src="https://ipfs.decentralized-content.com/ipfs/bafybeiauv3rfgzfrbrlzwdclyws35sgmcxsbaqhocyinbuba5laswzxgau" alt="Description of image" />
        <MendableSearchBar placeholder='Ask anything here, skater...' anon_key='524a2d83-688b-477a-ba99-05131d06138d' style={style} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            padding="20px">
            Become a SkateNerd - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="SkateHive Docs">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skatehive Docs 🛹</title>
        <meta property="og:title" content="Skatehive Docs 🛹" />
        <meta property="og:description" content="SkateHive App and Community documentation for onboarding savvy users" />
        <meta property="og:image" content="https://thumbnails.odycdn.com/optimize/s:400:0/quality:95/plain/https://spee.ch/8/b416b166fd9dbe4e.png" />
        <meta property="og:url" content="https://skatehive.app" />
        <meta name="twitter:card" content="summary_large_image" />

      </Helmet>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
