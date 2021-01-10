import Head from 'next/head';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ data, children }) => {
    const { page, header, footer, menus } = data.data || {};

    return (
        <>
            <Head>
                <link rel="shortcut icon" href={header?.favicon} />
            </Head>
            <Header header={header} headerMenus={menus?.headerMenus} />
            {children}
            <Footer footer={footer} footerMenus={menus?.footerMenus} />
        </>
    );
};

export default Layout;
