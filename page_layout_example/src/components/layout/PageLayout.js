import Head from 'next/head'
import styles from "../../../styles/PageLayout.module.scss"

const PageLayout = ({page_title, children}) => {
    console.log(`-------------------------------------------------------`)
    console.log(`Page Title: ${page_title}`)
    console.log('Children (NEXT LINE):')
    console.log(children)

    return (
        <div className={styles.container}>
            <Head>
                <title>{page_title}</title>
                <meta name="description" content="Page Layout Example" />
            </Head>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default PageLayout;

