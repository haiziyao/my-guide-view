---
title: 限流器
icon: fa6-brands:markdown
order: 2
category:
  - JavaGuide
tag:
  - 限流
---

## 限流器

### 令牌桶算法

::: info Token Bucket Algorithm

1. 在桶里放固定数量的Token 令牌
2. 只有拿到Token才能进行调用服务
3. 令牌由补充者补充

:::

::: important 实现

使用**Redis Hash** 来实现
- **rate_limit::func_my**
    - **Tokens**: 存数量
    - **ts**: 最后一次补充Token的时间

```java
//  

```

:::

### 漏桶算法

::: Leaky Bucket Algorithm

1. 存在一个固定大小的桶
2. 超过桶的大小，则丢弃请求
3. 约定固定速率从桶中取出请求

:::


::: important 实现

使用**Redis List** 来实现

```java
//  

```

:::


:::  tip 对比

目前还不明确到底差别在哪里

::: 

### 计数器算法
- 固定一个窗口限流
- 两个窗口的过渡的窗口会产生两倍请求

### 滑动窗口算法
- ZSet 滑动的窗口