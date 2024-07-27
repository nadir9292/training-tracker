import {
  Navbar,
  Collapse,
  Typography,
  CardBody,
  Card,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const NavList = () => {
  return (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-bold text-offWhite"
      >
        <Link
          href="/my-profile"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          My profile
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-bold text-offWhite"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          New training
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-bold text-offWhite"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          test
        </Link>
      </Typography>
    </ul>
  )
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div>
      <Navbar
        className="mx-auto max-w-screen-xl px-6 py-3 bg-transparent"
        blurred={false}
        shadow={false}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 hover:scale-125 text-offWhite font-anton"
          >
            TRAINING{' '}
            <span className="italic text-sm font-orbitron underline">
              tracker
            </span>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          {openNav ? (
            <Bars3Icon
              className="w-10 h-10 text-offWhite cursor-pointer hover:scale-110"
              onClick={() => setOpenNav(!openNav)}
            />
          ) : (
            <XMarkIcon
              className="w-10 h-10 text-offWhite cursor-pointer hover:scale-110"
              onClick={() => setOpenNav(!openNav)}
            />
          )}
        </div>
        <Collapse open={openNav} className="rounded-xl">
          <Card className="my-4 mx-auto w-8/12">
            <CardBody>
              <Typography>
                Use our Tailwind CSS collapse for your website. You can use if
                for accordion, collapsible items and much more.
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
