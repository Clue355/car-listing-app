import type { NextPage } from "next";
import { getData } from "../components/carapi/index";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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

export default function Home(props: { data }) {
    console.log(props.data);
    return (
        <div>
            <Head>
                <title>Car Listings</title>
                <meta name="car app" content="search for cars available in your area" />
                <link rel="icon" href="" />
            </Head>

            <main>
                <div>
                    <h1>Buy Cars</h1>
                    {props.data.records ? (
                        props.data.records.map((car) => (
                            <div key={car.id}>
                                <h3>
                                    {car.make}
                                    {car.model}
                                    {car.year}
                                </h3>
                                <Image src={car.thumbnailUrl} alt={car.make} width={100} height={100} />
                                <a href={car.clickoffUrl}>External Link</a>
                                <p>{car.price}</p>
                                <p>{car.mileage}</p>
                                <p>
                                    {car.state}, {car.city}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>no cars available</div>
                    )}
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
