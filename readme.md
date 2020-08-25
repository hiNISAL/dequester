# dequester

> 项目构建中 还无法使用
> 项目构建中 还无法使用
> 项目构建中 还无法使用

`dequester` 是跨平台的上层请求框架，支持 `Node`、`浏览器`、`小程序`，让开发者更侧重请求在业务逻辑上的表述能力。

## 安装

```shell
npm i dequester -S
```

安装对应的适配器依赖（不需要全部安装，如底层想使用 `axios` 驱动，只需要安装 `axios`）。

```shell
npm i axios -s
npm i flyio -s
npm i jquery -s
```

## 使用

```ts
import { Post, Prefix, BodyType, useAdapter } from 'dequester';
import { axios } from 'dequester/adapter/axios';

useAdapter(axios); // 注册一个适配器 全局只需注册一次

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

### Cancel

### Adapter
