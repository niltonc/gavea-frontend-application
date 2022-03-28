import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconEyeClose(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.787 12.083C3.229 10.977 1.997 9.54 1.3 8.631a1.43 1.43 0 0 1 0-1.754c1.26-1.645 4.285-5.033 7.815-5.033 1.584 0 3.065.681 4.33 1.582"
        stroke="#748C94"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.427 13.413a6.015 6.015 0 0 0 1.688.25c3.53 0 6.555-3.388 7.815-5.033a1.43 1.43 0 0 0 0-1.754 19.368 19.368 0 0 0-1.424-1.655m-4.592.749a2.534 2.534 0 0 0-4.339 1.786 2.533 2.533 0 0 0 .757 1.795l3.582-3.581Zm-8.552 8.537L15.869 1 2.362 14.507Z"
        stroke="#748C94"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconEyeClose;
