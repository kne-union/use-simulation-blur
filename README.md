
# use-simulation-blur


### 描述

模拟复合组件的失去焦点


### 安装

```shell
npm i --save @kne/use-simulation-blur
```


### 概述

一个用来模拟失去焦点事件的钩子

#### 为何需要使用？

在某些场景中，比如表单字段组件中，有两个输入框组合而成的复合字段，我们希望程序在用户完成两个文本框的输入时执行表单字段校验。
我们不能利用两个输入框任何一个的onBlur事件来触发校验，因为这样时不符合用户直觉和使用逻辑的。

这种情况，我们通过用户进入复合字段组件区域，完成输入，然后点击此区域外的地方来模拟触发onBlur事件来完成交互过程。


### 示例


#### 示例样式

```scss
.container {
  display: inline-block;
  background: #cccccc;
  padding: 20px;
}
```

#### 示例代码

- 基本示例
- 灰色区域为组件内部，在两个输入框输入完成后点击灰色区域外面触发失去焦点事件
- _useSimulationBlur(@kne/use-simulation-blur),input(antd/lib/input),space(antd/lib/space),_message(antd/lib/message)

```jsx
const { default: useSimulationBlur } = _useSimulationBlur;
const { default: Input } = input;
const { default: Space } = space;
const { default: message } = _message;

const BaseExample = () => {
  const ref = useSimulationBlur(() => {
    message.success('失去焦点');
  });
  return <div className='container' ref={ref}>
    <Space>
      <Input type='text' />
      <Input type='text' />
    </Space>
  </div>;
};

render(<BaseExample />);

```


### API

const ref = useSimulationBlur(callback, options);

注意：返回的ref必须传给一个dom的ref

|属性名|说明|类型| 默认值                |
|  ---  | ---  | --- |--------------------|
|callback|模拟的失去焦点事件触发后执行的回调|function| -                  |
|options|{strictMode} strictMode为是否开启严格模式，如果开启严格模式，只有容器内部的组件触发focus事件才会开启监听，通常还会监听容器的点击事件|object| {strictMode:false} |

