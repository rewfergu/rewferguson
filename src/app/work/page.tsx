"use client";
import Link from "next/link";
import { Img } from "../../components/Img";

import { siteData } from "../../data/siteData";

const data = siteData.filter((item) => item.featured);

export default function Work() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Work</h1>
      <ul>
        {data.map((item) => (
          <li>
            <Link href={`/work/${item.slug}`}>
              <Img
                src={`/images/${item.cover?.src}`}
                alt={item.cover?.alt || ""}
              />
              <div className="projectName">{item.name}</div>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        section {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.75);
        }
        h1 {
          text-transform: uppercase;
          border-bottom: 1px dashed #ccc;
          padding-bottom: 0.5rem;
          color: #7e7e7e;
          margin-bottom: 1.5rem;
          font-weight: 700;
          font-size: 1.3rem;
        }

        ul {
          display: block;
          margin: 0;
          padding: 0;
          columns: 2;
          column-gap: 1.5rem;
          list-style: none;
        }

        li {
          margin-bottom: 1.5rem;
          background: #f1f1f1;
          /* border: 4px solid #f1f1f1; */
          box-sizing: border-box;
          break-inside: avoid;
          transition: all 0.3s;
          border-bottom: 2px solid #ccc;
        }

        li:hover {
          background: white;
          /* box-shadow: 0 0 5px rgba(0,0,0,0.3); */
        }

        li img {
          padding: 4px 4px 0;
          display: block;
          box-sizing: border-box;
        }

        li a {
          display: block;
          text-decoration: none;
        }
        li a:hover {
          /* color: #de3115; */
          color: #e0006e;
        }

        .projectName {
          padding: 5px;
        }
      `}</style>
    </section>
  );
}
