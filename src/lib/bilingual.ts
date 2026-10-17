/**
 * The exported screens ship every label twice (English + Urdu) side by side.
 * This pass makes them follow the selected language: for each pair of sibling
 * labels only the active language is shown, and "English / اردو" strings are
 * split so only the matching half remains. Purely visual (no React state).
 */
const URDU = /[\u0600-\u06FF]/
const LATIN = /[A-Za-z]{2,}/
const SEP_ONLY = /^[\s/|•·–—-]+$/
const SKIP = 'svg, script, style, textarea, input, .material-symbols-outlined, [data-no-lang]'

type Kind = 'ur' | 'en' | 'sep' | 'mixed' | null

/** Visible text of an element, ignoring icon ligatures, svg and form fields. */
function cleanText(el: Element): string {
  if (!el.children.length) return el.matches(SKIP) ? '' : el.textContent || ''
  let out = ''
  const walk = (n: Node) => {
    if (n.nodeType === 3) out += n.nodeValue
    else if (n.nodeType === 1 && !(n as Element).matches(SKIP)) n.childNodes.forEach(walk)
  }
  el.childNodes.forEach(walk)
  return out
}

function kindOf(el: Element): Kind {
  if (el.matches(SKIP)) return null
  const text = cleanText(el).replace(/\s+/g, ' ').trim()
  if (!text || text.length > 400) return null
  if (SEP_ONLY.test(text)) return 'sep'
  const ur = URDU.test(text)
  const en = LATIN.test(text)
  if (ur && en) return 'mixed'
  if (ur) return 'ur'
  if (en) return 'en'
  return null
}

function splitMixed(el: HTMLElement, lang: 'en' | 'ur') {
  const current = el.textContent || ''
  const stored = el.dataset.bilingualShown
  if (!el.dataset.bilingualOrig || stored !== current) el.dataset.bilingualOrig = current
  const orig = el.dataset.bilingualOrig
  const parts = orig.split(/\s+\/\s+/)
  const ur = parts.filter((p) => URDU.test(p) && !LATIN.test(p))
  const en = parts.filter((p) => !URDU.test(p))
  if (parts.length < 2 || !ur.length || !en.length) return
  const shown = (lang === 'ur' ? ur : en).join(' / ')
  el.textContent = shown
  el.dataset.bilingualShown = shown
}

export function applyBilingual(root: Element, lang: 'en' | 'ur') {
  root.querySelectorAll('.lang-hide').forEach((n) => n.classList.remove('lang-hide'))

  const parents = new Set<Element>()
  root.querySelectorAll<HTMLElement>('*').forEach((el) => {
    if (el.closest(SKIP)) return
    const k = kindOf(el)
    if (k === 'mixed' && !el.children.length) splitMixed(el, lang)
    if (k && el.parentElement) parents.add(el.parentElement)
  })

  parents.forEach((p) => {
    const kids = Array.from(p.children).filter((c) => !c.matches(SKIP))
    const info = kids.map((c) => ({ c, k: kindOf(c), t: cleanText(c).trim() }))
    const hasUr = info.some((i) => i.k === 'ur')
    const hasEn = info.some((i) => i.k === 'en' && !/\d/.test(i.t))
    if (!hasUr || !hasEn) return
    info.forEach(({ c, k, t }) => {
      if (k === 'sep') c.classList.add('lang-hide')
      else if (lang === 'en' && k === 'ur') c.classList.add('lang-hide')
      else if (lang === 'ur' && k === 'en' && !/\d/.test(t)) c.classList.add('lang-hide')
    })
  })
}

export function watchBilingual(root: Element, getLang: () => 'en' | 'ur') {
  let timer: number | undefined
  let busy = false
  const run = () => {
    busy = true
    obs.disconnect()
    applyBilingual(root, getLang())
    obs.observe(root, { childList: true, subtree: true, characterData: true })
    busy = false
  }
  const obs = new MutationObserver(() => {
    if (busy) return
    window.clearTimeout(timer)
    timer = window.setTimeout(run, 60)
  })
  run()
  return () => {
    window.clearTimeout(timer)
    obs.disconnect()
  }
}
