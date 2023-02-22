import React, { useState, useMemo } from 'react';

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) { } //생각하는 시간
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  //함수형 컴포넌트이기 때문에 hardNumber이 바뀔 때마다 렌더링이 된다.
  //hardSum이 초기화되어 hardCalculate함수를 실행하고 값을 받아오는데 시간이 걸린다.
  //어려운 계산기의 input number를 수정한 후 hardSum 값이 바뀌는 데에 딜레이가 있다.
  //const hardSum = hardCalculate(hardNumber);

  //hardNumber가 바뀌었을 때만 hardSum를 초기화시켜준다.
  //easyNumber를 바꾸면 hardSum은 이미 메모라이즈된 값을 사용하고
  //easySum만 초기화되어 쉬운 계산기의 딜레이가 없어진다.
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  //for문을 없앴지만 hardSum처럼 딜레이가 있다.
  //함수형 컴포넌트라서 easyNumber를 바꾸면 hardSum, easySum 둘 다 초기화가 된다.
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;
