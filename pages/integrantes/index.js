import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function listaIntegrantes(){
    return (<>
    <div className={styles.container}>
    <main className={styles.main}>
        <h1>Lista de Integrantes</h1>
        <div className={styles.grid}>
        <a
            href="integrantes/Claudio"
            className={styles.card}
          >
            <h2>Cláudio, o proativo.</h2>
            <p>Seus movimentos são mais rápidos que os olhos. Ele já terminou o trabalho... mas que trabalho? O que ainda virá.</p>
          </a>
          <a
            href="integrantes/Isaque"
            className={styles.card}
          >
            <h2>Isaque, o líder.</h2>
            <p>Nosso ranger vermelho, aquele nos trouxe o MongoDB, NextJS, nos deu suporte para resolver os problemas e várias fontes.</p>
          </a>
          <a
            href="integrantes/Jhon"
            className={styles.card}
          >
            <h2>Jhon, o artista.</h2>
            <p>Música, design, ruby on rails, reparo de computadores, tudo o que você puder imaginar e mais. ( ͡° ͜ʖ ͡°)</p>
          </a>
          <a
            href="integrantes/Pedro"
            className={styles.card}
          >
            <h2>Pedro, o cara da demo.</h2>
            <p>Talentoso além do ponto, fez esta maravilhosa DEMO! Aprecie a demo com moderação.</p>
          </a>

        </div>
        </main>
        </div>
        </>)
}