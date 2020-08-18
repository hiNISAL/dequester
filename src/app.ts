import { Prefix, Get, Headers, BodyType, ReqOpt, After, Before } from './index';

@Prefix('http://baidu.com')
@After(() => {
  console.log(123);
})
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
  public getList() {
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
    });
  }
}

const request = new Request();

request.getUserInfo();
request.getList();
