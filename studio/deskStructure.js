import S from '@sanity/desk-tool/structure-builder';
import { RiSettings3Line } from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(RiSettings3Line)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId())),
    ]);
