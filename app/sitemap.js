export default function sitemap() {
  const baseUrl = 'https://www.ristorante-alteatro.it'

  // Only indexable pages belong here; add lastModified only from verified content dates.
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
