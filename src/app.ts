import { Post } from './decorators/Methods';
import { Prefix, Get, Headers, BodyType, ReqOpt, After, Extension, JSONPCallbackPrefix } from './index';

@Prefix('http://baidu.com')
@After(() => {
  console.log(123);
})
@JSONPCallbackPrefix('jsonppp')
class Request {
  @Get('/sth')
  @Headers({
    a: 1,
  })
  @After(() => {
    console.log(456);
  })
  @BodyType('FormData')
  public getUserInfo() {
    return {
      a: 1,
      b: 2,
    };
  }

  @Get('/sth2/:id')
  public async getList() {
    return ReqOpt({
      params: {
        id: 123,
      },
      data: {
        a: 1,
        b: 2,
      },
      headers: {
        abcc: '123',
      },
      cancel(cancelToken) {

      },
      extension: {
        ddd: 66
      },
    });
  }

  @Post('/aabbcc/:id')
  @JSONPCallbackPrefix('jsonppps')
  @Extension({
    a: 1,
    b: 2,
  })
  public async getSth() {
    return [
      {
        a: 1
      },
      {
        id: 2,
      },
      {
        ['Content-Type']: 'application/json',
      },
      (cancel) => {
        console.log(cancel);
      },
    ]
  }
}

const request = new Request();

request.getUserInfo();
request.getList().then((res) => {
  console.log('getList', res);
});
request.getSth().then(res => {
  console.log('getSth', res);
})
