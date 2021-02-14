import React from "react";
import { Container } from "react-bootstrap";
import Copyright from "../Copyright/Copyright";
import FooterNavArea from "./FooterNavArea";
import TwitterArea from "./TwitterArea";

const FooterWrap = () => {
    return (
        <footer>
            <Container>
                <TwitterArea/>
                <FooterNavArea/>
                <Copyright/>
            </Container>
        </footer>
    );
}
export default FooterWrap;