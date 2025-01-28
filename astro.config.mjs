import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap(), tailwind()],
	redirects: {
		'/my-pronouns': '/blog/2019/01/my-pronouns',
		'/pronouns': '/blog/2019/01/my-pronouns',
	},
	site: 'https://chaosexanima.github.io',
});
