import App, { Container } from 'next/app'
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link, Router } from '../routes'
// import { withRouter } from 'next/router';
import { PageTransition } from 'next-page-transitions'

import siteData from '../data/siteData'

import styled, { css } from 'styled-components'

import Header from '../components/header/header'
import Project from '../components/project'

import '../style/app.css'
import GitHubLink from '../components/githubLink'
const TIMEOUT = 400

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    activeProject: null,
    projectList: [],
    activeMenu: true,
  }

  componentWillReceiveProps() {
    // console.log('will receive props', this.props.router.asPath);
    // console.log('will receive props', this.props.router);
  }

  // componentWillUpdate() {
  //   console.log('will update', this.props.router.asPath);
  // }

  componentWillUpdate() {
    // const slug = this.props.router.query.slug;
    // console.log('will update', slug);
    // if (slug && slug !== this.state.activeProject) {
    //   this.selectProject(this.props.router.query.slug);
    // }
  }

  componentWillMount() {
    console.log('component will mount')
    const pathName = this.props.router.asPath
    const pathArray = pathName.split('/')

    if (pathArray[pathArray.length - 1] === '') {
      pathArray.pop()
    }

    console.log('path array', pathArray)
    if (pathArray.length === 3 && pathArray[1] === 'work') {
      console.log('the current project is', pathArray[2])
      this.selectProject(pathArray[2])
      // Router.pushRoute('pathName');
    }

    if (pathArray.length === 2 && pathArray[1] === 'work') {
      console.log('the current project is', pathArray[1])
      this.selectProject(pathArray[1])
    }

    if (pathArray.length === 2 && pathArray[1] === 'about') {
      console.log('the current project is', pathArray[1])
      this.selectProject(pathArray[1])
    }
  }

  selectProject = project => {
    console.log('project has been selected', project)

    this.setState({
      activeProject: project,
      activeMenu: true,
    })
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        activeMenu: !this.state.activeMenu,
      }
    })
  }

  filterProjectData = project => {
    if (!project) {
      return null
    }

    const data = siteData.filter(item => item.slug === project)

    if (data[0]) {
      return data[0]
    }

    return null
  }

  render() {
    const { Component, pageProps } = this.props

    const projectArray = []
    projectArray.push(
      <Component
        {...pageProps}
        activeProject={this.state.activeProject}
        selectProject={this.selectProject}
        key={this.props.router.asPath}
        siteData={siteData}
      />
    )

    return (
      <Wrapper>
        <Header
          siteData={siteData}
          selectProject={this.selectProject}
          toggleMenu={this.toggleMenu}
          activeProject={this.state.activeProject}
          activeMenu={this.state.activeMenu}
        />
        <Main>
          {/*
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="div"
            className="contentWrap"
          >
            {projectArray}
          </CSSTransitionGroup>
          */}

          <PageTransition
            timeout={TIMEOUT}
            classNames="contentWrap page-transition"
            //loadingComponent={<Loader />}
            loadingDelay={1000}
            loadingTimeout={{
              enter: 300,
              exit: 0,
            }}
            loadingClassNames="loading-indicator"
          >
            <Component
              activeProject={this.state.activeProject}
              selectProject={this.selectProject}
              key={this.props.router.asPath}
              {...pageProps}
            />
          </PageTransition>

          {/*<Component {...pageProps} />*/}
        </Main>
      </Wrapper>
    )
  }
}

export default MyApp

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: flex;
  }
`

const Main = styled.main`
  position: relative;
  z-index: 100;
  margin: 1rem;
  box-sizing: border-box;

  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    width: 100%;
  }

  .contentWrap {
    display: inline-block;
    // width: calc(100% - 2rem);
    width: 100%;
    height: 100%;
    max-width: 640px;
    position: relative;

    @media (min-width: 800px) {
    }
  }
`

// <Project key={projectData.slug} projectData={projectData} />
// const projectArray = this.state.projectList.map(projectData => (
//   <Component
//     {...pageProps}
//     activeProject={this.state.activeProject}
//     key={projectData.slug}
//     projectData={projectData}
//     siteData={siteData}
//   />
// ));
