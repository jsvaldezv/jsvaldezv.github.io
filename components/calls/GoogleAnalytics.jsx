// GoogleAnalytics.tsx

import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-WWEP3Z3788`}
            />

            <Script id="" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-WWEP3Z3788');
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
