import {
  Navbar,
  Collapse,
  Typography,
  CardBody,
  Card,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const NavList = () => {
  return (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-offWhite">
      <Typography as="li" variant="small" className="py-4 font-bold text-black">
        <Link
          href="/my-profile"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          My profile
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="py-4 font-bold text-black">
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          New training
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="py-4 font-bold text-black">
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
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowWidth(window.innerWidth)

    handleWindowResize() // Set initial width
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  if (!mounted) {
    return null // Render nothing while mounting
  }

  return (
    <div>
      {windowWidth >= 960 ? (
        <Navbar
          className="mx-auto max-w-screen-xl px-6 py-3 bg-transparent navbar"
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
            {!openNav ? (
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
      ) : (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 navbar rounded-none bg-transparent border-0">
          <div className="flex items-center justify-between">
            <div className="flex justify-between">
              <Button
                variant="outlined"
                size="sm"
                className="bg-transparent border-offWhite mx-2"
              >
                <Typography className="font-bold text-offWhite">
                  toto
                </Typography>
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="bg-transparent border-offWhite mx-2"
              >
                <Typography className="font-bold text-offWhite">
                  toto
                </Typography>
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="bg-transparent border-offWhite mx-2"
              >
                <Typography className="font-bold text-offWhite">
                  toto
                </Typography>
              </Button>
            </div>
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              placement="top-start"
            >
              <PopoverHandler>
                <Bars3Icon
                  className="w-10 h-10 text-offWhite cursor-pointer hover:scale-110"
                  onClick={() => setOpenNav(!openNav)}
                />
              </PopoverHandler>
              <PopoverContent className="z-50 max-w-[26rem] mt-4">
                <NavList />
              </PopoverContent>
            </Popover>
          </div>
        </Navbar>
      )}
    </div>
  )
}

export default NavBar
