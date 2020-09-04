export declare const setMethodTag: (tag: any, value: any) => (target: any, name: any) => void;
export declare const setClassTag: (tag: any, value: any) => (target: any) => void;
export declare const setCommonTag: (methodTag: any, value: any, classTag?: any) => (target: any, ...args: any[]) => void;
export declare const clone: (object: any) => any;
