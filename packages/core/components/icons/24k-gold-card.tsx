import React from 'react'
import { type LucideProps } from 'lucide-react'

const GoldCard: React.FC<LucideProps> = (props: LucideProps) => (
  <svg
  width={30}
  height={19}
  viewBox="0 0 30 19"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  {...props}
>
  <rect
    x="0.301025"
    y="0.834991"
    width="29.4192"
    height={18}
    fill="url(#pattern0_1322_5560)"
  />
  <defs>
    <pattern
      id="pattern0_1322_5560"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <use
        xlinkHref="#image0_1322_5560"
        transform="matrix(0.000891149 0 0 0.00140001 -0.338964 -0.257049)"
      />
    </pattern>
    <image
      id="image0_1322_5560"
      width={1878}
      height={1056}
    />
  </defs>
</svg>
)

export default GoldCard