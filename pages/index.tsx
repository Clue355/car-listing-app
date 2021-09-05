import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Car Listings</title>
                <meta name="car app" content="search for cars available in your area" />
                <link rel="icon" href="" />
            </Head>

            <main>
                <div>
                    <div>
                        <h3>Queries</h3>
                    </div>

                    <div>
                        <h3>Links</h3>
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
