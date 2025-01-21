import styles from "./footer.module.css";

import Image from "next/image";

import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/instagram.svg";
import facebookIcon from "@/assets/facebook.svg";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`} id="footer">
      <div className="container">
        <div className="row align-items-start gap-5 gap-lg-0">
          <div className="col-12 col-lg-4 text-center">
            <Image
              className={styles.footerLogo}
              src={logo}
              alt="Ristorante Pizzeria Al Teatro - Logo"
            />
          </div>
          <div className="col-12 col-lg-4 text-center">
            <div className={styles.centeredContact}>
              <div className={styles.contact}>
                <p>Telefono:</p>
                <a href="tel:0304196425" className={styles.footerLink}>
                  +39 030 4196425
                </a>
                <a href="tel:+393519560584" className={styles.footerLink}>
                  +39 351 9560584
                </a>
              </div>
              <div className={styles.contact}>
                <p>Email:</p>
                <a
                  href="mailto:alteatrodesenzano@gmail.com"
                  className={styles.footerLink}
                >
                  alteatrodesenzano@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <div className={styles.centeredContact}>
              <p>Seguici sui social</p>
              <div className="d-flex gap-4 justify-content-center">
                <a
                  href="https://www.instagram.com/ristorante_al_teatro/"
                  aria-label="Ristorante Pizzeria Al Teatro - Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Image
                    src={instagramIcon}
                    alt="Ristorante Pizzeria Al Teatro - Instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100095323475530"
                  aria-label="Ristorante Pizzeria Al Teatro - Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Image
                    src={facebookIcon}
                    alt="Ristorante Pizzeria Al Teatro - Facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.legal}`}>
          <div>
            <p>
              P.IVA <br />
              <strong>02710540226</strong>
            </p>
          </div>
          <div>
            <Link href="/privacy-cookies">Informativa sui cookies</Link>
            <p className="credits mt-2">
              Made by:{" "}
              <a
                href="https://www.fmwebagency.it/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.privacyLink}
              >
                FM
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
