const SITE_URL = 'https://cloud-blog-2jk.pages.dev';
const SITE_NAME = 'AI Shop Blueprint';

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Practical AI strategies for Etsy sellers and Print-on-Demand entrepreneurs',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getBlogPostSchema(
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  author: string,
  imageUrl?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getCollectionPageSchema(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Blog - ${SITE_NAME}`,
    url,
    description: 'Articles about using AI and LLMs to grow your Etsy and Print-on-Demand business',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
