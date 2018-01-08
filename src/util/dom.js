

/**
 * 获取outerHTML，注意SVG元素
 * @param  {Elemnt} el 
 * @return {String}    
 */
export function getOuterHTML(el) {
	if(el.outerHTML) {
		return el.outerHTML
	} else {
		var container = document.createElement('div')
		container.appendChild(el.cloneNode(true))
		return container.innerHTML
	}
}