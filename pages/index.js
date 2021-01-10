import client from '../src/apollo/client';
import { GET_MENUS } from '../src/queries/get-menus';
import Layout from '../src/components/layout/Layout';

export default function Index(data) {
    return <Layout data={data}>content</Layout>;
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_MENUS,
    });

    return {
        props: {
            data: {
                header: data?.header || [],
                menus: {
                    headerMenus: data?.headerMenus?.edges || [],
                    footerMenus: data?.footerMenus?.edges || [],
                },
                footer: data?.footer || [],
            },
        },
        revalidate: 1,
    };
}
