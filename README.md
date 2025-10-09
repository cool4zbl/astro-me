# My Personal Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

Personal site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Inspired by [Binliu's Doodles](https://zhangbinliu.me).

## Tech Stack
\- Astro  
\- TypeScript / JavaScript  
\- React (islands)  
\- Tailwind CSS  

## Features
\- Fast static output with selective hydration  
\- Responsive design  
\- SEO friendly meta tags  
\- Easy content authoring  

## Getting Started

```bash
# install
npm install

# dev
npm run dev

# build
npm run build

# preview production build
npm run preview


## Environment Variables

Create a `.env` file (or configure environment variables in your hosting provider) and provide your Google Analytics measurement ID so page views can be reported correctly:

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

The value is exposed to the client at build time and used by the Google Analytics integration in `src/components/GA.astro`.
