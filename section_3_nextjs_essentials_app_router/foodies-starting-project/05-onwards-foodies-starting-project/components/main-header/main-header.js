import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLinks from "@/components/nav-links.js/nav-links";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image
                        src={logoImg}
                        alt="A Plate with Food on It."
                        priority
                    />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLinks href="/meals">Browse Meals</NavLinks>
                        </li>
                        <li>
                            <NavLinks href="/community">Foodies Community</NavLinks>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}