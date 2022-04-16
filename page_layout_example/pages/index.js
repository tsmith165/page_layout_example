import PageLayout from '../src/components/layout/PageLayout'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <PageLayout page_title={"Home Page"}>
      <div className={styles.main_body}>
        <h1 className={styles.body_header}>Home Page</h1>
      </div>
    </PageLayout>
  )
}
