# dequester

## 注意！注意！注意！

仓库已经停止维护，已经重新实现，可以使用 [booze](https://www.npmjs.com/package/booze)。

因为这个项目已经比较久远，当初的实现也存在很多问题，所以重启新项目。

---

## 什么是dequester

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
import axiosAdapter from 'dequester/adapter/axios';

useAdapter(axiosAdapter); // 注册一个适配器 全局只需注册一次

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

## 适配器

`dequester` 只是一个收集请求信息的工具，处理请求依然以来第三方框架。

目前 `dequester` 只提供了 最简单的 `axios` 适配器。

通过这套机制，可以让 `dequester` 在任何支持 `装饰器` 特性的环境中工作。

### 注册适配器

```ts
import { useAdapter } from 'dequester';
import axiosAdapter from 'dequester/adapter/axios';

useAdapter(axiosAdapter); // 注册一个适配器 全局只需注册一次
```

### 编写适配器

适配器可以自己编写，其本身只是个函数。

```ts
import { useAdapter } from 'dequester';

const adapter = async (options) => {
  const res = await request(options);

  return res;
};

useAdapter(adapter);
```

函数的参数就是被 `requester` 收集处理后的请求信息。

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

## 方法

### useAdapter
