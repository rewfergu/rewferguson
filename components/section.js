import styled from 'styled-components';

const Section = props => {
  return (
    <StyledSection {...props}>
      {props.children}
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  background: rgba(255, 255, 255, 0.75);
`;
