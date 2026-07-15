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
    iconSrc: "/images/contact/mail.svg",
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
