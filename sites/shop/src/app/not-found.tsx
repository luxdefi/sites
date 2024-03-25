import React from 'react'

import { NotFound as NotFoundCommon } from '@luxdefi/common'
import siteDef from '../site-def'

const NotFound: React.FC = () => (<NotFoundCommon siteDef={siteDef} header/>)

export default NotFound