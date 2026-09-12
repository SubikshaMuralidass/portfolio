/// <reference types="vite/client" />

/* eslint-disable */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
