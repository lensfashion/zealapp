"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";

export default function Navbar(props: any) {
  const menu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const mobilemenu = [...menu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
               <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                {/* <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                 <Image
                    src="/pictoZeal.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full"
                  />
                </div> */}
                <div className="flex w-full items-center justify-between md:w-auto">
                  
                    
                  <Link href="/" className="w-28 dark:hidden">            
                  <Image
                    src="/pictoZeal.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full"
                  />     
                  </Link>   
                  <Image
                    src="/pictoZeal.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full"
                  />      
                  
                  <Link href="/" className="hidden w-28 dark:block">           
                      <span className="block text-center">
                        PictoZeal
                      </span>
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="hidden w-full flex-col items-center justify-end md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {menu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium hover:text-blue-500 "
                          >
                          <span> {item.label}</span>
                        </Link>
                    </Fragment>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="-ml-4 mt-4 flex w-full flex-col items-center justify-end md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                     
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-sm font-medium hover:text-blue-500"
                         >
                          {item.label}
                        </Link>
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}
