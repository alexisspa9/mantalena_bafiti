import { useRouter } from "next/router"
import greece from "../../assets/images/greece.png"
import unitedKingdom from "../../assets/images/united-kingdom.png"
import translations from "../../assets/locales/translations.json"
import Link from "next/link";
import styles from './Footer.module.css'
import { useState } from 'react'
import topArrow from "../../assets/images/top.png"
import Image from 'next/image'

export default function Footer() {
    const { locale, locales, asPath } = useRouter();
    const [visible, setVisible] = useState(false);
    const onVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled >= 600) setVisible(true)
		else if (scrolled <= 300) setVisible(false)
	}
	if (typeof window === 'object') window.addEventListener('scroll', onVisible)
    
    const onScroll = () => {
		if (typeof window === 'object') window.scrollTo({ top: 0, behavior: 'smooth' })
	}

    return (
      <footer id="contact" className={styles.footer}>
          <div className={visible ? [styles.backToTop, styles.visible].join(" ") : styles.backToTop} onClick={onScroll}>
            <Image src={topArrow} alt="top arrow icon" />
          </div>
          <div className={styles.row}>
              <div className={styles.col_50}>
          <span className={styles.heading}>{translations[locale].contact}</span>
          <p className={[styles.paragraph, styles.pp].join(" ")}>{translations[locale].contact_text}</p>
          <h1 className={styles.paragraph}>{translations[locale].contact_title}</h1>
          <a className={styles.paragraph} href="tel:+302284045217">Tel: + (30) 22840 45217</a>
          <a className={styles.paragraph} href="tel:+306956641084">+ (30) 695 664 1084</a>
          <a className={styles.paragraph} href="https://www.google.com/maps/@37.0434129,25.2461308,18z">{translations[locale].contact_address}</a>
        <br/>
        <p className={styles.paragraph}>{translations[locale].language}:</p>
        <ul className={styles.flagList}>
         {
                        locales.map((l, i) => {
                            return <li key={i} className={styles.nav_list__item}>
                                    <Link
                                        href={asPath}
                                        locale={l}
                                    >
                                        <a><img className={styles.flagIcon} src={l == "el" ? greece.src : unitedKingdom.src} alt="language flag icon" /></a>
                                    </Link>
                                </li>
                         
                        })
                    }
        </ul>
        </div>
        <div className={styles.col_50}>
        <form action="https://formspree.io/f/mrgjaanq" method="POST">
            <input className={styles.input} type="text" name="fullname" placeholder={translations[locale].your_fullname} />
            <input className={styles.input} type="email" name="email" placeholder={translations[locale].your_email} />
            <textarea className={styles.text} name="message" placeholder={translations[locale].your_message}></textarea>
            <button type="submit" className={styles.submitButton}>{translations[locale].send}</button>
        </form>
        </div>
        </div>
        <div className={styles.footerLast}>
        © 2022 by Mantalena Bafiti Architect Engineer.
        </div>
      </footer>
    )
  }