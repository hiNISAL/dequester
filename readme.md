# dequester

> 项目构建中 还无法使用
> 项目构建中 还无法使用
> 项目构建中 还无法使用

`dequester` 是跨平台的上层请求框架，支持 `Node`、`浏览器`、`小程序`。

利用装饰器描述请求。

## 安装

```shell
npm i dequester -S
```

## 使用

```ts
import { Post, Prefix, BodyType } from 'dequester';

@Prefix('https://domain.com')
class Request {
  @Post('/path')
  @BodyType('FormData')
  async getUserInfo(id) {
    // 请求参数
    return {
      user_id,
    };
  }
}

const request = new Request();

// do request
const info = await request.getUserInfo(996);
```
