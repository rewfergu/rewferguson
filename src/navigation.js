import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { getCollection } from 'astro:content';

export const headerData = {
  links: [
    { text: 'Github', href: 'https://github.com/rewfergu' },
    { text: 'LinkedIn', href: 'http://www.linkedin.com/in/rewferguson' },
  ],
  actions: [],
};

export async function getHeaderData() {
  const workCollection = await getCollection('work');
  const workPages = workCollection
    .filter((page) => page.data.featured)
    .sort(({ data: { priority: priorityA = 999 } }, { data: { priority: priorityB = 999 } }) => priorityA - priorityB)
    .map((page) => ({
      text: page.data.name,
      href: `/work/${page.slug}`,
    }));

  return {
    links: [
      {
        text: 'Work',
        links: workPages,
      },
      ...headerData.links,
    ],
    actions: headerData.actions,
  };
}

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: ``,
};
