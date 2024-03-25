import React from 'react';
import Link from 'next/link';
import * as card from '../../styles/card.css';
import "../globals.css";

const cardinfo = () => {
  return (
                    
  <div className={card.main}>
    <div className={card.postfeed}>
    <Link href="/workflow">
      <div className={`${card.card} ${card.cardHover}`}>
        <div className={card.header}>
          <div className={card.id}>
            161803398
          </div>
          <div className={card.textcard}>
            <small className={card.textbase}>Development</small>
            <h5 className={card.titlecard}>Workflow</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbase}>5 steps process</small>
        </div>
      </div>
      </Link>

      <Link href="/information">
        <div className={`${card.card} ${card.cardHover}`}>
          <div className={card.header}>
            <div className={card.id}>
              198013008
            </div>
            <div className={card.textcard}>
              <small className={card.textbase}>Visual</small>
              <h5 className={card.titlecard}>Identity</h5>
            </div>
          </div>
          <div className={card.content}>
            <small className={card.textbase}>Logo, Banner and Assets</small>
          </div>
        </div>
      </Link>

      <Link href="/works">
      <div className={`${card.card} ${card.cardHover}`}>
        <div className={card.header}>
          <div className={card.id}>
           618033988
          </div>
          <div className={card.textcard}>
            <small className={card.textbase}>Portfolio</small>
            <h5 className={card.titlecard}>WORKS</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbase}>Showcase of projects</small>
        </div>
      </div>
      </Link>

      <Link href="/information">
        <div className={`${card.card} ${card.cardHover}`}>
          <div className={card.header}>
            <div className={card.id}>
              198013008
            </div>
            <div className={card.textcard}>
              <small className={card.textbase}>About</small>
              <h5 className={card.titlecard}>Miguel</h5>
            </div>
          </div>
          <div className={card.content}>
            <small className={card.textbase}>Skills and Hobbies</small>
          </div>
        </div>
      </Link>

      <div className={`${card.cardblog} ${card.cardHover}`}>

      <Link href="/posts/websites-goals">
        <div className={card.headerblog}>
          <div className={card.idblog}>
            198013008
          </div>
          <div className={card.textcard}>
            <small className={card.textbaseblog}>Websites Goals</small>
            <h5 className={card.titlecardblog}>Post</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbaseblog}>What is the purpose of e-commerce, landing pages and e-learning platforms for your business?</small>
        </div>
        </Link>
      </div>

      {/*<Link href="/posts/cibersecurity-resources">

      <div className={`${card.cardblog} ${card.cardHover}`}>
        <div className={card.headerblog}>
          <div className={card.idblog}>
            198013008
          </div>
          <div className={card.textcard}>
            <small className={card.textbaseblog}>Cibersecurity Resources</small>
            <h5 className={card.titlecardblog}>Post</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbaseblog}>How do you protect your data and what do you use?</small>
        </div>
      </div>
      </Link>
  */}
    </div>
  </div>
);
};

export default cardinfo;
