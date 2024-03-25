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