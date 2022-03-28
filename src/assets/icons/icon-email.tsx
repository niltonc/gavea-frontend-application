import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function IconEmail(props: SvgProps) {
  return (
    <Svg
      width={17}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.833 0h15a.833.833 0 0 1 .834.833v13.334a.833.833 0 0 1-.834.833h-15A.833.833 0 0 1 0 14.167V.833A.833.833 0 0 1 .833 0ZM15 3.532 8.393 9.448 1.667 3.513v9.82H15V3.532ZM2.092 1.667l6.292 5.551 6.201-5.551H2.092Z"
        fill="#748C94"
      />
    </Svg>
  );
}

export default IconEmail;
