import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { techStyles } from './page.css'

import TSSVG from '~/public/images/icons/typescript.svg'
import NodeSVG from '~/public/images/icons/node.svg'
import ReactSVG from '~/public/images/icons/react.svg'
import PythonSVG from '~/public/images/icons/python.svg'
import NextSVG from '~/public/images/icons/next.svg'
import MYSQLSVG from '~/public/images/icons/mysql.svg'
import MongoSVG from '~/public/images/icons/mongodb.svg'
import GraphQLSVG from '~/public/images/icons/graphql.svg'
import DockerSVG from '~/public/images/icons/docker.svg'
import { PostgresSVG } from '~/public/images/icons/postgres.svg'

const icons = [
  { name: 'TypeScript', Svg: TSSVG },
  { name: 'React', Svg: ReactSVG },
  { name: 'Node', Svg: NodeSVG },
  { name: 'Python', Svg: PythonSVG },
  { name: 'PostgreSQL', Svg: PostgresSVG },
  { name: 'Next', Svg: NextSVG },
  { name: 'MySQL', Svg: MYSQLSVG },
  { name: 'MongoDB', Svg: MongoSVG },
  { name: 'GraphQL', Svg: GraphQLSVG },
  { name: 'Docker', Svg: DockerSVG },
]

export default function () {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/Rob.jpg"
          alt="my portrait"
          width={150}
          height={150}
          className={styles.avatar}
        />
        <h1 className={styles.heading1}>Robert Ferguson</h1>
        <h2 className={styles.heading2}>Web Engineer</h2>
      </header>
      <p>
        My name is Robert Ferguson and I build projects for the web. I've worked
        in all aspects of design and development since 2006, and my focus at the
        moment is react, and using javascript to provide accessible and
        performant user experiences.
      </p>

      <p>
        I'm currently a Staff Frontend Engineer at SetSail, where I lead the
        front end development of our react application and UI library.
      </p>

      <p>
        Before I got into web development my main interest was film and
        animation. These days in my free time I enjoy tinkering with the
        raspberry pi and arduino hardware platforms.
      </p>

      <section>
        <h2
          className={styles.heading2}
          style={{
            borderBottom: '1px dashed #ccc',
            paddingBottom: '1rem',
            marginTop: '3rem',
          }}
        >
          Skills
        </h2>
        <ul className={techStyles}>
          {icons.map(({ name, Svg }) => (
            <li className={styles.li} key={name}>
              <figure className={styles.figure}>
                <Svg className={styles.svg} />
                <figcaption className={styles.figcaption}>{name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
