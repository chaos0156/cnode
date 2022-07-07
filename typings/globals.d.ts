// eslint-disable-next-line spaced-comment
/// <reference path="../node_modules/@fui/core/dist/lib/shims-tsx.d.ts" />

interface Obj {
    [key: string]: any;
}

declare let BI: Obj & import('@fui/core').BI;
declare const Fix: Obj;
declare const $: ((el: any) => any) & Obj;

declare interface String {
    replaceAll(regx: string | RegExp, callback: (str: string) => void): string;
}
