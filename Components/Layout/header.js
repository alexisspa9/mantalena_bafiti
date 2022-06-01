import { useRouter } from "next/router"
import React, { useState } from 'react';
import translations from "../../assets/locales/translations.json"
import Link from "next/link";
import styles from './Header.module.css'
import greece from "../../assets/images/greece.png"
import unitedKingdom from "../../assets/images/united-kingdom.png"

export default function Header() {
    const [toggled, setToggled] = useState(false);
    const { locale, locales, asPath } = useRouter()
    
    return (
      <header className={styles.header}>
          <nav itemScope itemType="http://schema.org/SiteNavigationElement" className={toggled ? [styles.nav, styles.nav_toggled].join(" ") : styles.nav}>
            <ul className={styles.nav_list}>
                  <li onClick={() => setToggled(false)} itemProp="name" className={styles.nav_list__item}><Link href="#projects" locale={locale}><a itemProp="url">{translations[locale].projects}</a></Link></li>
                  <li onClick={() => setToggled(false)} itemProp="name" className={styles.nav_list__item}><Link href="#about" locale={locale}><a itemProp="url">{translations[locale].about}</a></Link></li>
                  <li onClick={() => setToggled(false)} itemProp="name" className={styles.nav_list__item}><Link href="#contact" locale={locale}><a itemProp="url">{translations[locale].contact}</a></Link></li>
            </ul>
            <ul className={styles.nav_lang}>
            {
                        locales.map((l, i) => {
                            return <li key={"nav-lang-" + i} className={styles.nav_list__item} onClick={() => setToggled(false)}>
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
          </nav>
          <div id="toggler" className={styles.toggler} onClick={ () => setToggled(!toggled)}>
              <span className={toggled ? [styles.bar, styles.toggled_bar].join(" ") : styles.bar}></span>
              <span className={toggled ? [styles.bar, styles.toggled_bar].join(" ") : styles.bar}></span>
              <span className={toggled ? [styles.bar, styles.toggled_bar].join(" ") : styles.bar}></span>
          </div>
      </header>
    )
  }