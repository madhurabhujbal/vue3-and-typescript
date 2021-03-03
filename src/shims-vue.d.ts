// This is helper file for TS to give a better definition of .vue files. Do not modify this file
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
