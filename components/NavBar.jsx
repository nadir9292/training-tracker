import {
  Navbar,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  IconButton,
  Button,
} from '@material-tailwind/react'
import {
  ArrowLeftOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  PlusIcon,
  ClipboardIcon,
  ChevronDoubleUpIcon,
  UserPlusIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [jwt, setJwt] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowWidth(window.innerWidth)

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      {windowWidth >= 960 ? (
        <Navbar
          className="flex items-center justify-center rounded-none bg-transparent max-w-screen-xl px-6 py-3 border-0 navbar"
          shadow={false}
        >
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="/"
              variant="h4"
              className="mr-4 cursor-pointer md:hidden py-1.5 hover:scale-110 text-offWhite font-anton"
            >
              TRAINING{' '}
              <span className="italic text-sm font-orbitron underline">
                tracker
              </span>
            </Typography>
          </div>
          <div className="flex justify-center border-2 rounded-xl ml-4">
            <Button
              className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110"
              variant="text"
            >
              <span>
                <PlusIcon className="h-6 w-6 mr-2" />
              </span>
              training
            </Button>
            <Button
              className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110"
              variant="text"
            >
              <span>
                <ClipboardIcon className="h-6 w-6 mr-2" />
              </span>
              VIEW TRAINING
            </Button>
            <Button
              className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110"
              variant="text"
            >
              <span>
                <ChartBarSquareIcon className="h-6 w-6 mr-2" />
              </span>
              STATS
            </Button>
          </div>
          <div className="flex justify-center border-2 rounded-xl ml-4">
            <Button
              className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110"
              variant="text"
            >
              LOGIN
            </Button>
            <Button
              className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110"
              variant="text"
            >
              REGISTER
            </Button>
            <Button
              className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110"
              variant="text"
            >
              <span>
                <AdjustmentsHorizontalIcon className="h-6 w-6 mr-2" />
              </span>
              SETTINGS
            </Button>
          </div>
        </Navbar>
      ) : (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 navbar rounded-none bg-transparent border-0">
          <div className="flex items-center justify-between">
            <div className="flex justify-between w-full items-center">
              <IconButton className="bg-transparent shadow-none">
                <PlusIcon className="h-10 w-10" />
              </IconButton>
              <IconButton className="bg-transparent shadow-none">
                <ChartBarSquareIcon className="h-10 w-10" />
              </IconButton>
              <Popover
                animate={{
                  mount: { scale: 1, y: -10 },
                  unmount: { scale: 0, y: 100 },
                }}
                placement="top"
              >
                <PopoverHandler>
                  <ChevronDoubleUpIcon
                    className="w-10 h-10 text-offWhite cursor-pointer hover:scale-110 rounded-lg"
                    onClick={() => setOpenNav(!openNav)}
                  />
                </PopoverHandler>
                <PopoverContent className="">
                  <NavList />
                </PopoverContent>
              </Popover>
              {!jwt ? (
                <>
                  <Link href="/login">
                    <IconButton className="bg-transparent shadow-none">
                      <UserCircleIcon className="h-6 w-6 mx-auto" />
                      <span className="font-montserrat text-xs text-center">
                        LOGIN
                      </span>
                    </IconButton>
                  </Link>
                  <Link href="/register">
                    <IconButton className="bg-transparent shadow-none">
                      <UserPlusIcon className="h-6 w-6 mx-auto" />
                      <span className="font-montserrat text-xs">REGISTER</span>
                    </IconButton>
                  </Link>
                </>
              ) : (
                <>
                  <IconButton className="bg-transparent shadow-none">
                    <ClipboardIcon className="h-10 w-10" />
                  </IconButton>
                  <Link href="/my-profile" className="flex items-center ">
                    <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                      className="border h-10 w-10 shadow-2xl"
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </Navbar>
      )}
    </div>
  )
}

export const NavList = () => {
  return (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-offWhite">
      <Typography
        as="li"
        variant="paragraph"
        className="py-2 font-bold text-black text-center"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          <span>
            <AdjustmentsHorizontalIcon className="h-6 w-6 mr-3" />
          </span>
          SETTINGS
        </Link>
      </Typography>
      <hr />
      <Typography
        as="li"
        variant="paragraph"
        color="red"
        className="py-2 font-bold text-center"
      >
        <Link href="/" className="flex items-center">
          <span>
            <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-3" />
          </span>
          LOG OUT
        </Link>
      </Typography>
    </ul>
  )
}

export default NavBar
