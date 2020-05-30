import S from '@sanity/desk-tool/structure-builder';
import { RiSettings3Line, RiPagesLine } from 'react-icons/ri';

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
      S.listItem()
        .title('Homepage')
        .icon(RiPagesLine)
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'homePage'].includes(listItem.getId())),
    ]);
