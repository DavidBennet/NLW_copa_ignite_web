import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@400;500;700&display=swap" rel="stylesheet"/>

            </Head>
            <body className="bg-[#121214] text-white bg-app bg-cover bg-no-repeat">
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}