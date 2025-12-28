import { contentfulClient } from '../lib/contentful';

export const getWorks = async () => {
    const response = await contentfulClient.getEntries({
        content_type: "finalistsProfile",
        order: "-sys.createdAt"
    });

    return response.items;
}

export const getWorkBySlug = async (slug) => {
    const response = await contentfulClient.getEntries({
        content_type: "finalistsProfile",
        "fields.slug": slug,
        limit: 1
    });
    return response.items[0];
}