const BASE_URL = "https://mivn-globel-website.vercel.app";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
