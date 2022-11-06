import slugify from 'slugify';

export const handleSlug = (slug) => {
    const newSlug = slugify(slug,{
        replacement: '-', 
        remove: undefined, 
        lower: true, 
        strict: true, 
        locale: 'vi', 
        trim: true,
    });
    return newSlug;
};
