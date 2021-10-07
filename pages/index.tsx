import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import listings from "../components/car-listings/index";
import Listings from "../components/car-listings/index";
import { proplistings } from "../interfaces";

export async function getServerSideProps() {
    const data = await fetch("https://auto.dev/api/listings?state=TX", {
        headers: {
            Authorization: `Bearer ${process.env.apiKey}`,
        },
    }).then((res) => res.json());
    return {
        props: {
            data,
        },
    };
}

export default function Home(props: proplistings) {
    // console.log(props.data.records);
    return (
        <div>
            <Head>
                <title>Car Listings</title>
                <meta name="car app" content="search for cars available in your area" />
                <link rel="icon" href="" />
            </Head>

            <main>
                <div>
                    <h1>CarListings</h1>
                    <Listings
                        data={props.data}
                        props={{
                            data: {
                                records: [],
                            },
                        }}
                    />
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
