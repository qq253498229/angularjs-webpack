# 说明

- [文件结构](#文件结构)
- [使用说明](#使用说明)

## 文件结构

- [common](app/common) 通用模块
  - [config.js](app/common/config.js) 全局配置类
  - [controller.js](app/common/controller.js) 最外层controller
  - [layout.html](app/common/layout.html) 布局页面
- [modules](app/modules) 业务模块
  - [user](app/modules/user) 用户模块
    - [index.js](app/modules/user/index.js) 配置文件
    - [user-router.js](app/modules/user/user-router.js) 用户模块路由
    - [user-list.html](app/modules/user/user-list.html) 用户列表页面
    - [user-list.js](app/modules/user/user-list.js) 用户列表控制器
    - [user-edit.html](app/modules/user/user-edit.html) 用户编辑页面
    - [user-edit.js](app/modules/user/user-edit.js) 用户编辑控制器
  - [role](app/modules/role) 角色模块
    - [index.js](app/modules/role/index.js) 配置文件
    - [role-router.js](app/modules/role/role-router.js) 角色模块路由
    - [role-list.html](app/modules/role/role-list.html) 角色列表页面


## 使用说明

开发

```bash
$ npm install
$ npm run dev
```

打包

```bash
$ npm install
$ npm run build

```
