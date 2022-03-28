import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconLock(props: SvgProps) {
  return (
    <Svg
      width={15}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 5.833h1.667a.833.833 0 0 1 .833.834v10a.833.833 0 0 1-.833.833H.833A.833.833 0 0 1 0 16.667v-10a.833.833 0 0 1 .833-.834H2.5V5a5 5 0 1 1 10 0v.833ZM1.667 7.5v8.333h11.666V7.5H1.667Zm5 3.333h1.666V12.5H6.667v-1.667Zm-3.334 0H5V12.5H3.333v-1.667Zm6.667 0h1.667V12.5H10v-1.667Zm.833-5V5a3.333 3.333 0 0 0-6.666 0v.833h6.666Z"
        fill="#748C94"
      />
    </Svg>
  );
}

export default IconLock;
