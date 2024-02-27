import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context: any) {
  const exists = await getCollection("exists");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: exists.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/exists/${post.slug}/`,
    })),
    customData: `<language>zh-Hans</language>`,
  });
}