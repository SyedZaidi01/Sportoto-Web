import Head from 'next/head';
import React, { Fragment } from 'react';
import "./Layout.module.scss";
import { Header } from './Header/Header';
import FooterWrap from './Footer/FooterWrap';

export const Layout = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title> Spor Toto Teşkilat Başkanlığı </title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header />
            {/* <SideBar /> */}
            

            {children}
            <FooterWrap/>
        </Fragment>
    )
};