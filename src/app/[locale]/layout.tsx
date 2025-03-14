// styles
import "../../styles/globals.css";
// types
import { type RootLayoutPropsType } from "@/types/props-types";
import { type LangType } from "@/types/db-types";
// fonts
import { baskervVille, baskervVilleAzeri, baskervVilleCyrillic } from "@/fonts/fonts";
// modules
import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
    title: "Dolce Far Niente",
    description: "Dolce Far Niente Menu",
};

export default async function RootLayout({ children, params: { locale } }: RootLayoutPropsType) {
    if (!routing.locales.includes(locale as LangType)) notFound();

    const classes = {
        html: `scroll-smooth`,
    };

    if (locale === "ru") classes.html += ` ${baskervVilleCyrillic.className}`;
    else if (locale === "az") classes.html += ` ${baskervVilleAzeri.className}`;
    else classes.html += ` ${baskervVille.className}`;

    const messages = await getMessages();

    return (
        <html className={classes.html} lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
