import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import githubSvg from "/github.svg";

export const GitHubLink = ({ url }: { url: string }) => (
  <Link href={url} className="flex text-primary mb-4">
    <Image
      src={'/images/github.svg'}
      alt="github logo"
      className="fill-primary block mr-2"
      width="24"
      height="24"
    />
    {url}
  </Link>
)
