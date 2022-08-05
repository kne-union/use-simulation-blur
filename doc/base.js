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
