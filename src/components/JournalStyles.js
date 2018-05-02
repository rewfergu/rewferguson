import { css } from 'glamor';

const journal__title = css({
  textTransform: 'uppercase',
  padding: '0.5rem 1rem',
  margin: 0,
  background: '#222',
  ' a': {
    color: '#fff',
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline'
    }
  }
});

const journal__content = css({
  display: 'flex',
  flexFlow: 'row wrap',
  flexGrow: 1,
  width: '100%'
});

const projectCategory__list = css({
  background: 'hsla(0, 50%, 35%, 1)',
  flex: '1 1 100%',
  order: 2,
  '@media(min-width: 748px)': {
    flex: '0 0 300px',
    order: 1
  }
});

const projectCategory__heading = css({
  color: 'white',
  textDecoration: 'none',
  ' h1': {
    marginTop: '1rem',
    fontSize: '1.5rem',
    fontFamily: 'proxima-nova'
  }
});

const projectList = css({
  padding: '1rem 2rem 1rem 1rem',
  width: '100%',
  background: 'hsla(0, 50%, 35%, 1)',
  color: '#fff',
  textTransform: 'uppercase',
  boxSizing: 'border-box',

  h1: {
    marginTop: 0,
    color: '#fff',
    marginBottom: '1.5rem'
  }
});

export default {
  journal__title,
  journal__content,
  projectCategory__list,
  projectCategory__heading,
  projectList
};
