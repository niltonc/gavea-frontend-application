import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconEyeOpen(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.93 6.033c.4.524.4 1.23 0 1.753-1.26 1.645-4.284 5.033-7.815 5.033-3.53 0-6.554-3.388-7.815-5.033a1.428 1.428 0 0 1 0-1.753C2.56 4.388 5.585 1 9.115 1c3.53 0 6.554 3.388 7.815 5.033v0Z"
        stroke="#748C94"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.115 9.442a2.533 2.533 0 1 0 0-5.065 2.533 2.533 0 0 0 0 5.065Z"
        stroke="#748C94"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconEyeOpen;
