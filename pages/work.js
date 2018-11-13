import { withRouter } from 'next/router';
import siteData from '../data/siteData';
import Project from '../components/project';
import ProjectArray from '../components/projectArray';

function filterProjectData(project) {
  if (!project) {
    return null;
  }

  const data = siteData.filter(item => item.slug === project);

  if (data[0]) {
    return data[0];
  }

  return null;
}

class Work extends React.Component {
  render() {
    const currentProject = filterProjectData(this.props.activeProject);
    // console.log(
    //   'current project loading',
    //   this.props.activeProejct,
    //   currentProject
    // );

    if (this.props.activeProject === 'work') {
      console.log('work has been selected', this.props.activeProject);
      return <ProjectArray selectProject={this.props.selectProject} />;
    }

    return <Project projectData={currentProject} />;
  }
}

export default withRouter(Work);
