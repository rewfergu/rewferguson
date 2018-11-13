import React from 'react';
// import Link from 'next/link';

import { Nav, NavList, NavListItem, NavHeading } from './nav';
import { CategoryList, Category } from './category';
import { Submenu, SubmenuItem } from './submenu';
import { Link } from '../../routes';

import styled from 'styled-components';
import TitleSVG from '../../images/title.svg';

const Header = props => {
  const data = props.siteData;
  return (
    <StyledHeader>
      <MenuButton onClick={props.toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>Menu</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </MenuButton>
      <H1 className={props.activeMenu && 'activeMenu'}>
        <TitleSVG fill="white" style={{ width: '100%' }} />
      </H1>

      <Nav className={props.activeMenu && 'activeMenu'}>
        <NavList>
          <NavListItem>
            <NavHeading>
              <Link route="/about">
                <a
                  className={props.activeProject === 'about' ? 'active' : null}
                  onClick={() => {
                    console.log('about click');
                    props.selectProject('about');
                  }}
                >
                  About
                </a>
              </Link>
            </NavHeading>
          </NavListItem>

          <NavListItem>
            <NavHeading>
              <Link route="/work">
                <a
                  className={props.activeProject === 'work' ? 'active' : null}
                  onClick={() => {
                    props.selectProject('work');
                  }}
                >
                  Work
                </a>
              </Link>
            </NavHeading>

            <CategoryList>
              <Category
                items={data.filter(item => item.featured)}
                selectProject={props.selectProject}
                activeProject={props.activeProject}
              />
            </CategoryList>

            {/*
            <Submenu>
              {data.map((node, index) => {
                return (
                  node.featured === true &&
                  <SubmenuItem
                    key={`featuredProject_${index}`}
                    onClick={() => {
                      this.selectProject(node.slug);
                    }}
                  >
                    {node.name}
                  </SubmenuItem>
                );
              })}
            </Submenu>
            */}
          </NavListItem>

          {/*
          <NavListItem>
            <NavHeading>
              <Link href="/projects"><a>Journal</a></Link>
            </NavHeading>

            <CategoryList>
              <Category
                title="Active"
                items={data.filter(item => item.status === 1)}
                selectProject={props.selectProject}
              />

              <Category
                title="Hold"
                items={data.filter(item => item.status === 2)}
                selectProject={props.selectProject}
              />

              <Category
                title="Archive"
                items={data.filter(item => item.status === 3)}
                selectProject={props.selectProject}
              />
            </CategoryList>
          
          </NavListItem>
          */}
          <NavListItem>
            <NavHeading>
              <a href="https://github.com/rewfergu">Github</a>
            </NavHeading>
          </NavListItem>

          <NavListItem>
            <NavHeading>
              <a href="http://codepen.io/rewfergu">Codepen</a>
            </NavHeading>
          </NavListItem>

          <NavListItem>
            <NavHeading>
              <a href="http://www.linkedin.com/in/rewferguson">LinkedIn</a>
            </NavHeading>
          </NavListItem>

        </NavList>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: auto;
  width: 100%;
  left: 0;
  top: 0;
  background: transparent;
  box-sizing: border-box;
  position: fixed;
  z-index: 200;

  @media (min-width: 800px) {
    width: 300px;
    min-height: 100vh;
    position: relative;
    background: rgba(255, 255, 255, 0.75);
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  display: block;
  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 410;

  svg {
    fill: white;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const H1 = styled.h1`
  background: #1e325a;
  color: white;
  font-weight: 800;
  margin: 0;
  padding: 1.5rem 1rem 1.2rem 0.75rem;
  font-size: 2rem;
  font-family: proxima-nova, sans-serif;
  text-align: center;
  position: relative;
  z-index: 400;
  height: 140px;
  box-sizing: border-box;
  will-change: height;
  transition: height 0.3s linear;

  &.activeMenu {
    height: 100px;
  }

  svg {
    max-width: 150px;

    .scissors {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }

  &.activeMenu {
    svg .scissors {
      opacity: 0;
    }
  }

  @media (min-width: 800px) {
    /* padding: 2rem 1rem 1.2rem 0.75rem; */
    height: 140px;

    svg .scissors {
      opacity: 1;
    }

    &.activeMenu {
      height: 140px;
      svg .scissors {
        opacity: 1;
      }
    }
  }
`;
