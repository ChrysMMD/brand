export type ContactLink = {
  label: string;
  value: string;
  href: string;
  iconSrc: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "hello.astrid@hotmail.com",
    href: "mailto:hello.astrid@hotmail.com",
    iconSrc: "/images/contact/email.png",
  },
  {
    label: "Phone",
    value: "+45 21 27 26 70",
    href: "tel:+4521272670",
    iconSrc: "/images/contact/mobile.png",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/astrid",
    href: "https://www.linkedin.com/in/chrystal-j%C3%B8rgensen/",
    iconSrc: "/images/contact/linkedin.svg",
  },
  {
    label: "GitHub",
    value: "github.com/astrid",
    href: "https://github.com/ChrysMMD",
    iconSrc: "/images/contact/github.svg",
  },
];
