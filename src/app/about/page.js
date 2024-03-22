import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { techStyles } from "./page.css";

import JSSVG from "./javascript.svg";
import NodeSVG from "./node-dot-js.svg";
import ReactSVG from "./react.svg";
import PythonSVG from "./python.svg";
import PHPSVG from "./php.svg";
import MYSQLSVG from "./mysql.svg";
import MongoSVG from "./mongodb.svg";
import GraphQLSVG from "./graphql.svg";
import DockerSVG from "./docker.svg";
import WordPressSVG from "./wordpress.svg";

export default function () {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/Rob.jpg"
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
            borderBottom: "1px dashed #ccc",
            paddingBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Skills
        </h2>
        <ul className={techStyles}>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <JSSVG className={styles.svg} />

              <figcaption className={styles.figcaption}>JavaScript</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <NodeSVG className={styles.svg} />
              <figcaption className={styles.figcaption}>Node</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <ReactSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>React</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <PHPSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>PHP</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <PythonSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>Python</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <MYSQLSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>MySQL</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <MongoSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>MongoDB</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <GraphQLSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>GraphQL</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <DockerSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>Docker</figcaption>
            </figure>
          </li>
          <li className={styles.li}>
            <figure className={styles.figure}>
              <div>
                <WordPressSVG className={styles.svg} />
              </div>
              <figcaption className={styles.figcaption}>WordPress</figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </section>
  );
}
