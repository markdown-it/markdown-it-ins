import { fileURLToPath } from 'node:url'
import markdownit from 'markdown-it'
import generate from 'markdown-it-testgen'

import ins from '../index.mjs'

describe('markdown-it-ins', function () {
  const md = markdownit().use(ins)

  generate(fileURLToPath(new URL('fixtures/ins.txt', import.meta.url)), md)
})
