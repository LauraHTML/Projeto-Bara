import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navSections = [
  {
    title: "Product",
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

export const NavMenu = (props) => (
  <>
  {navSections.map(({ title, links }) => (
              <NavigationMenu key={title} {...props}>
                <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
                  {links.map(({ title, href }) => (
                    <NavigationMenuItem key={title} className=" rounded-md m-0">
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={href} className="text-background">
                        {title}
                      </Link>
                      </NavigationMenuLink>
                      
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            ))}
  </>

);
