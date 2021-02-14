import React from 'react';
import Image from "react-bootstrap/Image";

const Logo = props => {
    const {
        isLight = true,
        ...others
    } = props;

    return isLight
        ? <Image src={"/images/logo/logo-modern.png"} {...others} />
        : <Image src={"/images/logo/logo-modern.png"} {...others} />;
};

export default Logo;