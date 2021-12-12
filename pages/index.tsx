import Head from 'next/head';

// The Storyblok Client
import Storyblok from '../utils/storyblok';

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Stroyblok test</h1>
      </header>

      <main></main>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home';
  // load the published content outside of the preview mode
  let sbParams: any = {
    version: 'draft', // or 'published'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = 'draft';
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}
