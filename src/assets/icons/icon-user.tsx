import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconUser(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.333 17.5h-1.666v-1.667a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5V17.5H0v-1.667a4.167 4.167 0 0 1 4.167-4.166h5a4.167 4.167 0 0 1 4.166 4.166V17.5ZM6.667 10a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-1.667a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
        fill="#748C94"
      />
    </Svg>
  );
}

export default IconUser;
