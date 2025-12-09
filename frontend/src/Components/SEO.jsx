import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage
}) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Standard SEO meta tags
    setMeta("description", description);
    setMeta("keywords", keywords);

    // Open Graph Tags (for social media previews)
    setProperty("og:title", ogTitle || title);
    setProperty("og:description", ogDescription || description);
    setProperty("og:image", ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage]);

  return null;
}

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}
