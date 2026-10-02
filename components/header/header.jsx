"use client";

import Image from "next/image";

import styles from "./header.module.css";

import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#quandoo-booking-widget", label: "Prenota" },
  { href: "#footer", label: "Contatti" },
];

function focusNavigationTarget(id) {
  const target = document.getElementById(id) ?? document.getElementById("main-content");
  if (target) {
    // Fragment destinations need to accept focus when their menu link is hidden.
    if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
}

export default function Header() {
  const pathname = usePathname();
  const [openMenuPath, setOpenMenuPath] = useState(null);
  const isMenuOpen = openMenuPath === pathname;
  const toggleRef = useRef(null);
  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);
  const focusAfterNavigationRef = useRef(null);

  if (openMenuPath !== null && openMenuPath !== pathname) {
    setOpenMenuPath(null);
  }

  useEffect(() => {
    if (focusAfterNavigationRef.current) {
      focusNavigationTarget(focusAfterNavigationRef.current);
      focusAfterNavigationRef.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 768px)");

    function handleViewportChange(event) {
      const activeElement = document.activeElement;
      if (event.matches) {
        if (desktopNavRef.current?.contains(activeElement)) {
          toggleRef.current?.focus({ preventScroll: true });
        }
        return;
      }

      if (
        activeElement === toggleRef.current ||
        mobileNavRef.current?.contains(activeElement)
      ) {
        const links = Array.from(desktopNavRef.current.querySelectorAll("a"));
        const matchingLink = links.find(
          (link) => link.getAttribute("href") === activeElement.getAttribute("href")
        );
        (matchingLink ?? links[0])?.focus({ preventScroll: true });
      }

      setOpenMenuPath(null);
    }

    mobileViewport.addEventListener("change", handleViewportChange);
    return () => mobileViewport.removeEventListener("change", handleViewportChange);
  }, []);

  function handleNavigation(href) {
    setOpenMenuPath(null);
    const destination = new URL(href, window.location.href);
    const targetId = destination.hash ? destination.hash.slice(1) : "main-content";

    if (destination.pathname !== pathname) {
      focusAfterNavigationRef.current = targetId;
      return;
    }

    focusNavigationTarget(targetId);
  }

  return (
    <header
      className={styles.header}
      id="header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          event.preventDefault();
          setOpenMenuPath(null);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpenMenuPath(null);
        }
      }}
    >
      <div className={`${styles.headerContainer} container`}>
        <Image
          className={styles.logoBrand}
          src={logo}
          alt="Ristorante Pizzeria Al Teatro - Logo"
        />
        <nav ref={desktopNavRef} className={styles.headerNav} aria-label="Principale">
          <ul>
            {navigationLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={pathname === href ? "page" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={toggleRef}
          type="button"
          className={styles.hamburger}
          aria-label={isMenuOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setOpenMenuPath((openPath) => openPath === pathname ? null : pathname)}
        >
          <span className={styles.bar} aria-hidden="true"></span>
          <span className={styles.bar} aria-hidden="true"></span>
          <span className={styles.bar} aria-hidden="true"></span>
        </button>
      </div>
      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        aria-label="Principale"
        hidden={!isMenuOpen}
        className={styles.headerNavMobile}
      >
        <ul>
          {navigationLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onNavigate={() => handleNavigation(href)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
