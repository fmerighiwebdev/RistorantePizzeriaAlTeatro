import styles from "./page.module.css";

import Image from "next/image";

export default function Menu() {
  return (
    <section className={styles.menuPage}>
      <h1 className={styles.menuTitle}>Menu</h1>

      <div className={styles.navBtns}>
        <a href="#menu_ita" className={styles.navBtn}>
          Menu Italiano
        </a>
        <a href="#menu_ind" className={styles.navBtn}>
          Menu Indiano
        </a>
        <a href="#pizzeria" className={styles.navBtn}>
          Pizzeria
        </a>
      </div>

      <div className="container">
        <div className={styles.menuCard}>
          <div className={styles.info}>
            <p>
              <em>
                *è disponibile per la consultazione il registro degli allergeni
                (in fondo)
              </em>
            </p>
          </div>
          <div className={`${styles.cardTitle}`}>
            <p id="menu_ita">Menu Italiano</p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Antipasti di pesce</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata di frutti di mare</p>
            </div>
            <div className={styles.itemPrice}>
              <p>14.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata di polipo</p>
              <p className={styles.itemDesc}>
                <em>Polipo con patate, capperi, olive nere e prezzemolo</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>15.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Impepata di cozze / Impepata di vongole
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>11.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Antipasti</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Mozzarella Caprese</p>
            </div>
            <div className={styles.itemPrice}>
              <p>6.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Bruschettine alla burrata pugliese con pomodorini freschi e
                basilico
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>7.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Prosciutto crudo e mozzarella</p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Prosciutto crudo e melone (in stagione)
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Primi Piatti di Pesce</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Spaghetti allo scoglio</p>
            </div>
            <div className={styles.itemPrice}>
              <p>14.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Spaghetti alle cozze / alle vongole
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Tagliatelle ai gamberi e polipo</p>
            </div>
            <div className={styles.itemPrice}>
              <p>13.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Risotto ai frutti di mare</p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.50€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Primi Piatti</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Pasta al pomodoro, al ragù, all&apos;arrabbiata
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>8.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Spaghetti aglio, olio e peperoncino
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>8.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Spaghetti alla carbonara</p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Penne ai quattro formaggi</p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Tagliatelle al ragù di cinghiale / cervo
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Tagliatelle ai funghi porcini</p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Spaghetti al pesto</p>
            </div>
            <div className={styles.itemPrice}>
              <p>8.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Gnocchi di patate fatti in casa ai funghi porcini
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Risotto ai funghi procini / zafferano
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Lasagne alla bolognese</p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Secondi Piatti di Pesce</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Fritto misto di pesce</p>
            </div>
            <div className={styles.itemPrice}>
              <p>16.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Calamari fritti</p>
            </div>
            <div className={styles.itemPrice}>
              <p>14.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Filetto di trota salmonata ai ferri
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>15.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Branzino alla griglia / orata alla griglia
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>15.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Secondi Piatti</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Wurstel e patatine fritte</p>
            </div>
            <div className={styles.itemPrice}>
              <p>8.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Cotoletta alla milanese</p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Petto di pollo ai ferri</p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Bistecca di manzo ai ferri</p>
            </div>
            <div className={styles.itemPrice}>
              <p>13.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Tagliata di manzo con rucola e scaglie di grana
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>15.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Tagliata di pollo</p>
            </div>
            <div className={styles.itemPrice}>
              <p>11.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Burger con patatine fritte</p>
            </div>
            <div className={styles.itemPrice}>
              <p>14.00€</p>
            </div>
          </div>
          <div className={styles.advice}>
            <p>TUTTI I SECONDI VENGONO SERVITI CON UN CONTORNO A SCELTA</p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Contorni</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Patatine fritte</p>
            </div>
            <div className={styles.itemPrice}>
              <p>4.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Verdura cotta</p>
            </div>
            <div className={styles.itemPrice}>
              <p>4.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata mista</p>
            </div>
            <div className={styles.itemPrice}>
              <p>4.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Patate rosti</p>
            </div>
            <div className={styles.itemPrice}>
              <p>4.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Patate al forno</p>
            </div>
            <div className={styles.itemPrice}>
              <p>4.50€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Insalate</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata mista</p>
              <p className={styles.itemDesc}>
                <em>Insalata verde, radicchio, carote, mais, pomodori</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>6.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata mare monti</p>
              <p className={styles.itemDesc}>
                <em>
                  Insalata mista, tonno, prosciutto, uova sode, olive nere
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>8.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata della casa</p>
              <p className={styles.itemDesc}>
                <em>Insalata mista, mozzarella di bufala e prosciutto</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Insalata al salmone</p>
              <p className={styles.itemDesc}>
                <em>Insalata mista con salmone</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.50€</p>
            </div>
          </div>
          <div className={`${styles.cardTitle} ${styles.mt}`}>
            <p id="menu_ind">Menu Indiano</p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Antipasti</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Vegetable Pakora</p>
              <p className={styles.itemDesc}>
                <em>Misto di verdure fritte in pastella di ceci</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>7.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Panir Pakora</p>
              <p className={styles.itemDesc}>
                <em>
                  Cubetti di formaggio fresco fritti in pastella di farina di
                  ceci
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>7.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Onion rings</p>
              <p className={styles.itemDesc}>
                <em>Anelli di cipolla fritti in pastella di ceci</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>6.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Chicken Pakora</p>
              <p className={styles.itemDesc}>
                <em>Spezzatino di pollo fritto in pastella di ceci</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>7.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Jheenga Pakora</p>
              <p className={styles.itemDesc}>
                <em>Code di gambero fritte in pastella di farina di ceci</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Misto Pakora</p>
              <p className={styles.itemDesc}>
                <em>Assaggio misto di antipasti</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>9.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Biryani</em>
            </p>
          </div>
          <div className={styles.advice}>
            <p>RISO CON SPEZIE INDIANE, CARNI E VERDURE MISTE</p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Vegetable Biryani (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>
                  Riso basmati con verdure di stagione e frutta secca speziato
                  in stile nord indiano
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Chicken Biryani</p>
              <p className={styles.itemDesc}>
                <em>
                  Riso basmati con pollo speziato allo zafferano, uvetta e
                  mandorle
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>13.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Jheenga Biryani</p>
              <p className={styles.itemDesc}>
                <em>
                  Riso basmati con code di gambero, aglio, uvetta e mandorle
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>14.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Taj Biryani</p>
              <p className={styles.itemDesc}>
                <em>Riso basmati con agnello speziato, uvetta e mandorle</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Specialità a Base di Agnello</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Lamb Curry</p>
              <p className={styles.itemDesc}>
                <em>Spezzatino di agnello cotto in salsa curry piccante</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>11.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Lamb Saag</p>
              <p className={styles.itemDesc}>
                <em>
                  Spezzatino di agnello cotto in crema di spinaci speziati
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Specialità a Base di Manzo e Vitello</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Beef curry</p>
              <p className={styles.itemDesc}>
                <em>Spezzatino di vitello cotto in salsa currry piccante</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>11.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Beef Vindaloo (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>
                  Carne di vitello in salsa Vindaloo (agrodolce), cipolle e
                  peperoni
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Beef Saag</p>
              <p className={styles.itemDesc}>
                <em>
                  Spezzatino di vitello speziato, cotto in crema di spinaci
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.advice}>
            <p>
              TUTTI I PIATTI COTTI IN SALSA VENGONO SERVITI CON RISO BASMATI
            </p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Specialità a Base di Pollo</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Punjabi Chicken Curry</p>
              <p className={styles.itemDesc}>
                <em>Spezzatino di pollo cotto in salsa curry piccante</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Chicken Tikka Masala</p>
              <p className={styles.itemDesc}>
                <em>
                  Pollo preparato con spezie e salsa orientale &quot;Methi&quot;
                  con foglie di fieno greco
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Chicken Jalfreji</p>
              <p className={styles.itemDesc}>
                <em>
                  Spezzatino di pollo con spezie &quot;Jalfreji&quot;, peperoni,
                  cipolle e pomodori freschi
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Chicken Tikka Sagwala</p>
              <p className={styles.itemDesc}>
                <em>Spezzatino di pollo speziato cotto in cream di spinaci</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Chicken Pudina</p>
              <p className={styles.itemDesc}>
                <em>Spezzatino di pollo in salsa menta e yogurt</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>11.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Mughlai Chicken (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>
                  Pollo preparato all&apos;antica ricetta Maraja in salsa curry
                  cremosa alle mandorle
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Chicken Chillies (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>
                  Straccetti di pollo in salsa chilli piccante e peperoni,
                  cipolle
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>13.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Butter Chicken</p>
              <p className={styles.itemDesc}>
                <em>Pollo in salsa cremosa con burro, pomodoro e panna</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.50€</p>
            </div>
          </div>
          <div className={styles.advice}>
            <p>
              TUTTI I PIATTI COTTI IN SALSA VENGONO SERVITI CON RISO BASMATI
            </p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Specialità Vegetariane</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Dal Makhni</p>
              <p className={styles.itemDesc}>
                <em>Lenticchie speziate in salsa curry</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>10.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Mix Vegetable</p>
              <p className={styles.itemDesc}>
                <em>Verdure miste cotte in salsa curry</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>11.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Vegetable Kofta Malai (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>Polpettine di verdure in salsa cremosa al curry</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Palak Panir</p>
              <p className={styles.itemDesc}>
                <em>Crema di spinaci e formaggio fatto in casa</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Panir Chillies</p>
              <p className={styles.itemDesc}>
                <em>
                  Cubetti di formaggio fritti in salsa chilli piccante, peperoni
                  e cipolle
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>14.00€</p>
            </div>
          </div>
          <div className={styles.advice}>
            <p>
              TUTTI I PIATTI COTTI IN SALSA VENGONO SERVITI CON RISO BASMATI
            </p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Specialità a Base di Pesce</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Jheenga Curry</p>
              <p className={styles.itemDesc}>
                <em>Code di gambero cotte in salsa curry piccante</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>13.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Jheenga Karahi (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>Code di gambero con verdure cotte in salsa curry</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>12.50€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>
                Jheenga Chillies (nostra specialità)
              </p>
              <p className={styles.itemDesc}>
                <em>
                  Code di gambero in salsa chilli piccante, peperoni e cipolle
                </em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>15.00€</p>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Pane Indiano</em>
            </p>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Naan</p>
              <p className={styles.itemDesc}>
                <em>Semplice / all&apos;aglio / al burro / al formaggio</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>3.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Riso basmati bianco</p>
            </div>
            <div className={styles.itemPrice}>
              <p>3.00€</p>
            </div>
          </div>
          <div className={styles.cardContentSingle}>
            <div className={styles.itemInfo}>
              <p className={styles.itemName}>Cheese Naan</p>
              <p className={styles.itemDesc}>
                <em>Al formaggio</em>
              </p>
            </div>
            <div className={styles.itemPrice}>
              <p>4.00€</p>
            </div>
          </div>
          <div className={styles.advice}>
            <p>
              TUTTI I PIATTI COTTI IN SALSA VENGONO SERVITI CON RISO BASMATI
            </p>
          </div>
          <div className={styles.advice}>
            <p>
              OGNI PIATTO PUO ESSERE PREPARATO PIU O MENO PICCANTE A PIACIMENTO
              DEL CLIENTE
            </p>
          </div>
          <div className={`${styles.cardTitle} ${styles.mt}`}>
            <p id="pizzeria">Pizzeria</p>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Pizze Tradizionali</em>
            </p>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Calzone</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, prosciutto e funghi</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Margherita</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro e mozzarella</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>6.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Marinara</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, aglio e origano</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>5.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Prosciutto</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella e prosciutto cotto</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Delicata</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, bresaola, rucola e scaglie di grana
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Prosciutto e funghi</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, prosciutto cotto e funghi</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Salamino</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella e salamino piccante</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Diavola</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, salamino piccante, olive e peperoni
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Tonno e cipolle</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, tonno e cipolle</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Capricciosa</p>
                <p className={styles.itemDesc}>
                  Pomodoro, mozzarella, prosciutto cotto, funghi e carciofi
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Napoli</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, acciughe e origano</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>4 Stagioni</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi e
                    olive nere
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Ai 4 formaggi</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, Gorgonzola, ricotta e grana</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Bimbo</p>
                <p className={styles.itemDesc}>
                  <em>Pomdoro, mozzarella, wurstel e patatine fritte</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Buonissima</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, Gorgonzola, noci e rucola</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Baby</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>4.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Pizze Speciali</em>
            </p>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Millegusti</p>
                <p className={styles.itemDesc}>
                  <em>Ad ispirazione del pizzaiolo</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Al teatro</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, porcini, brié, bresaola e rucola
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Tirolese</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, finferli, salsiccia e speck</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Francese</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, brié e speck</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Rustica</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, finferli, pancetta, uova e grana
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Gamberetti</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, gamberetti, zucchine e aglio</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Principessa</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, Gorgonzola e prosciutto crudo</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Pizzaiola</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, tonno, cipolle, asparagi e uova</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Bomba</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, salamino, cipolla, peperoncino e olive
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Bufala</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella di bufala, pomodorini freschi e rucola
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Mare e monti</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, gamberetti, prosciutto cotto e rucola
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Ai 4 salumi</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, salamino, wurstel, pancetta e
                    salsiccia
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Italia</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, zucchine e salamino piccante</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Saporita</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, gorgonzola e salamino</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Bavarese</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, porcini, Gorgonzola e speck</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Frutti di mare</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, aglio e frutti di mare</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Contessa</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella di bufala e prosciutto crudo</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Quadrata</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, zucchine, brié e speck</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Pizze alle Verdure</em>
            </p>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Vegetariana</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, melanzane, zucchine, peperoni,
                    spinaci, radicchio e Grana
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Bellissima</p>
                <p className={styles.itemDesc}>
                  <em>
                    Pomodoro, mozzarella, carciofi, peperoni e scaglie di Grana
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Spinaci e ricotta</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella, spinaci e ricotta</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Americana</p>
                <p className={styles.itemDesc}>
                  <em>Pomodoro, mozzarella e patatine fritte</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardSubtitle}>
            <p>
              <em>Pizze Bianche</em>
            </p>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Blumoon</p>
                <p className={styles.itemDesc}>
                  <em>Mozzarella, melanzane, salamino, Grana e origano</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>9.00€</p>
              </div>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>VIP</p>
                <p className={styles.itemDesc}>
                  <em>Mozzarella, porcini, asiago e prosciutto</em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>8.50€</p>
              </div>
            </div>
          </div>
          <div className={styles.cardContentDouble}>
            <div className={styles.menuItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Ortolana</p>
                <p className={styles.itemDesc}>
                  <em>
                    Mozzarella, cipolle, olive, funghi, zucchine e asparagi
                  </em>
                </p>
              </div>
              <div className={styles.itemPrice}>
                <p>10.00€</p>
              </div>
            </div>
          </div>
          <div className={styles.advice}>
            <p>OGNI AGGIUNTA - da 1.00€ a 3.00€</p>
          </div>
        </div>
        <div class={`${styles.cardSubtitle} ${styles.mtXxl}`}>
          <p>
            <em>Sostanze o prodotti che provocano allergie o intolleranze</em>
          </p>
        </div>
        <div class={styles.advice}>
          <p>
            PER LA SPECIFICA, SIETE PREGATI DI RIVOLGERVI ALLO STAFF DEL
            RISTORANTE
          </p>
        </div>
        <div class={styles.cardContentSingle}>
          <div class={styles.itemInfo}>
            <ol class={styles.ordList}>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Cereali contenenti glutine, cioè: grano, segale, orzo, avena,
                farro, kamut o i loro ceppi ibridati e prodotti derivati
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Crostacei e prodotti a base di crostacei
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Uova e prodotti a base di uova
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Pesce e prodotti a base di pesce
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Arachidi e prodotti a base di arachidi
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Soia e prodotti a base di soia
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Latte e prodotti a base di latte (incluso lattosio)
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Frutta guscio (mandorle, nocciole, noci, noci acagiù, noci di
                pecan, noci del brasile, pistacchi, noci macadamia o noci del
                quiinsland) e i loro prodotti
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Sedano e prodotti a base di sedano
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Senape e prodotti a pase di senape
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Semi di sesamo e prodotti a base di semi di sesamo
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Anidride solforosa e solfiti in concentrazioni superiori a
                10mg/kg o 10mg/l in termini di SO 2 tot.
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Lupini e prodotti a base di lupini
              </li>
              <li class={`${styles.itemName} ${styles.mt}`}>
                Molluschi e prodotti a base di molluschi
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
