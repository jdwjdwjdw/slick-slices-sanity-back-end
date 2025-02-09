import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { func } from 'prop-types';

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title('Slick Slices')
    .items([
      // Create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Make a new document ID, so we don't have a random string of numbers
            .documentId('downtown')
        ),
      // Add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
