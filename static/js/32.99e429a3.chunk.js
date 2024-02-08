"use strict";(self.webpackChunk_kne_components_use_simulation_blur=self.webpackChunk_kne_components_use_simulation_blur||[]).push([[32],{59032:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c,manifest:()=>i});var s={};t.r(s),t.d(s,{default:()=>r});var u=t(49256),a=t(36952);const r=(n,e)=>{e=Object.assign({strictMode:!1,dom:null},e);const t=(0,u.useRef)(!1),s=(0,a.c)((()=>{!0===t.current&&n(),t.current=!1}));return(0,u.useEffect)((()=>{const n=()=>{e.strictMode||(t.current=!0)},u=()=>{e.strictMode&&(t.current=!0)};return s.current.addEventListener("click",n,!0),s.current.addEventListener("focus",u,!0),()=>{s.current&&s.current.removeEventListener("click",n),s.current&&s.current.removeEventListener("focus",u)}}),[]),s};const c={UseSimulationBlur:{name:"use-simulation-blur",summary:"<p>\u4e00\u4e2a\u7528\u6765\u6a21\u62df\u5931\u53bb\u7126\u70b9\u4e8b\u4ef6\u7684\u94a9\u5b50</p>\n<h4>\u4e3a\u4f55\u9700\u8981\u4f7f\u7528\uff1f</h4>\n<p>\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\uff0c\u6bd4\u5982\u8868\u5355\u5b57\u6bb5\u7ec4\u4ef6\u4e2d\uff0c\u6709\u4e24\u4e2a\u8f93\u5165\u6846\u7ec4\u5408\u800c\u6210\u7684\u590d\u5408\u5b57\u6bb5\uff0c\u6211\u4eec\u5e0c\u671b\u7a0b\u5e8f\u5728\u7528\u6237\u5b8c\u6210\u4e24\u4e2a\u6587\u672c\u6846\u7684\u8f93\u5165\u65f6\u6267\u884c\u8868\u5355\u5b57\u6bb5\u6821\u9a8c\u3002\n\u6211\u4eec\u4e0d\u80fd\u5229\u7528\u4e24\u4e2a\u8f93\u5165\u6846\u4efb\u4f55\u4e00\u4e2a\u7684onBlur\u4e8b\u4ef6\u6765\u89e6\u53d1\u6821\u9a8c\uff0c\u56e0\u4e3a\u8fd9\u6837\u65f6\u4e0d\u7b26\u5408\u7528\u6237\u76f4\u89c9\u548c\u4f7f\u7528\u903b\u8f91\u7684\u3002</p>\n<p>\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u901a\u8fc7\u7528\u6237\u8fdb\u5165\u590d\u5408\u5b57\u6bb5\u7ec4\u4ef6\u533a\u57df\uff0c\u5b8c\u6210\u8f93\u5165\uff0c\u7136\u540e\u70b9\u51fb\u6b64\u533a\u57df\u5916\u7684\u5730\u65b9\u6765\u6a21\u62df\u89e6\u53d1onBlur\u4e8b\u4ef6\u6765\u5b8c\u6210\u4ea4\u4e92\u8fc7\u7a0b\u3002</p>",description:"\u6a21\u62df\u590d\u5408\u7ec4\u4ef6\u7684\u5931\u53bb\u7126\u70b9",packageName:"@kne/use-simulation-blur",api:"<p>const ref = useSimulationBlur(callback, options);</p>\n<p>\u6ce8\u610f\uff1a\u8fd4\u56de\u7684ref\u5fc5\u987b\u4f20\u7ed9\u4e00\u4e2adom\u7684ref</p>\n<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>callback</td>\n<td>\u6a21\u62df\u7684\u5931\u53bb\u7126\u70b9\u4e8b\u4ef6\u89e6\u53d1\u540e\u6267\u884c\u7684\u56de\u8c03</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>{strictMode} strictMode\u4e3a\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u5982\u679c\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u53ea\u6709\u5bb9\u5668\u5185\u90e8\u7684\u7ec4\u4ef6\u89e6\u53d1focus\u4e8b\u4ef6\u624d\u4f1a\u5f00\u542f\u76d1\u542c\uff0c\u901a\u5e38\u8fd8\u4f1a\u76d1\u542c\u5bb9\u5668\u7684\u70b9\u51fb\u4e8b\u4ef6</td>\n<td>object</td>\n<td>{strictMode:false}</td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"use_simulation_blur_62cc8",style:".use_simulation_blur_62cc8 .container {\n  display: inline-block;\n  background: #cccccc;\n  padding: 20px; }\n",list:[{title:"\u57fa\u672c\u793a\u4f8b",description:"\u7070\u8272\u533a\u57df\u4e3a\u7ec4\u4ef6\u5185\u90e8\uff0c\u5728\u4e24\u4e2a\u8f93\u5165\u6846\u8f93\u5165\u5b8c\u6210\u540e\u70b9\u51fb\u7070\u8272\u533a\u57df\u5916\u9762\u89e6\u53d1\u5931\u53bb\u7126\u70b9\u4e8b\u4ef6",code:"const { default: useSimulationBlur } = _useSimulationBlur;\nconst { default: Input } = input;\nconst { default: Space } = space;\nconst { default: message } = _message;\n\nconst BaseExample = () => {\n  const ref = useSimulationBlur(() => {\n    message.success('\u5931\u53bb\u7126\u70b9');\n  });\n  return <div className='container' ref={ref}>\n    <Space>\n      <Input type='text' />\n      <Input type='text' />\n    </Space>\n  </div>;\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_useSimulationBlur",packageName:"@kne/use-simulation-blur",component:s},{name:"input",packageName:"antd/lib/input",component:t(66372)},{name:"space",packageName:"antd/lib/space",component:t(45096)},{name:"_message",packageName:"antd/lib/message",component:t(69736)}]}]}}},i={name:"use-simulation-blur",version:"0.1.2","open-version":!0,"public-url":"/use-simulation-blur",modules:[{name:"use-simulation-blur",baseDir:"/home/runner/work/use-simulation-blur/use-simulation-blur",description:"\u6a21\u62df\u590d\u5408\u7ec4\u4ef6\u7684\u5931\u53bb\u7126\u70b9",packageName:"@kne/use-simulation-blur"}]}}}]);
//# sourceMappingURL=32.99e429a3.chunk.js.map