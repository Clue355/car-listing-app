import { getData } from "../../components/carapi/index";

type Cars = {
    paths: [{ params: { slug: string } }];
    fallback: boolean;
};

export default function Car(props) {
    return <div>cars</div>;
}

export async function getStaticProps(context: { params: any }) {
    const { slug } = context.params;

    return {
        props: {
            data,
        },
    };
}

export function getStaticPaths(): Cars {
    return {
        paths: [
            {
                params: {
                    slug: "1",
                },
            },
            {
                params: {
                    slug: "2",
                },
            },
        ],
        fallback: false,
    };
}
