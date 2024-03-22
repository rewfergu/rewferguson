import classNames from "classnames";

const h = 220;
const s = "52%";
const l = "77%";

export const ProjectTags = (props: { tags: string[] }) => (
  <ul className="list-none m-0 mb-4 p-0">
    {props.tags.map((tag: string, index: number) => (
      <li
        data-index={index}
        key={tag}
        className={classNames(
          "inline-block py-2 px-4",
          "p-2 rounded text-xs mb-1 mr-1 "
        )}
        style={{ background: `hsl(calc( 220 - 7 * ${index}), ${s}, ${l})` }}
      >
        {tag}
      </li>
    ))}
  </ul>
);
