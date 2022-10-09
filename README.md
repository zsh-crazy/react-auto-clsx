# react-auto-clsx

主要解决 react 在webpack，vite 中使用clsx插件繁琐的书写clsx问题，可以极大的提高编写代码的效率

#安装
pnpm add -D react-auto-clsx

npm i -D react-auto-clsx

# 使用

详情可以参考examples中的案例，

## 在vite中
```
//tsconfig.json

"jsx": "react-jsx",
"jsxImportSource": "react-auto-clsx"

//vite.config.ts
plugins: [react({
    babel:{
      babelrc: true,
      configFile: true,
    }
  })],

//babel.config.cjs
 plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "react-auto-clsx",
      },
    ],
  ],

```


## 在webpack中，如果是ts-loader来处理tsx文件

```
//tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react-auto-clsx",
  }
}

//webpack.config.js
module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
    ],
  },
```

## 在webpack中利用babel-loader 来处理tsx文件

```
//tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react-auto-clsx",
  }
}

//webpack.config.js
module: {
    rules: [
      { test: /\.tsx?$/, use: 'babel-loader' }
    ],
  },

```
在tsx中就可以直接使用了,如下是不是很方便

```
<div className={['a',{b:true}]}></div>

```

如果你是react，也可以使用react-auto-classnames来解决您的问题，如果对您有帮助，请star一下，多多支持
