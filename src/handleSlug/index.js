export const handleSlug = (slug) => {
    let newslug = slug.toLowerCase().split('');
    for (let index = 0; index < newslug.length; index++) {
        if (newslug[index] === '&') {
            newslug.splice(index, 1);
            index--;
        }
    }
    return newslug.join('').split(' ').join('-');
};
