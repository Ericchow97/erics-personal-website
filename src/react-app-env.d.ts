/// <reference types="react-scripts" />
declare module "react/jsx-runtime" {
  export default any;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.pdf"