import Image from "next/image";

import styles from "./page.module.css";

import logo from "@/assets/logo.png";

export default function PrivacyCookiePage() {
  return (
    <section className={styles.privacyPage}>
      <div className="container">
        <div className={styles.privacyContainer}>
          <div className={styles.privacyHeading}>
            <Image src={logo} alt="CMG BALDESSARELLI Logo" />
            <h1>Privacy e Cookie Policy</h1>
          </div>
          <div className={styles.privacyContent}>
            <p>Ultimo aggiornamento: 22/01/2025</p>
            <div className={styles.privacyBlock}>
              <h2>1. Introduzione</h2>
              <p>
                La presente informativa descrive come raccogliamo, utilizziamo e
                proteggiamo i dati personali forniti dagli utenti tramite il
                nostro sito web. Siamo impegnati a garantire la protezione dei
                dati personali in conformità al Regolamento Generale sulla
                Protezione dei Dati (GDPR - Regolamento UE 2016/679) e ad altre
                normative applicabili.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>2. Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento è Ristorante Pizzeria Al Teatro, con
                sede legale in Via Angelo Anelli, 40A, Desenzano del Garda (BS)
                (di seguito, il &quot;Titolare&quot;). Per qualsiasi domanda o
                richiesta relativa alla privacy, è possibile contattare il
                Titolare tramite email all&apos;indirizzo:{" "}
                <a href="mailto:info@cmgbaldessarelli.it">
                  alteatrodesenzano@gmail.com
                </a>
                .
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>3. Tipologia di dati raccolti</h2>
              <p>
                Attraverso il modulo di prenotazione presente sul Sito, vengono
                raccolti i seguenti dati personali forniti dall&apos;utente:
              </p>
              <ul>
                <li>Nome</li>
                <li>Cognome</li>
                <li>Numero di telefono</li>
                <li>Email</li>
              </ul>
              <p>
                Questi dati vengono utilizzati esclusivamente per la gestione
                delle prenotazioni e per comunicazioni relative alle stesse.
              </p>
              <p>
                Durante la navigazione del Sito, potrebbero essere raccolte
                informazioni tecniche, come l&apos;indirizzo IP, il tipo di
                browser utilizzato, il sistema operativo e altre informazioni
                relative alla connessione. Questi dati vengono utilizzati
                esclusivamente per fini statistici e per garantire il corretto
                funzionamento del Sito.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>4. Finalità del trattamento</h2>
              <p>
                I dati personali forniti vengono raccolti e trattati
                esclusivamente per le seguenti finalità:
              </p>
              <ul>
                <li>
                  Gestione delle prenotazioni: per consentire agli utenti di
                  prenotare un tavolo presso il ristorante.
                </li>
                <li>
                  Adempimenti legali: per rispettare obblighi di legge o
                  richieste da parte delle autorità.
                </li>
              </ul>
            </div>
            <div className={styles.privacyBlock}>
              <h2>5. Base giuridica del trattamento</h2>
              <p>
                Il trattamento dei dati è basato sul consenso esplicito
                dell&apos;utente fornito al momento dell&apos;invio del modulo
                di contatto.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>6. Modalità di trattamento dei dati</h2>
              <p>
                I dati personali sono trattati con strumenti elettronici e
                misure organizzative idonee a garantire la sicurezza e la
                riservatezza delle informazioni.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>7. Conservazione dei dati</h2>
              <p>
                I dati saranno conservati per il tempo strettamente necessario a
                rispondere alla richiesta dell&apos;utente e, successivamente,
                per il periodo necessario a rispettare eventuali obblighi
                legali.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>8. Diritti dell&apos;utente</h2>
              <p>L&apos;utente ha diritto di:</p>
              <ul>
                <li>Accedere ai propri dati personali.</li>
                <li>Rettificare o cancellare i propri dati.</li>
                <li>Limitare il trattamento dei dati.</li>
                <li>Opporsi al trattamento.</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>
                  Presentare reclamo all&apos;autorità di controllo competente.
                </li>
              </ul>
              <p>
                Per esercitare i propri diritti, l&apos;utente può contattare il
                titolare del trattamento ai riferimenti indicati al punto 2.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>9. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che il sito web invia al
                dispositivo dell&apos;utente per migliorarne l&apos;esperienza di
                navigazione. Alcuni cookie sono essenziali per il funzionamento
                del sito, mentre altri servono a raccogliere dati statistici o
                di marketing.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>10. Tipologie di cookie utilizzati</h2>
              <p>Nel nostro sito utilizziamo:</p>
              <ul>
                <li>
                  Cookie tecnici: necessari per il corretto funzionamento del
                  sito.
                </li>
                <li>
                  Cookie analitici: utilizzati per raccogliere informazioni
                  statistiche anonime sull&apos;utilizzo del sito.
                </li>
                <li>
                  Cookie di terze parti: utilizzati per integrare funzionalità
                  esterne, come la mappa interattiva fornita da Google Maps.
                </li>
              </ul>
            </div>
            <div className={styles.privacyBlock}>
              <h2>11. Gestione dei cookie</h2>
              <p>
                L&apos;utente può gestire le preferenze sui cookie attraverso le
                impostazioni del proprio browser o mediante il banner di
                gestione dei cookie presente sul Sito:
              </p>
              <ul>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647?hl=it">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies">
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">
                    Safari
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.privacyBlock}>
              <h2>12. Consenso ai cookie</h2>
              <p>
                All&apos;accesso al sito, l&apos;utente può fornire o negare il
                consenso ai cookie non essenziali tramite il banner di gestione
                dei cookie.
              </p>
            </div>
            <div className={styles.privacyBlock}>
              <h2>13. Modifiche alla seguente Policy</h2>
              <p>
                Il Titolare si riserva il diritto di aggiornare questa Privacy e
                Cookie Policy. Gli utenti saranno informati di eventuali
                modifiche tramite il Sito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
