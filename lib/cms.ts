// CMS integration placeholder (Contentful, Sanity, Prismic, etc.).
export type CmsPage = {
  slug: string;
  title: string;
  body: string;
};

export async function fetchCmsPage(_slug: string): Promise<CmsPage | null> {
  // Implement CMS fetch here.
  return null;
}
