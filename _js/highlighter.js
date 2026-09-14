import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine-oniguruma.mjs'
import horizon_bright from '@shikijs/themes/horizon-bright'
import laserwave from '@shikijs/themes/laserwave'
import cpp from '@shikijs/langs/cpp'
import c from '@shikijs/langs/c'

const highlighter = await createHighlighterCore({
  themes: [horizon_bright, laserwave],
  langs: [cpp, c],
  engine: createOnigurumaEngine(import('shiki/wasm')),
})

function highlightAll() {
  const blocks = document.querySelectorAll('pre code[class*="language-"]')

  for (const block of blocks) {
    const lang = block.className.match(/language-(\w+)/)?.[1] ?? 'text'
    const html = highlighter.codeToHtml(block.textContent, {
      lang,
      themes: { light: 'horizon-bright', dark: 'laserwave' },
      defaultColor: 'light-dark()',
    })
    block.closest('pre').outerHTML = html
  }
}

highlightAll()
