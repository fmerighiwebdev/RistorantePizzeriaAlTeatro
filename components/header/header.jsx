"use client";

import Image from "next/image";

import styles from "./header.module.css";

import logo from "@/assets/logo.png";
import Link from "next/link";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header} id="header">
      <div className={`${styles.headerContainer} container`}>
        <Image
          className={styles.logoBrand}
          src={logo}
          alt="Ristorante Pizzeria Al Teatro - Logo"
        />
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/booking">Prenota</Link>
            </li>
            <li>
              <Link href="#footer">Contatti</Link>
            </li>
          </ul>
        </nav>
        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className={styles.headerNavMobile}
          >
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/booking">Prenota</Link>
              </li>
              <li>
                <Link href="#footer">Contatti</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
