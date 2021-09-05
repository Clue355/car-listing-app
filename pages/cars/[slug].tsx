type Cars = {
    paths: [{ params: { slug: string } }];
    fallback: boolean;
};

export default function Car(obj: { slug: string }) {
    return (
        <div>
            <h1>car {obj.slug}</h1>
        </div>
    );
}

export function getStaticProps(context: { params: any }) {
    const { slug } = context.params;
    return {
        props: {
            slug,
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
        ],
        fallback: false,
    };
}
