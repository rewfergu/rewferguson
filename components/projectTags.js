import styled, { css } from 'styled-components';

const ProjectTags = props => (
  <Tags>
    {props.tags.map((tag, index) => (
      <Tag data-index={index} key={tag}>
        {tag}
      </Tag>
    ))}
  </Tags>
);

export default ProjectTags;

const Tags = styled.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding-left: 0;
`;

const h = 220;
const s = '52%';
const l = '77%';

function createTagStyles() {
  let styles = '';

  for (var i = 1; i < 11; i++) {
    styles += `
      &:nth-child(${i}) {
        background: hsl(calc( 220 - 7 * ${i}), ${s}, ${l});
      }
    `;
  }

  return css`${styles}`;
}

const Tag = styled.li`
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  border-radius: 0;
  font-size: 0.8rem;
  line-height: 1;
  white-space: nowrap;
  cursor: default;
  background: #efefef;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 5px;

  ${createTagStyles()}
`;

// &:nth-child(1) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }

// &:nth-child(2) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }

// &:nth-child(3) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }

// &:nth-child(4) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }

// &:nth-child(5) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }

// &:nth-child(6) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }

// &:nth-child(7) {
//   background: hsl(calc( 220 - 13 * attr(data-index)), ${s}, ${l});
// }
