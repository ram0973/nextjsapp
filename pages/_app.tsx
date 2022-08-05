import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from "next/head";
import ArticlesWidget from "../components/articles/ArticlesWidget";
import Nav from "../components/nav/Nav";
export default function NextApp({Component, pageProps}: AppProps) {
  return (
    <div className="container mx-auto px-10">
      {/*<p>{ JSON.parse(window.localStorage.getItem('user')).email }</p>*/}

      <Nav />
      <main className="">
        <article className="">
          <Component {...pageProps} />
        </article>
        <aside className="">
          <ArticlesWidget />
        </aside>
      </main>
      <footer>Made with Java - Spring - React - NextJS</footer>
    </div>
  )
}