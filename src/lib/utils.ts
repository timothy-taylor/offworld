export const toggleClass = (id: string, className: string) =>
    document.getElementById(id)?.classList.toggle(className);
