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

  const wordsCollection = await getCollection('words');
  const wordsPages = wordsCollection
    .filter((page) => !!page.data.date)
    .sort(
      ({ data: { date: dateA } }, { data: { date: dateB } }) => new Date(dateB).getTime() - new Date(dateA).getTime()
    )
    .map((page) => ({
      text: page.data.name,
      href: `/blog/${page.slug}`,
    }));

  return {
    links: [
      {
        text: 'Work',
        links: workPages,
      },
      {
        text: 'Blog',
        links: wordsPages,
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
