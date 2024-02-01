// CustomSvgIcon.js
import { SvgIcon } from '@mui/material';
import React from 'react';

const CustomSvgIcon = ({ svgData }) => (
  <SvgIcon
    component={() => <span dangerouslySetInnerHTML={{ __html: svgData }} />}
  />
);

export default CustomSvgIcon;


