import styles from './maintenance.module.css';

import Image from 'next/image';

import logo from '@/assets/logo.png';

export default function Maintenance() {
    return (
        <main className={styles.maintenance}>
            <Image src={logo} alt="Ristorante Pizzeria Al Teatro - Logo" />
            <h1>Il sito web è <br /> in aggiornamento!</h1>
        </main>
    )
}