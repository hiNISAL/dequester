import { Post } from './decorators/Methods';
import {
  Prefix, Get, Headers, 
  BodyType, ReqOpt, After, Extension, JSONPCallbackPrefix,
  useAdapter,
} from './index';
import axios from './adapters/axios';

useAdapter(axios);

const domain = 'http://wthrcdn.etouch.cn'

@Prefix(domain)
class Weather {
  @Get('/weather_mini')
  async get(city) {
    return {
      city,
    };
  }
}

const request = new Weather();

request.get('宁波').then((res: any) => {
  console.log(res.data);
});
