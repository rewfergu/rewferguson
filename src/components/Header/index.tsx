'use client'
import Link from 'next/link'
import { Title } from '../Title'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import classNames from 'classnames'
import { siteData } from '../../data/siteData'
import styles from './index.module.css'

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <button
        onClick={() => setActiveMenu(!activeMenu)}
        className={styles.menuButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <title>Menu</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <Link href="/" aria-label="home">
        <h1
          className={classNames(styles.siteTitle, {
            [styles.activeTitle]: !activeMenu,
          })}
        >
          <Title />
        </h1>
      </Link>

      <nav
        className={classNames(styles.nav, { [styles.hiddenNav]: !activeMenu })}
      >
        <ul className="m-0 p-0 list-none">
          <li>
            <div>
              <Link
                href="/about"
                className={classNames(
                  'text-primary decoration-none flex',
                  'text-2xl font-extrabold uppercase',
                  'hover:text-secondary',
                  {
                    'text-secondary': pathname === '/about',
                  }
                )}
                onClick={() => setActiveMenu(false)}
              >
                About
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link
                href="/work"
                className={classNames(
                  'text-primary decoration-none flex',
                  'text-2xl font-extrabold uppercase',
                  'hover:text-secondary',
                  {
                    'text-secondary': pathname.startsWith('/work'),
                  }
                )}
                onClick={() => setActiveMenu(false)}
              >
                Work
              </Link>
            </div>

            <ul className="p-0 list-none mt-1 mr-0 mb-4 ml-4">
              {siteData
                .filter((item) => item.featured)
                .map((item) => (
                  <li key={item.slug}>
                    <div>
                      <Link
                        href={`/work/${item.slug}`}
                        className={classNames(
                          'text-primary decoration-none flex',
                          'hover:text-secondary',
                          {
                            'text-secondary': pathname === `/work/${item.slug}`,
                          }
                        )}
                        onClick={() => setActiveMenu(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  </li>
                ))}
              {/* <Category
                items={siteData.filter((item) => item.featured)}
                selectProject={props.selectProject}
                activeProject={props.activeProject}
              /> */}
            </ul>
          </li>
          <li>
            <div>
              <Link
                href="https://github.com/rewfergu"
                className={classNames(
                  'text-primary decoration-none flex',
                  'text-2xl font-extrabold uppercase',
                  'hover:text-secondary'
                )}
              >
                Github
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link
                href="http://codepen.io/rewfergu"
                className={classNames(
                  'text-primary decoration-none flex',
                  'text-2xl font-extrabold uppercase',
                  'hover:text-secondary'
                )}
              >
                Codepen
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link
                href="http://www.linkedin.com/in/rewferguson"
                className={classNames(
                  'text-primary decoration-none flex',
                  'text-2xl font-extrabold uppercase',
                  'hover:text-secondary'
                )}
              >
                LinkedIn
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
