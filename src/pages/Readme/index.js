// @flow

import React from 'react';
import MarkdownDocs from 'metadata-react/Markdown/MarkdownDocs';
import markdown from './markdown.md';
import {mainTitle} from '../../components/App/AppView';

export default function Page() {
  return <MarkdownDocs markdown={markdown} subtitle={mainTitle} />;
}
