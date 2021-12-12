import React from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';

const Feature = ({ blok }: any) => (
  <div className="column feature" {...sbEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
