import { readFile, writeFile } from 'node:fs/promises'
import { glob } from 'glob'
import * as cheerio from 'cheerio'
import { createHighlighter } from 'shiki'

const highlighter = await createHighlighter({
  themes: ['horizon-bright', 'laserwave'],
  langs: ['cpp', 'c',],
})

const files = await glob('_site/**/*.html')

for (const file of files) {
  const html = await readFile(file, 'utf-8')
  if (!html.includes('language-')) continue

  const $ = cheerio.load(html)
  let changed = false

  $('pre code[class*="language-"]').each((_, el) => {
    const $el = $(el)
    const lang = $el.attr('class').match(/language-(\w+)/)?.[1] ?? 'text'
    const code = $el.text()
    const highlighted = highlighter.codeToHtml(code, {
      lang,
      themes: { light: 'horizon-bright', dark: 'laserwave' },
      defaultColor: 'light-dark()',
    })
    $el.closest('pre').replaceWith(highlighted)
    changed = true
  })

  if (changed) await writeFile(file, $.html())
}

highlighter.dispose()
