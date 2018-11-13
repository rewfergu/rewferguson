import styled from 'styled-components';

const Nav = styled.nav`
  font-family: proxima-nova, sans-serif;
  padding: 1rem;
  position: absolute;
  width: 100%;
  top: 140px;
  height: 100vh;
  background: white;
  transition: top 0.25s ease-out;
  box-sizing: border-box;

  @media (min-width: 800px) {
    position: static;
    height: auto;
    background: transparent;
  }

  &.activeMenu {
    top: -120vh;
  }
    
      
  a {
    color: #1e325a;
    text-decoration: none;
    display: flex;
    &:hover,
    &:focus,
    &.active {
      color: #de3115;
    }
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavListItem = styled.li`

`;

const NavHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
`;

export { Nav, NavList, NavListItem, NavHeading };
