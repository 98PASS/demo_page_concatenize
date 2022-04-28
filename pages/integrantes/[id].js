import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Integrante({ integrante }) {

    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>{integrante.id}</title>
            </Head>
            
            <main className={styles.main}>
                <h3 className={styles.title}>
                    Este bonitão aqui se chama {integrante.nome}.
                </h3>
                <img src={integrante.imagem} width="300px" />
                <h3><a href={integrante.linkGithub}>GitHub de {id}</a></h3>
            </main>
        </div>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { integrante: data },
    }
}