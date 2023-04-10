import {type AppType} from "next/app"
import {Fira_Code} from "next/font/google"

import {api} from "~/utils/api"

import "~/styles/globals.css"

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
})

const MyApp: AppType = ({Component, pageProps}) => {
  return (
    <main className={`${fira.variable} font-mono`}>
      <Component {...pageProps} />
    </main>
  )
}

export default api.withTRPC(MyApp)
