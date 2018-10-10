export function addClassName (el, className) {
  if (el.hasClassName) {
    return
  }
  let newClassName = el.className.split(' ')
  newClassName.push(className)
  el.className = newClassName.join(' ')
}

export function hasClassName (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
