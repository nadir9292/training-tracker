import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { Button, Input, Option, Select } from '@material-tailwind/react'
import SnackBar from '@/components/SnackBar'

const Register = () => {
  const [openSnakbar, setOpenSnakbar] = useState(false)
  const [body, setBody] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    country: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }))
  }

  const register = (event) => {
    event.preventDefault()
    setOpenSnakbar(true)
    setTimeout(() => setOpenSnakbar(false), 3000)
  }

  return (
    <Layout>
      <div>
        <section className="py-4 w-96 md:w-192 h-192 mx-auto mt-16 md:mt-32 font-montserrat text-offWhite text-center  rounded-xl overflow-auto border">
          <div className="grid grid-cols-1 gap-6">
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">
              REGISTER
            </h1>
            <form onSubmit={register}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
                <Input
                  onChange={handleChange}
                  name="firstName"
                  value={body.firstName}
                  size="lg"
                  color="white"
                  label="Firstname"
                  variant="static"
                  className="mx-auto md:border-b-2"
                  style={{
                    borderColor: '#FAF9F6',
                  }}
                />
                <Input
                  onChange={handleChange}
                  name="lastName"
                  value={body.lastName}
                  size="lg"
                  label="Lastname"
                  variant="static"
                  className="mx-auto  md:border-b-2"
                  color="white"
                  style={{
                    borderColor: '#FAF9F6',
                  }}
                />
                <Input
                  onChange={handleChange}
                  name="mail"
                  value={body.mail}
                  size="lg"
                  color="white"
                  variant="static"
                  label="mail"
                  className="mx-auto  md:border-b-2"
                  style={{
                    borderColor: '#FAF9F6',
                  }}
                />
                <Input
                  onChange={handleChange}
                  name="country"
                  value={body.country}
                  size="lg"
                  color="white"
                  variant="static"
                  label="Country"
                  className="mx-auto  md:border-b-2"
                  style={{
                    borderColor: '#FAF9F6',
                  }}
                />
                <Input
                  onChange={handleChange}
                  value={body.password}
                  name="password"
                  size="lg"
                  color="white"
                  variant="static"
                  label="Password"
                  className="mx-auto  md:border-b-2"
                  style={{
                    borderColor: '#FAF9F6',
                  }}
                />{' '}
                <Input
                  onChange={handleChange}
                  name="confirmPassword"
                  value={body.confirmPassword}
                  size="lg"
                  color="white"
                  variant="static"
                  label="Confirm password"
                  className="mx-auto  md:border-b-2"
                  style={{
                    borderColor: '#FAF9F6',
                  }}
                />
              </div>
              <Button
                color="white"
                type="submit"
                size="lg"
                className="w-80 bg-primaryBackground md:bg-primaryButton border-2 border-border text-offWhite font-bold hover:scale-105 mt-8"
              >
                Register
              </Button>
            </form>
          </div>
          <SnackBar open={openSnakbar} msg="mdr" error={true} />
        </section>
      </div>
    </Layout>
  )
}

export default Register
