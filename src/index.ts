export { default as Prefix } from './decorators/Prefix';
export { default as ReqOpt } from './Options';
export { default as Headers } from './decorators/Headers';
export { default as BodyType } from './decorators/BodyType';
export { default as Before } from './decorators/Before';
export { default as After } from './decorators/After';
export { default as Err } from './decorators/Error';
export { default as Extension } from './decorators/Extension';
export { default as JSONPCallbackPrefix } from './decorators/JSONPCallbackPrefix';
export { default as JSONPCallbackParam } from './decorators/JSONPCallbackParam';
export { default as Adapter } from './decorators/Adapter';
export { useAdapter as useAdapter } from './Request';
export {
  Get as Get,
  Post as Post,
  Patch as Patch,
  Put as Put,
  Delete as Delete,
  JSONP as JSONP,
} from './decorators/Methods';

export default {

};
