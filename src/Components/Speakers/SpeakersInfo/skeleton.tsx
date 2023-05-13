import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={306}
    height={462}
    viewBox="0 0 306 462"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="150" cy="149" r="149" />
    <rect x="0" y="310" rx="10" ry="10" width="297" height="48" />
    <rect x="0" y="370" rx="10" ry="10" width="297" height="70" />
    <rect x="0" y="447" rx="5" ry="5" width="297" height="14" />
  </ContentLoader>
)

export default Skeleton
