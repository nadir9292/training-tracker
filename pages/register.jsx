import React from 'react'
import Layout from '@/components/Layout'
import { Button, Input, Option, Select } from '@material-tailwind/react'

const Register = () => {
  return (
    <Layout>
      <div>
        <section className="py-4 w-96 md:w-192 h-150 mx-auto mt-16 md:mt-32 font-montserrat text-offWhite text-center  rounded-xl overflow-auto">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
              REGISTER
            </h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
              <Input
                size="lg"
                color="white"
                label="Firstname"
                variant="standard"
                className="mx-auto"
                style={{
                  borderColor: '#FAF9F6',
                }}
              />
              <Input
                size="lg"
                label="Lastname"
                variant="standard"
                className="mx-auto"
                color="white"
                style={{
                  borderColor: '#FAF9F6',
                }}
              />
              <Input
                size="lg"
                color="white"
                variant="standard"
                label="mail"
                className="mx-auto"
                style={{
                  borderColor: '#FAF9F6',
                }}
              />
              <Select
                label="Select your gender"
                variant="standard"
                className="text-offWhite"
                style={{
                  borderColor: '#FAF9F6',
                  color: '#FAF9F6',
                }}
              >
                <Option>Male</Option>
                <Option>Female</Option>
                <Option>Other ???</Option>
              </Select>
              <Input
                color="white"
                variant="standard"
                label="Password"
                style={{
                  borderColor: '#FAF9F6',
                }}
              />
              <Input
                color="white"
                variant="standard"
                label="Confirme password"
                style={{
                  borderColor: '#FAF9F6',
                }}
              />
              <Button
                color="white"
                type="submit"
                size="lg"
                className="w-full bg-primaryButton border-2 border-border text-offWhite font-bold hover:scale-105"
              >
                Register
              </Button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Register
