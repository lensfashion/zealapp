"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <Disclosure>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button>
            Do you offer technical support?
            <ChevronRightIcon className={open ? 'rotate-90 transform' : ''} />
          </Disclosure.Button>
          <Disclosure.Panel>No</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}