"use client"

import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { usePathname } from 'next/navigation'

export default function Navbar(props: any) {

  const pathname = usePathname()

  const isMainPage = pathname === '/';

  // Hide the logo on the main page
  if (isMainPage) {
    return null;
  }

  return (
    <Container>
      <nav>
        <>
          <div className="flex flex-wrap justify-center md:flex-nowrap md:gap-10">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <Image
                  src="/pictoZeal.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full"
                />
              </Link>
              <Link href="/">
                <span className="block text-center">
                  PictoZeal
                </span>
              </Link>
            </div>
          </div>
        </>
      </nav>
    </Container>
  );
}
