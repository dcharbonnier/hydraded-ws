export const uuid = () => (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`)
    .replace(/[018]/g, (c: any) => (c ^ Math.random() * 16 >> c / 4).toString(16));
