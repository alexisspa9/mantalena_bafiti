import { useRouter } from "next/router"
import React, { useState } from 'react';
import logo from "../../assets/images/paros-architecture-architect-mantalena-bafiti.svg"
import translations from "../../assets/locales/translations.json"
import Link from "next/link";
import styles from './Header.module.css'


export default function Header() {
    const [toggled, setToggled] = useState(false);
    const { locale, locales, asPath } = useRouter()
    
    return (
      <header className={styles.header}>
          <div id="logo" className={styles.logo}>
              <Link href="/" locale={locale}>
                  <a>
                <img src={logo.src} alt={translations[locale].logo_alt} />
                </a>
              </Link>
          </div>
          <nav itemScope itemType="http://schema.org/SiteNavigationElement" className={toggled ? [styles.nav, styles.nav_toggled].join(" ") : styles.nav}>
            <ul className={styles.nav_list}>
                  <li onClick={() => setToggled(false)} itemProp="name" className={styles.nav_list__item}><Link href="#projects" locale={locale}><a itemProp="url">{translations[locale].projects}</a></Link></li>
                  <li onClick={() => setToggled(false)} itemProp="name" className={styles.nav_list__item}><Link href="#about" locale={locale}><a itemProp="url">{translations[locale].about}</a></Link></li>
                  <li onClick={() => setToggled(false)} itemProp="name" className={styles.nav_list__item}><Link href="#contact" locale={locale}><a itemProp="url">{translations[locale].contact}</a></Link></li>
            </ul>
          </nav>
          <div id="toggler" className={styles.toggler} onClick={ () => setToggled(!toggled)}>
              <span className={toggled ? [styles.bar, styles.toggled_bar].join(" ") : styles.bar}></span>
              <span className={toggled ? [styles.bar, styles.toggled_bar].join(" ") : styles.bar}></span>
              <span className={toggled ? [styles.bar, styles.toggled_bar].join(" ") : styles.bar}></span>
          </div>
      </header>
    )
  }