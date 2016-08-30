# m-progress

---

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

* 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
* 当需要显示一个操作完成的百分比时。

## API

## Progress Line

| 参数     | 说明           | 类型     | 可选值        | 默认值        |
|----------|----------------|----------|---------------|---------------|
| schedule  | 进度条百分比        | String   |      |     '0%'    |