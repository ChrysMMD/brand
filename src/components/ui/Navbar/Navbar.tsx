"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/layouts/Container/Container";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <Container size="xl">
        <nav className={styles.nav} aria-label="Primary navigation">
          <ul className={styles.list}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={[styles.link, isActive ? styles.active : ""]
                      .filter(Boolean)
                      .join(" ")}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
