import React, { useState, useEffect } from 'react';

function Travel() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국' : '외국';

  const location = {
    country : isKorea ? '한국' : '외국'
  }

  //location이 원시타입일 때는 비행기 타자 버튼을 누를 때만 호출된다.
  //객체타입일 때는 렌더링될 때마다 변수에 담긴 객체의 주소가 바뀌기 때문에
  //비행기 타자 버튼을 누를 때만 호출되는 것이 아니라 다른 값을 변화시켜도 호출된다. 
  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루의 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자~</button>
    </div>
  );
}

export default Travel;