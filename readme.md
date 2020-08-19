# dequester

> 项目构建中 还无法使用
> 项目构建中 还无法使用
> 项目构建中 还无法使用

`dequester` 是跨平台的上层请求框架，支持 `Node`、`浏览器`、`小程序`，让开发者更侧重请求在业务逻辑上的表述能力。

利用装饰器描述请求，底层默认采用 [flyio](https://wendux.github.io/dist/#/doc/flyio/readme) 驱动，可以切换成 `axios`、`jquery` 提供的请求能力，也可自定义。

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
      user_id: id,
    };
  }
}

const request = new Request();

// do request
const info = await request.getUserInfo(996);
```

## 装饰器

### Get

### Post

### Patch

### Delete

### Put

### After

### Before

### BodyType

### Headers

### Prefix

### Config

### Cancel
