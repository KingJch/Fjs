
import {parse} from './html-parser'
const cache = Object.create(null)

export function compile(html) {
	html = html.trim()
	const hit = cache[html]
	return hit || (cache[html] = parse(html))
}