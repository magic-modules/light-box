import { is } from '@magic/test'

import * as LightBox from '../src/index.mjs'

export default [
  {
    fn: () => LightBox.View,
    expect: is.function,
    info: 'expect LightBox.View to be a function',
  },
  {
    fn: () => LightBox.propTypes.LightBox,
    expect: is.array,
    info: 'expect LightBox.propTypes.LightBox to be an array',
  },
]
