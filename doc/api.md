const ref = useSimulationBlur(callback, options);

注意：返回的ref必须传给一个dom的ref

|属性名|说明|类型| 默认值                |
|  ---  | ---  | --- |--------------------|
|callback|模拟的失去焦点事件触发后执行的回调|function| -                  |
|options|{strictMode} strictMode为是否开启严格模式，如果开启严格模式，只有容器内部的组件触发focus事件才会开启监听，通常还会监听容器的点击事件|object| {strictMode:false} |
