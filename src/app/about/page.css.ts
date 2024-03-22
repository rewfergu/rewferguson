import { style } from '@vanilla-extract/css';

  const h = 220;
  const s = "52%";
  const l = "57%";  

function createTechStyles() {
    let styles: { [key: string]: {} } = {
      padding: 0,
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      gap: '1rem'
    };

    for (var i = 1; i < 11; i++) {
        const index: string = `li:nth-child(${i}) svg`;
        styles[index] = {
                background: `hsl(calc( 220 - 7 * ${i}), ${s}, ${l})`,
        }
    }

    return styles;
}

export const techStyles = style(createTechStyles())

// export const container = style({
//   padding: '2rem',
//   display: 'inline-block',
//   width: '100%',
//   height: '100%',
//   maxWidth: '740px',
//   position: 'relative',
//   background: 'rgba(255, 255, 255, 0.75)',
// })

// export const avatar = style({
//   width: '150px',
//   height: '150px',
//   objectFit: 'cover',
//   objectPosition: 'center',
//   borderRadius: '50%',
// })

// export const header = style({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderBottom: '1px dashed #ccc',
//   marginBottom: '1.5rem',
// })

// export const heading1 = style({
//   fontSize: '2rem',
//   margin: '1rem 0 0',
//   color: '#1e325a',
// })



// export const heading2 = style({
//   fontSize: '1.3rem',
//   margin: '0 0 1.5rem 0',
//   color: '#7e7e7e',
//   textAlign: 'center',
//   textTransform: 'uppercase',
// })

// export const li = style({
//   display: block;
//   /* width: calc(25% - 3rem/4); */
//   width: 120px;
//   margin-right: 1rem;

//   @media (max-width: 500px) {
//     .li:nth-child(4n) {
//       margin-right: 0;
//     }
//   }

//   @media (min-width: 500px) {
//     width: calc(25% - 3rem / 4);
//     margin-right: 1rem;
//     .li:nth-child(5n) {
//       margin-right: 0;
//       border: 1px solid red;
//     }
//   }
// })

// .li:nth-child(5n) {
//   @media (min-width: 500px) {
//     width: calc(25% - 3rem / 4);
//     margin-right: 1rem;

//       margin-right: 0;
//       border: 1px solid red;
//   }
// }

// export const figure {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 0 1rem 0;
//   padding: 0;

//   .svg {
//     display: block;
//     fill: white;
//     width: 100%;
//     /* height: 40px; */
//     box-sizing: border-box;
//     padding: 15px;
//     border-radius: 10%;
//     @media (min-width: 500px) {
//       padding: 25px;;
//     }
//   }
// }
  
// export const figcaption = style({
//   display: 'block',
//   marginTop: '0.5rem'
// })