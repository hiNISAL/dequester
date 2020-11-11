import { JSONP, Post } from './decorators/Methods';
import {
  Prefix, Get, Headers, 
  useAdapter,
} from './index';
import axios from './adapters/axios';
import $ from './adapters/jquery';
useAdapter($);

const domain = 'http://wthrcdn.etouch.cn'

@Prefix(domain)
class Weather {
  @Get('/weather_mini')
  async get(city) {
    return {
      city,
    };
  }

  // @JSONP('/a')
  // async jsonpTest() {
  //   return {};
  // }
}

const request = new Weather();

request.get('宁波').then((res: any) => {
  console.log(res.data);
});

// request.jsonpTest();
