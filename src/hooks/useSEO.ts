import { useEffect } from 'react';

interface UseDocumentTitleOptions {
  title: string;
  description?: string;
  preserveTitleOnUnmount?: boolean;
}

export const useDocumentTitle = ({
  title,
  description,
  preserveTitleOnUnmount = false
}: UseDocumentTitleOptions) => {
  const defaultTitle = 'Kinshuk Saxena | Portfolio';
  const fullTitle = title ? `${title} | Kinshuk Saxena` : defaultTitle;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = fullTitle;

    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    return () => {
      if (!preserveTitleOnUnmount) {
        document.title = prevTitle;
      }
    };
  }, [fullTitle, description, preserveTitleOnUnmount]);
};

export const useCanonicalURL = (url?: string) => {
  useEffect(() => {
    const canonicalUrl = url || window.location.href;
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    
    link.href = canonicalUrl;

    return () => {
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [url]);
};
