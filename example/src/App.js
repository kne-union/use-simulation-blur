import useSimulationBlur from '@kne/use-simulation-blur';

const App = () => {
  const ref = useSimulationBlur(() => {
    console.log('哈哈哈哈');
  });
  return <div ref={ref}>
    <input type='text' />
  </div>;
};

export default App;
