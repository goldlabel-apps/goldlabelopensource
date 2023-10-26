/*
Usage: returns boolean true if a div exists with the specified id
const topAnchor = getIsElementInView(document.getElementById("topAnchor"))
*/

export const getIsElementInView = (
    element: HTMLElement | null,
) => {
    if (!element) return false
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}
