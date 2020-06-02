import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import ClientConfig from '../../client-config'

// Include the client config so we can render images without materializing the asset documents
const PortableText = ({ blocks }) => <BlockContent blocks={ blocks } { ...ClientConfig.sanity } />

export default PortableText
