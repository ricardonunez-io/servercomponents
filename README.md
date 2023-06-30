# ServerComponents.dev

This site was made to serve as a simple guide to explaining the basics about React Server Components, what they are, how they're different from existing solutions, and how to use them.

As a non-expert myself in the React space, I wanted something that would both allow both novice React devs and experienced React folks to have a baseline understanding of React Server Components other than the documentation online about just *how to use them*.

---

## How it's built.

This site is built from scratch using React Server Components in [Next.js 13](https://nextjs.org/docs/app).

I didn't want to use any existing React component libraries (probably a mistake because [@shadcn's](https://twitter.com/shadcn)'s [UI library](htts://ui.shadcn.com) is so good), so I built my own components from scratch using [Tailwind CSS](https://tailwindcss.com/) and vanilla CSS.

There are custom components for code blocks (styled for both dark and light modes automatically using [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app)), the `a` tag for automatically opening external links in a new tab, and custom SVG and HTML animations using [`framer-motion`](https://framer.com/motion).

I open sourced the site so that anyone can use these UI elements for their own site and/or copy the MDX configuration to use [MDX](https://mdxjs.com) on your own Next.js 13 application.

There aren't, however, any data-fetching components, so there may not be as much use as a full-blown template, but I am working on releasing one soon.

---

#### Thank you for visiting the site, and I hope you find it useful!

If there are any mistakes I made, any suggestions you have, or any changes to the site that might be useful, any and all feedback would be appreciated, and PRs are welcome.

---

Cheers!
