export interface iReqOpt {
    headers?: {
        [propName: string]: string;
    };
    data?: any;
    params?: {
        [propName: string]: string;
    };
    before?: Function;
    after?: Function;
    useEachBefore?: Function;
    useEachAfter?: Function;
    useBefore?: Function;
    useAfter?: Function;
    cancel?: Function;
    error?: Function;
    extension?: any;
    jsonpCallbackPrefix?: string;
    jsonpCallbackParam?: string;
    adapter: Function | null | undefined;
}
