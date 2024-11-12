/** @param {string} id **/

const findTemplate = (id) => {
  const template = document.getElementById(id);
  return template.content.firstElementChild;
};

/** @template item **/
/** @param {item[]} item **/
/** @param {(item: item) => HTMLElement} makeElement **/
/** @param {HTMLElement} container **/

const renderPack = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(makeElement(item)));
  container.appendChild(fragment);
};

export {findTemplate, renderPack };
