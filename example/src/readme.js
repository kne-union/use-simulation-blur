import * as component_17 from '@kne/use-simulation-blur';
import * as component_18 from 'antd/lib/input';
import * as component_19 from 'antd/lib/space';
import * as component_20 from 'antd/lib/message';
const readmeConfig = {
    name: `@kne/use-simulation-blur`,
    description: `模拟复合组件的失去焦点`,
    summary: `<p>一个用来模拟失去焦点事件的钩子</p>
<h4>为何需要使用？</h4>
<p>在某些场景中，比如表单字段组件中，有两个输入框组合而成的复合字段，我们希望程序在用户完成两个文本框的输入时执行表单字段校验。
我们不能利用两个输入框任何一个的onBlur事件来触发校验，因为这样时不符合用户直觉和使用逻辑的。</p>
<p>这种情况，我们通过用户进入复合字段组件区域，完成输入，然后点击此区域外的地方来模拟触发onBlur事件来完成交互过程。</p>`,
    api: `<p>const ref = useSimulationBlur(callback, options);</p>
<p>注意：返回的ref必须传给一个dom的ref</p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>callback</td>
<td>模拟的失去焦点事件触发后执行的回调</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td>{strictMode} strictMode为是否开启严格模式，如果开启严格模式，只有容器内部的组件触发focus事件才会开启监听，通常还会监听容器的点击事件</td>
<td>object</td>
<td>{strictMode:false}</td>
</tr>
</tbody>
</table>`,
    example: {
        isFull: false,
        className: `use_simulation_blur_62cc8`,
        style: `.use_simulation_blur_62cc8 .container {
  display: inline-block;
  background: #cccccc;
  padding: 20px; }
`,
        list: [{
    title: `基本示例`,
    description: `灰色区域为组件内部，在两个输入框输入完成后点击灰色区域外面触发失去焦点事件`,
    code: `const { default: useSimulationBlur } = _useSimulationBlur;
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

`,
    scope: [{
    name: "_useSimulationBlur",
    packageName: "@kne/use-simulation-blur",
    component: component_17
},{
    name: "input",
    packageName: "antd/lib/input",
    component: component_18
},{
    name: "space",
    packageName: "antd/lib/space",
    component: component_19
},{
    name: "_message",
    packageName: "antd/lib/message",
    component: component_20
}]
}]
    }
};
export default readmeConfig;
