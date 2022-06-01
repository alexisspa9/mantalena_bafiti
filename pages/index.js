import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import translations from "../assets/locales/translations.json"
import { useRouter } from "next/router"
import homeCover from "../assets/images/mantalena-bafiti-villa-cover.jpg"
import mant from "../assets/images/mantalena-bafiti-architect-engineer-paros-greece.jpg"
import projects from "../assets/projects/projects.json";
import logo from "../assets/images/paros-architecture-architect-mantalena-bafiti-new.svg"
import EmblaCarousel from "../Components/Carousel"

const basePath = "/images"

export default function Home() {
  const { locale, locales, asPath } = useRouter()

  return (
    <div>
      <Head>
        <title>{translations[locale].home_title}</title>
        <meta name="description" content={translations[locale].description} />
        <meta name="keywords" content={translations[locale].keywords} />
      </Head>
      <div id="homeContainer">
        <div className={styles.row}>
          <div className={styles.col_50}>
            <div className={styles.text__box}>
            <div id="logo" className={styles.logo}>
                    <img src={logo.src} alt={translations[locale].logo_alt} />
                    <h1 className={styles.title}><span>MANTALENA</span><br/><span>BAFITI</span><br/><span>ARCHITECT</span></h1>
              </div>
              <p className={styles.paragraph}>{translations[locale].home_little}</p>
              <a className={styles.button} href="#projects">{translations[locale].view_projects}</a>
            </div>
          </div>
          <div className={styles.col_50}>
            <img src={homeCover.src} alt={translations[locale].homeCoverAlt} />
          </div>
        </div>
      </div>

      <div id="projects">
        <h3>{translations[locale].projectss}</h3>
        <div className={styles.projects}>
          {projects.projects.map(proj => {
            return <div key={proj.title_en} className={styles.project}>
              <div className={styles.project_box}>
                <EmblaCarousel slides={proj.gallery} locale={locale} />
              </div>
              <div className={styles.project_info}>
                <h4>{locale == "en" ? proj.title_en : proj.title_el}</h4>
                <span>{locale == "en" ? proj.caption_en : proj.caption_el}</span>
              </div>
              </div>
          })}
          
        </div>
      </div>
      <div className={styles.separator}></div>

      <div id="about_container">
        <div className={styles.aboutInner}>
            <div className={styles.row}>
              <div id="about" className={[styles.col_50, styles.pp].join(" ")}>
                <h1 className={styles.aboutTitle}>{translations[locale].mantalena_bafiti}</h1>
                <p className={styles.aboutText}>{translations[locale].about_text}</p>
                <p className={styles.aboutText}>{translations[locale].about_text_two}</p>
                </div>
                <div className={styles.col_50}>
                <img src={mant.src} alt={translations[locale].aboutImgAlt} />
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
