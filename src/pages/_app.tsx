import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"]
});

export default function App({ Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>

  )
}
