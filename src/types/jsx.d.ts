import * as React from 'react';

declare global {
  namespace JSX {
    // Map JSX.Element to React's element type
    type Element = React.ReactElement<any, any>;

    // Allow any intrinsic elements (keeps existing JSX typing flexible)
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
