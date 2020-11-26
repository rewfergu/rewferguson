import React from 'react'
import { withRouter } from 'next/router'
import styled, { css } from 'styled-components'
import Section from '../components/section'

import { ReactComponent as JSSVG } from '../images/javascript.svg'
import { ReactComponent as NodeSVG } from '../images/node-dot-js.svg'
import { ReactComponent as ReactSVG } from '../images/react.svg'
import { ReactComponent as PHPSVG } from '../images/php.svg'
import { ReactComponent as PythonSVG } from '../images/python.svg'
import { ReactComponent as MYSQLSVG } from '../images/mysql.svg'
import { ReactComponent as MongoSVG } from '../images/mongodb.svg'
import { ReactComponent as GraphQLSVG } from '../images/graphql.svg'
import { ReactComponent as DockerSVG } from '../images/docker.svg'
import { ReactComponent as WordPressSVG } from '../images/wordpress.svg'

const About = ({ router }) => {
  return (
    <AboutSection>
      <Header>
        <Avatar src="/static/images/Rob.jpg" alt="my portrait" />
        <h1>Robert Ferguson</h1>
        <H2>Web Engineer</H2>
      </Header>
      <p>
        My name is Robert Ferguson and I build projects for the web. I've worked
        in all aspects of design and development since 2006, and my focus at the
        moment is react, and using javascript to provide accessible and
        performant user experiences.
      </p>

      <p>
        I'm currently the instructional web manager at Austin Community College.
        I lead a team of content strategists, designers and developers with the
        mission of improving the quality of instructional web content at the
        college.
      </p>

      <p>
        Before I got into web development my main interest was film and
        animation. These days in my free time I enjoy tinkering with the
        raspberry pi and arduino hardware platforms.
      </p>

      <section>
        <H2
          style={{
            borderBottom: '1px dashed #ccc',
            paddingBottom: '1rem',
            marginTop: '3rem',
          }}
        >
          Skills
        </H2>
        <TechList>
          <Tech>
            <Figure>
              <JSSVG className="svg" />
              <Figcaption>JavaScript</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <NodeSVG className="svg" />
              <Figcaption>Node</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <ReactSVG className="svg" />
              <Figcaption>React</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <PHPSVG className="svg" />
              <Figcaption>PHP</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <PythonSVG />
              <Figcaption>Python</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <MYSQLSVG />
              <Figcaption>MySQL</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <MongoSVG />
              <Figcaption>MongoDB</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <GraphQLSVG />
              <Figcaption>GraphQL</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <DockerSVG />
              <Figcaption>Docker</Figcaption>
            </Figure>
          </Tech>
          <Tech>
            <Figure>
              <WordPressSVG />
              <Figcaption>WordPress</Figcaption>
            </Figure>
          </Tech>
        </TechList>
      </section>
    </AboutSection>
  )
}

export default withRouter(About)

const AboutSection = styled(Section)`
  padding: 2rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    margin: 1rem 0 0;
    color: #1e325a;
  }
`

const H2 = styled.h2`
  font-size: 1.3rem;
  margin: 0 0 1.5rem 0;
  color: #7e7e7e;
  text-align: center;
  text-transform: uppercase;
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`

const h = 220
const s = '52%'
const l = '57%'

function createTechStyles() {
  let styles = ''

  for (var i = 1; i < 11; i++) {
    styles += `
      li:nth-child(${i}) svg {
        background: hsl(calc( 220 - 7 * ${i}), ${s}, ${l});
      }
    `
  }

  return css`
    ${styles}
  `
}

const TechList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  /* @media (min-width: 500px) {
    padding: 1rem;
    background: rgba(0,0,0,0.05);
    border-radius: 20px;
  } */

  ${createTechStyles()}
`

const Tech = styled.li`
  display: block;
  width: calc(25% - 3rem / 4);
  margin-right: 1rem;

  @media (max-width: 500px) {
    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 500px) {
    width: calc(20% - 4rem / 5);
    margin-right: 1rem;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
`

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 1rem 0;
  padding: 0;

  svg,
  .svg {
    display: block;
    fill: white;
    width: 100%;
    /* height: 40px; */
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10%;
    @media (min-width: 500px) {
      padding: 25px;
    }
  }
`

const Figcaption = styled.figcaption`
  display: block;
  margin-top: 0.5rem;
`
