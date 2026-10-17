import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const appRoot = path.resolve(__dirname, '..')
const stitchRoot = path.resolve(appRoot, '..', 'stitch_nobody_left_behind_emergency_response')
const pagesDir = path.join(appRoot, 'src', 'pages')
const componentsDir = path.join(appRoot, 'src', 'components')

fs.mkdirSync(pagesDir, { recursive: true })
fs.mkdirSync(componentsDir, { recursive: true })

const SCREENS = [
  { dir: 'login_demo_access_nobody_left_behind', out: 'LoginPage.tsx', name: 'LoginPage', kind: 'page' },
  { dir: 'command_center_nobody_left_behind', out: 'CommandPage.tsx', name: 'CommandPage', kind: 'page' },
  { dir: 'case_detail_drawer_case_pk_khi_7821_nobody_left_behind', out: 'CaseDrawerPage.tsx', name: 'CaseDrawerPage', kind: 'page' },
  { dir: 'dispatch_resource_routing_console_nobody_left_behind', out: 'DispatchPage.tsx', name: 'DispatchPage', kind: 'page' },
  { dir: 'disaster_scenario_engine_simulation_nobody_left_behind', out: 'SimulatePage.tsx', name: 'SimulatePage', kind: 'page' },
  { dir: 'intelligent_multi_channel_citizen_intake_nobody_left_behind', out: 'IntakePage.tsx', name: 'IntakePage', kind: 'page' },
  { dir: 'volunteer_tasks_nobody_left_behind', out: 'FieldTasksPage.tsx', name: 'FieldTasksPage', kind: 'page' },
  { dir: 'task_detail_action_nobody_left_behind', out: 'TaskDetailPage.tsx', name: 'TaskDetailPage', kind: 'page' },
  { dir: 'buddy_check_ins_nobody_left_behind', out: 'BuddyPage.tsx', name: 'BuddyPage', kind: 'page' },
  { dir: 'sync_offline_outbox_nobody_left_behind', out: 'SyncPage.tsx', name: 'SyncPage', kind: 'page' },
  { dir: 'resident_multi_channel_simulation_nobody_left_behind', out: 'ResidentSimPage.tsx', name: 'ResidentSimPage', kind: 'page' },
  { dir: 'community_registrar_register_nobody_left_behind', out: 'RegisterPage.tsx', name: 'RegisterPage', kind: 'page' },
  { dir: 'shelter_manager_shelter_nobody_left_behind', out: 'ShelterPage.tsx', name: 'ShelterPage', kind: 'page' },
  { dir: 'data_quality_console_quality_nobody_left_behind', out: 'QualityDataPage.tsx', name: 'QualityDataPage', kind: 'page' },
  { dir: 'algorithmic_fairness_console_quality_fairness_nobody_left_behind', out: 'QualityFairnessPage.tsx', name: 'QualityFairnessPage', kind: 'page' },
  { dir: 'immutable_decision_audit_log_quality_audit_nobody_left_behind', out: 'QualityAuditPage.tsx', name: 'QualityAuditPage', kind: 'page' },
  { dir: 'demo_control_center_admin_demo_nobody_left_behind', out: 'AdminDemoPage.tsx', name: 'AdminDemoPage', kind: 'page' },
]

const PATH_MAP = {
  'command-center': '/command',
  command: '/command',
  'dispatch-coordination': '/dispatch',
  dispatch: '/dispatch',
  'scenario-simulation': '/simulate',
  simulate: '/simulate',
  'quality-audit': '/quality',
  quality: '/quality',
  'incident-intake': '/intake',
  intake: '/intake',
  'admin-benchmarks': '/admin',
  admin: '/admin',
  'resident-simulation': '/resident-sim',
  'resident-sim': '/resident-sim',
  register: '/register',
  shelter: '/shelter',
  tasks: '/tasks',
  'volunteer-tasks': '/tasks',
  detail: '/tasks/PK-KHI-7821',
  'task-detail': '/tasks/PK-KHI-7821',
  buddy: '/buddy',
  'buddy-check-ins': '/buddy',
  sync: '/sync',
  'data-quality': '/quality',
  'algorithmic-fairness': '/quality/fairness',
  'audit-log': '/quality/audit',
  fairness: '/quality/fairness',
  audit: '/quality/audit',
}

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  autocomplete: 'autoComplete',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  maxlength: 'maxLength',
  minlength: 'minLength',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  novalidate: 'noValidate',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  inputmode: 'inputMode',
  maxlength: 'maxLength',
  minlength: 'minLength',
  spellcheck: 'spellCheck',
  srcset: 'srcSet',
  'stroke-width': 'strokeWidth',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'letter-spacing': 'letterSpacing',
  'text-anchor': 'textAnchor',
  'dominant-baseline': 'dominantBaseline',
  'alignment-baseline': 'alignmentBaseline',
  'paint-order': 'paintOrder',
  'marker-end': 'markerEnd',
  'marker-start': 'markerStart',
  'marker-mid': 'markerMid',
  'xlink:href': 'xlinkHref',
  'xml:space': 'xmlSpace',
  'xmlns:xlink': 'xmlnsXlink',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  gradientunits: 'gradientUnits',
  gradienttransform: 'gradientTransform',
  patternunits: 'patternUnits',
  patterntransform: 'patternTransform',
  patterncontentunits: 'patternContentUnits',
  clippathunits: 'clipPathUnits',
  spreadmethod: 'spreadMethod',
  stddeviation: 'stdDeviation',
}

const BOOL_ATTRS = new Set([
  'checked', 'selected', 'disabled', 'readonly', 'required', 'multiple',
  'autofocus', 'autoplay', 'controls', 'loop', 'muted', 'open', 'playsinline',
  'default', 'defer', 'hidden', 'novalidate', 'reversed', 'scoped', 'seamless',
  'itemScope', 'allowFullScreen', 'async', 'noValidate', 'formNoValidate', 'readOnly',
])

const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'])

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, '\u00a0')
}

function camelAttr(name) {
  if (ATTR_MAP[name]) return ATTR_MAP[name]
  if (name.startsWith('aria-') || name.startsWith('data-')) return name
  if (name.includes(':')) return name
  if (name.includes('-')) {
    return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
  }
  return name
}

function parseOnclick(val) {
  const m = val.trim().match(/^([a-zA-Z_$][\w$]*)\((.*)\)\s*;?$/)
  if (!m) return { action: val.replace(/"/g, '&quot;'), args: '[]' }
  const action = m[1]
  const raw = m[2].trim()
  if (!raw) return { action, args: '[]' }
  const args = []
  let cur = ''
  let q = null
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i]
    if (q) {
      if (ch === q) q = null
      cur += ch
    } else if (ch === '"' || ch === "'") {
      q = ch
      cur += ch
    } else if (ch === ',') {
      args.push(cur.trim())
      cur = ''
    } else cur += ch
  }
  if (cur.trim()) args.push(cur.trim())
  const jsonArgs = args.map((a) => {
    if (a === 'this') return '"__this__"'
    if (a === 'event') return '"__event__"'
    if ((a.startsWith("'") && a.endsWith("'")) || (a.startsWith('"') && a.endsWith('"'))) {
      return JSON.stringify(a.slice(1, -1))
    }
    if (a === 'true' || a === 'false' || a === 'null' || /^-?\d+(\.\d+)?$/.test(a)) return a
    return JSON.stringify(a)
  })
  return { action, args: `[${jsonArgs.join(',')}]` }
}

function convertStyle(style) {
  const parts = []
  for (const chunk of style.split(';')) {
    if (!chunk.trim()) continue
    const i = chunk.indexOf(':')
    if (i < 0) continue
    let k = chunk.slice(0, i).trim()
    const v = chunk.slice(i + 1).trim()
    if (!k) continue
    if (k.startsWith('--')) {
      parts.push(`${JSON.stringify(k)}: ${JSON.stringify(v)}`)
      continue
    }
    k = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    parts.push(`${k}: ${JSON.stringify(v)}`)
  }
  return `{{ ${parts.join(', ')} }}`
}

function convertTag(full, slash, rawName, attrs, selfclose) {
  const name = rawName
  const lower = name.toLowerCase()
  let outAttrs = []
  const attrRe = /([:@]?[\w:.-]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+)))?/g
  let am
  let toHref = null
  let dataPath = null
  while ((am = attrRe.exec(attrs))) {
    let an = am[1]
    if (an.startsWith('@') || an.startsWith(':')) continue
    let av = am[3] != null ? am[3] : am[4] != null ? am[4] : am[5] != null ? am[5] : null
    const lowerAn = an.toLowerCase()
    if (lowerAn === 'onclick') {
      const { action, args } = parseOnclick(av || '')
      outAttrs.push(`data-action="${action}"`)
      outAttrs.push(`data-args={${JSON.stringify(args)}}`)
      continue
    }
    if (lowerAn === 'onsubmit') {
      outAttrs.push(`data-action="submit"`)
      continue
    }
    if (lowerAn === 'onchange' || lowerAn === 'oninput' || lowerAn === 'onload' || lowerAn === 'onkeyup' || lowerAn === 'onkeydown') {
      const { action, args } = parseOnclick(av || '')
      outAttrs.push(`data-action="${action}"`)
      outAttrs.push(`data-args={${JSON.stringify(args)}}`)
      continue
    }
    if (lowerAn === 'style' && av != null) {
      outAttrs.push(`style=${convertStyle(decodeEntities(av))}`)
      continue
    }
    if (lowerAn === 'data-path' && av) {
      dataPath = av
      outAttrs.push(`data-path="${av}"`)
      continue
    }
    if (lowerAn === 'href' && av) {
      toHref = av
      continue
    }
    if (lowerAn === 'class' && av != null) {
      const cls = decodeEntities(av)
      outAttrs.push(`className={${JSON.stringify(cls)}}`)
      continue
    }
    const rn = camelAttr(lowerAn === 'viewbox' ? 'viewbox' : an)
    const mapped = ATTR_MAP[lowerAn] || rn
    if (av == null) {
      if (BOOL_ATTRS.has(lowerAn) || BOOL_ATTRS.has(mapped)) {
        outAttrs.push(`${mapped}={true}`)
      } else {
        outAttrs.push(mapped)
      }
      continue
    }
    const decoded = decodeEntities(av)
    if (BOOL_ATTRS.has(lowerAn) && (decoded === '' || decoded === an || decoded === 'true')) {
      outAttrs.push(`${mapped}={true}`)
      continue
    }
    if (lowerAn === 'value' && lower !== 'option') {
      outAttrs.push(`defaultValue={${JSON.stringify(decoded)}}`)
      continue
    }
    if (mapped === 'tabIndex' || mapped === 'colSpan' || mapped === 'rowSpan' || mapped === 'maxLength' || mapped === 'minLength') {
      const num = Number(decoded)
      if (!Number.isNaN(num) && String(num) === decoded) {
        outAttrs.push(`${mapped}={${num}}`)
        continue
      }
    }
    outAttrs.push(`${mapped}={${JSON.stringify(decoded)}}`)
  }
  if (lower === 'a') {
    const mapped = dataPath && PATH_MAP[dataPath]
    const dest = mapped || (toHref && toHref !== '#' ? toHref : null)
    if (dest && dest.startsWith('/')) {
      outAttrs.unshift(`to={${JSON.stringify(dest)}}`)
      const attrStr = outAttrs.join(' ')
      return `<Link ${attrStr}>`
    }
    if (toHref) outAttrs.push(`href={${JSON.stringify(toHref)}}`)
  } else if (toHref) {
    outAttrs.push(`href={${JSON.stringify(toHref)}}`)
  }
  const isVoid = VOID.has(lower)
  const attrStr = outAttrs.length ? ' ' + outAttrs.join(' ') : ''
  if (isVoid || selfclose) return `<${name}${attrStr} />`
  return `<${name}${attrStr}>`
}

function htmlToJsx(html) {
  let s = html
  const stack = []
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '')
  s = s.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/* ${c.replace(/\*\//g, '* /')} */}`)
  s = s.replace(/<(!DOCTYPE)[^>]*>/i, '')
  s = s.replace(/<\/(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\s*>/gi, '')
  s = s.replace(/<(\/)?([a-zA-Z][\w:-]*)([^>]*?)(\/)?>/g, (full, slash, name, attrs, selfclose) => {
    if (slash) {
      const open = stack.pop() || name
      return `</${open}>`
    }
    const converted = convertTag(full, slash, name, attrs || '', !!selfclose)
    const isVoid = VOID.has(name.toLowerCase()) || !!selfclose || converted.trimEnd().endsWith('/>')
    if (!isVoid) {
      const m = converted.match(/^<([A-Za-z][\w]*)\b/)
      stack.push(m ? m[1] : name)
    }
    return converted
  })
  return s
}

function extractBody(html) {
  const m = html.match(/<body([^>]*)>([\s\S]*)<\/body>/i)
  if (!m) return { bodyClass: '', inner: html }
  return { bodyClass: (m[1].match(/class="([^"]*)"/) || [,''])[1], inner: m[2] }
}

function wrapComponent(name, bodyClass, jsx) {
  const usesLink = jsx.includes('<Link ')
  return `import { ${usesLink ? 'Link, ' : ''}useNavigate } from 'react-router-dom'
import { usePageInteractions } from '../lib/interactions'

export default function ${name}() {
  const nav = useNavigate()
  const bind = usePageInteractions(${JSON.stringify(name)}, nav)
  return (
    <div className={${JSON.stringify(decodeEntities(bodyClass) || 'min-h-screen bg-background text-on-surface')}} {...bind}>
${jsx}
    </div>
  )
}
`
}

for (const screen of SCREENS) {
  const src = path.join(stitchRoot, screen.dir, 'code.html')
  if (!fs.existsSync(src)) {
    console.error('MISSING', src)
    continue
  }
  const html = fs.readFileSync(src, 'utf8')
  const { bodyClass, inner } = extractBody(html)
  let jsx = htmlToJsx(inner)
  // indent
  jsx = jsx
    .split('\n')
    .map((l) => (l.trim() ? '      ' + l : l))
    .join('\n')
  const file = wrapComponent(screen.name, bodyClass, jsx)
  const dest = path.join(pagesDir, screen.out)
  fs.writeFileSync(dest, file)
  console.log('wrote', screen.out, 'bytes', file.length)
}
