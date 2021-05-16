import Head from 'next/head'
import home from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind CSS experiment</title>
        <meta name="description" content="Tailwind CSS experiment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={home.header}>
          <h1 className={home.title}>My first site using Tailwind CSS</h1>
          <p className={home.description}>Voluptate sint sit labore deserunt ea tempor consequat ex pariatur.</p>
        </div>

        <div className={home.content}>
          <p className={home.textBase}>Ad occaecat tempor commodo esse enim consectetur do tempor quis sit.</p>
          <p className={home.textBase}>Eu laborum sint consequat veniam excepteur excepteur id aliqua nisi reprehenderit tempor. Voluptate quis aute pariatur ut sit tempor mollit veniam esse. Consequat proident do labore amet irure nisi minim. Esse voluptate excepteur laborum consectetur commodo ad et. Ex eiusmod reprehenderit nostrud duis tempor. Veniam voluptate nulla et dolore commodo velit laboris. Nostrud mollit velit qui deserunt amet officia.</p>
          <p className={home.textBase}>Incididunt proident nostrud id nisi Lorem fugiat aute. Consequat ut culpa culpa esse nulla reprehenderit magna. Sint duis pariatur laboris qui irure. Do incididunt deserunt est irure do labore labore ullamco deserunt dolor eu labore. Veniam commodo nisi minim voluptate dolor irure laborum consectetur ea. Consequat et ad fugiat deserunt nulla consectetur est mollit ut duis consequat eu. Aliqua ea nostrud sunt labore Lorem pariatur.</p>
          <p className={home.textBase}>Do et tempor minim qui ut irure.</p>
        </div>
      </main>

      <footer className={home.footer}>
        <p className={home.about}>Feito por Marcos Lima.</p>
      </footer>
    </div>
  )
}
