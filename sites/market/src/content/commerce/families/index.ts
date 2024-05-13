import type { VideoDef } from '@hanzo/ui/types'


import { getBullionFamilies } from '@luxfi/core/commerce-data'

import crFamilies from './cr-families'
import coin from './cn'
import validator from './vl'
import key from './ps'
import { gold as goldVideo, silver as silverVideo } from './videos' 

const videoMap = new Map<string, VideoDef>([
  ['Lux Gold', goldVideo],
  ['Lux Silver', silverVideo]
])

export default [...getBullionFamilies(videoMap), ...crFamilies, coin, validator, key]
