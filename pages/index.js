import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Concatenize</title>
        <meta name="description" content="Aqui a Gente Trabalha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo a Concatenize!
        </h1>
        <div className={styles.grid}>
          <a href="/integrantes" className={styles.card}>
            <h2>Integrantes &rarr;</h2>
            <p>Saiba mais sobre nossos ilustres desenvolvedores.</p>
          </a>

          <a href="/pix" className={styles.card}>
            <h2>Lista de chaves Pix &rarr;</h2>
            <p>Pode nos mandar dinheiro à vontade :D </p>
          </a>

          <a
            href="https://www.youtube.com/channel/UCDJpp6iGI5kYgiJddDHdlEg"
            className={styles.card}
          >
            <h2>FanPage de Jhon &rarr;</h2>
            <p>Calma gente, só tem música.</p>
          </a>

          <a
            href="https://theuselessweb.com"
            className={styles.card}
          >
            <h2>Sites Inúteis&rarr;</h2>
            <p>
              Eita, fiquei sem ideia do que colocar nessa demo, então vai uma página engraçada.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By {' '}
          <span className={styles.logo}>
            <Image src="/concatenize_bordabranca.png" alt="Concatenize Logo" width={16} height={16} />
          </span>
          (Olha que logo bonitinha)
        </a>
      </footer>
      
    </div>
  )
}
