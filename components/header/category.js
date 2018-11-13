import React from 'react';
import styled from 'styled-components';
import { Submenu, SubmenuItem } from './submenu';
import { Link } from '../../routes';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.submenu = React.createRef();
  }

  state = {
    open: false
  };

  toggleMenu(event) {
    this.setState(
      prevState => {
        return {
          open: !prevState.open
        };
      },
      () => {
        if (event) {
          console.log('toggle with click');
          if (this.state.open) {
            TweenMax.set(this.submenu.current, { height: 'auto' });
            TweenMax.from(this.submenu.current, 0.25, { height: 0 });
          } else {
            TweenMax.to(this.submenu.current, 0.25, { height: 0 });
          }

          return;
        }

        console.log('toggle without click');

        if (this.state.active) {
          TweenMax.set(this.submenu.current, { height: 'auto' });
          TweenMax.from(this.submenu.current, 0.25, { height: 0 });
        } else {
          TweenMax.to(this.submenu.current, 0.25, { height: 0 });
        }
      }
    );
  }

  handleClick = event => {
    console.log('clicking', event.target);
    this.toggleMenu(event);
  };

  selectProject = project => {
    // console.log('project', project);
    this.props.selectProject(project);
  };

  render() {
    return (
      <CategoryWrapper>
        <CategoryHeading>{this.props.title}</CategoryHeading>
        <Submenu>
          {this.props.items.map((node, index) => {
            return (
              <SubmenuItem
                key={`projectMenu_${node.slug}`}
                onClick={() => {
                  this.selectProject(node.slug);
                }}
              >
                <Link route={`/work/${node.slug}`}>
                  <a
                    class={
                      node.slug === this.props.activeProject ? 'active' : null
                    }
                  >
                    {node.name}
                  </a>
                </Link>
              </SubmenuItem>
            );
          })}
        </Submenu>
      </CategoryWrapper>
    );
  }
}

const CategoryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CategoryWrapper = styled.li`
`;

const CategoryHeading = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 5px;
`;

export { CategoryList, Category };
