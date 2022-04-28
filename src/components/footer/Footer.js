import React from 'react';
import styles from './styles.module.sass';
import Logo from "../logo/Logo";

export default function Footer() {

  return (
    <div className={styles.container}>
      <div onClick={() => window.location.href='#main-nav'}>
        <Logo />
      </div>
      <div className={styles.linksContainer}>
        <h3>Polygon Links</h3>
        <a href="https://polygon.technology" target="_blank" rel="noreferrer" className="underline-link-rail">Website</a>
        <a href="https://github.com/maticnetwork" target="_blank" rel="noreferrer" className="underline-link-rail">Github</a>
        <a href="https://twitter.com/0xPolygon" target="_blank" rel="noreferrer" className="underline-link-rail">Twitter</a>
        <a href="https://t.me/maticnetwork" target="_blank" rel="noreferrer" className="underline-link-rail">Telegram</a>
        <a href="https://discord.com/invite/polygontreehouse" target="_blank" rel="noreferrer" className="underline-link-rail">Discord</a>
        <a href="https://www.reddit.com/r/maticnetwork" target="_blank" rel="noreferrer" className="underline-link-rail">Reddit</a>
      </div>
      <div>
        <h3>Twitter Feed</h3>
        <div className={styles.twitterScreen}>
          <a className="twitter-timeline" data-width="500" data-theme="dark" data-border-color="white"
             href="https://twitter.com/JohnLilic?ref_src=twsrc%5Etfw">Tweets by JohnLilic</a>
        </div>
      </div>
    </div>
  )
}
