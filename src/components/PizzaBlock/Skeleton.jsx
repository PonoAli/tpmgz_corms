import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <circle cx="135" cy="131" r="125" /> 
    <rect x="0" y="267" rx="10" ry="10" width="280" height="20" /> 
    <rect x="0" y="303" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="404" rx="10" ry="10" width="107" height="30" /> 
    <rect x="153" y="400" rx="10" ry="10" width="129" height="36" />
  </ContentLoader>
)

export default Skeleton;