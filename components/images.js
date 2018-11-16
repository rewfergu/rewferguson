import Img from './img';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

class Images extends React.Component {
  toggleImageClass = event => {
    console.log('event', event.target);
    event.target;
  };
  render() {
    return (
      <ImageList>
        {this.props.gallery.map(({ src, alt }) => (
          <ImageWrapper
            key={`projectImageGallery_${src}`}
            src={src}
            alt={alt}
          />
        ))}

        {this.props.videos.map(url => (
          <StyledWrapper style={{ width: '100%', maxWidth: '100%' }}>
            <ReactPlayer
              key={`projectVideoGallery_${url}`}
              url={url}
              width="100%"
            />
          </StyledWrapper>
        ))}
      </ImageList>
    );
  }
}

export default Images;

class ImageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      active: false
    };
  }
  toggleImage = () => {
    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };

  render() {
    return (
      <StyledWrapper
        ref={this.wrapper}
        onClick={this.toggleImage}
        className={this.state.active && 'active'}
      >
        <ImageControl>
          <Img src={`/static/images/${this.props.src}`} alt={this.props.alt} />
        </ImageControl>
      </StyledWrapper>
    );
  }
}

const ImageList = styled.ul`
  margin: 0;
  padding: 1rem 0 0 1rem;
  list-style: none;
  display: flex;
  background: #efefef;
  flex-wrap: wrap;
`;

const StyledWrapper = styled.li`
  max-width: calc(33.3% - 1rem);
  margin: 0 1rem 1rem 0;
  padding: 0;
  transition: max-width 0.25s ease-out;
  will-change: max-width;

  &.active {
    max-width: 100%;
  }
`;

const ImageControl = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
`;
