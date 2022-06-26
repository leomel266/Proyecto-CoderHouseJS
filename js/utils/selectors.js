/**
 * @param  {string} selector
 * @param  {Element | document} node=document
 */
export function $ (selector, node = document){
    return node.querySelector(selector);
}

export function $$ (selector, node=document){
    return [...node.querySelectorAll(selector)];
}