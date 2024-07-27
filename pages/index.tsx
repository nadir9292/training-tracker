import getConfig from "next/config";
import Layout from "@/components/Layout";

const { publicRuntimeConfig } = getConfig() || {};
const { site } = publicRuntimeConfig || {};
const { name } = site || {};

const Home = () => {
  return (
    <Layout>
      <div className="bg-cover h-screen bg-mobile md:bg-normal overflow-auto">
        <section className="py-4 w-80 md:w-192 mx-auto my-8 ">
          <h1 className="text-center font-anton text-offWhite text-45xl md:text-5xl font-bold -mb-6 md:-mb-16">
            TRAINING
          </h1>
          <h1 className="text-center font-orbitron italic text-offWhite text-3xl md:text-45xl  font-bold">
            .TRACKER
          </h1>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

// className="border rounded-2xl py-4 w-80 md:w-192 mx-auto my-8 backdrop-blur-xl"
