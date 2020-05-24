import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId())),
    ]);
