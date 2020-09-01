import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'ブログ', page: '/blog' },
]

const ogImageUrl = '../../public/eltopo.jpeg'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} キネマトグラフ</title>
        <meta
          name="description"
          content="映画の感想をただ書いていくためのブログです。"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <meta name="og:title" content="キネマトグラフ" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@ryo__kts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <a href="/">
        <h1>&#x1f4fd;キネマトグラフ</h1>
      </a>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
