import React, { useState } from 'react';

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) { } //생각하는 시간
  return number + 10000;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);

  //함수형 컴포넌트이기 때문에 hardNumber이 바뀔 때마다 렌더링이 된다.
  //hardSum이 초기화되어 hardCalculate함수를 실행하고 값을 받아오는데 시간이 걸린다.
  //어려운 계산기의 input number를 수정한 후 hardSum 값이 바뀌는 데에 딜레이가 있다.
  const hardSum = hardCalculate(hardNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
    </div>
  );
}

export default App;
