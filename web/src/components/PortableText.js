import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
// ? Why don't the .env values pass correctly? - How do I fix this?
import ClientConfig from '../../client-config'
import Figure from './Figure'

const serializers = {
  types: {
    mainImage: Figure
  }
}

// Include the client config so we can render images without materializing the asset documents
// ? Img not pulling through - why?
const PortableText = ({ blocks }) => <BlockContent blocks={ blocks } serializers={ serializers } { ...ClientConfig.sanity } />

export default PortableText
