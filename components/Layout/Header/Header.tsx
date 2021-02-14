import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { faBars, faPhoneAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { Col, Navbar } from "react-bootstrap";
import SocialMediaIcons from "../../Common/SocialMediaIcon";
import { NavHeader } from "../NavHeader/NavHeader";
import TopStickyMenu from "../TopStickyMenu/TopStickyMenu";
// import '../Layout.module.scss';

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  let pageGap: number;

  useEffect(() => {
    pageGap = (window.screen.availHeight / 100) * 1;
    window.addEventListener("scroll", () => {
      window.pageYOffset > pageGap ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <Fragment>
      <NavHeader isSticky={isSticky} />
      <TopStickyMenu isSticky={isSticky} />
    </Fragment>
  );
};
