import { useEffect, useState } from 'react';
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.PREVIEW_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});
