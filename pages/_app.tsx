import '../styles/globals.css'

export default function NextApp({ Component, pageProps }) {
  return (  
  <div className="container mx-auto px-4">
    <header>Header</header>
    <nav>Navigation</nav>
    <main className="">
      <article className="">
        <Component {...pageProps} />
      </article>
      <aside className="">Sidebar</aside>
    </main>
    <footer>Footer</footer>
  </div>
  )
}