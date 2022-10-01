import type { NextPage } from "next";
import { VFC } from "react";
import { Keyboard } from "../components/keyboard/Keyboard";
import { Layout } from "../components/layout/Layout";

const Home: VFC = () => {
  return (
    <Layout>
      <Keyboard />
    </Layout>
  );
};

export default Home;
