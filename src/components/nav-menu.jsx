// nav-menu.jsx - VERSÃO SIMPLIFICADA
import Link from "next/link";

const navSections = [
  {
    title: "navegação",
    links: [
      {
        title: "Conheça",
        href: "/",
      },
      {
        title: "Aplique na sua escola",
        href: "/baraNaSuaEscola",
      },
      {
        title: "Fale Conosco",
        href: "/contato",
      },
      {
        title: "Invista",
        href: "/invistaNaBara",
      },
    ],
  }
];

export const NavMenu = ({ className, orientation = "horizontal" }) => {
  const isVertical = orientation === "vertical";
  
  return (
    <nav className={className}>
      {navSections.map(({ title, links }) => (
        <ul 
          key={title}
          className={`flex gap-1 ${isVertical ? 'flex-col items-start' : 'items-center'}`}
        >
          {links.map(({ title, href }) => (
            <li key={title}>
              <Link 
                href={href}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-background hover:bg-primary-foreground/10 transition-colors"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};