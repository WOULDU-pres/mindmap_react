import React from 'react';
import './Issue4.css';

function Issue4() {
  return (
    <div className="issue4">
      <h2>Issue4 : Implementation of Hover Effect for Brainstorm Button</h2>
      <h3>Initial Implementation</h3>
      <p>
        초기 목표는 노드에 콘텐츠가 있을 때만 활성화되는 브레인스토밍 버튼에
        고유한 호버 효과를 만드는 것이었습니다. 또한 이 버튼은 텍스트 입력을
        방해하지 않으면서 클릭 시 OpenAI 브레인스토밍을 트리거해야 했습니다.
        처음에는 CSS 전환을 사용하여 버튼의 배경색, 상자 그림자, 텍스트 색상을
        변경하여 호버 효과를 구현하려고 했습니다.
      </p>
      <h3>Problem: Hover Blocking Text Input</h3>
      <p>
        하지만 마우스가 버튼 영역 위에 있을 때 호버 효과로 인해 텍스트 입력이
        차단되는 문제가 발생했습니다. 이로 인해 브레인스토밍 버튼이 표시되었을
        때 사용자가 텍스트 입력과 상호작용할 수 없었습니다.
      </p>
      <h3>Attempted Solution: JavaScript Event Listeners</h3>
      <p>
        이 문제를 해결하기 위해 자바스크립트 이벤트 리스너를 사용해 버튼에
        마우스를 갖다 댔을 때 CSS 클래스를 추가하고 제거했습니다. 또한 노드에
        콘텐츠가 있을 때만 버튼이 표시되도록 했습니다. 이 접근 방식은 호버
        이벤트가 텍스트 입력을 방해하는 문제를 해결하기 위한 것이었습니다.
      </p>
      <h3>Problem: Hover Event Still Blocking Text Input</h3>
      <p>
        하지만 이 솔루션은 생각했던대로 작동하지 않았습니다. 마우스오버 이벤트가
        여전히 텍스트 입력을 방해하고 있었습니다. 따라서 원하는 기능을
        달성하려면 다른 접근 방식이 필요하다는 것이 분명해졌습니다.
      </p>
      <h3>Attempted Solution: Delay Hover Event Using 'setTimeout'</h3>
      <p>
        setTimeout 함수를 사용하여 호버 이벤트를 1초 지연시켜 문제를 해결하고자
        했습니다. 이렇게 하면 사용자가 호버 이벤트가 활성화되기 전에 텍스트를
        입력할 수 있도록 했습니다. 안타깝게도 이 접근 방식도 마우스가 hover되는
        즉시 호버 이벤트가 발생하여 문제를 해결할 수 있는 방법이 되지
        못했습니다.
      </p>
      <h3>Alternative Solution: Creating an 'enabled' Class</h3>
      <p>
        다른 해결책으로 버튼에 대한 'enabled' 클래스를 생성하고 노드에 콘텐츠가
        있을 때만 'display' 속성을 'block'으로 설정했습니다. 이렇게 하니 텍스트
        입력이 버튼에 가려지지 않고 제대로 작동할 수 있었습니다.
      </p>
      <h3>Problem: OpenAI Brainstorming Not Triggered</h3>
      <p>
        그러나 또 다른 문제가 발생했습니다. 버튼을 클릭했을 때 OpenAI
        브레인스토밍 기능이 트리거되지 않는다는 것이었습니다. 즉, 호버 효과는
        작동하고 텍스트 입력은 정상적으로 이루어졌지만 버튼의 기본 목적은
        달성되지 않았습니다.
      </p>
      <h3>Final Solution: Adding a 'handleClick' Function</h3>
      <p>
        이 문제를 해결하기 위해 handleBrainstorm 함수를 호출하기 전에 버튼이
        활성화되어 있는지 확인하는 handleClick 함수를 추가했습니다. 이렇게 하면
        버튼이 활성 상태일 때만 브레인스토밍 기능이 트리거되어 문제를 해결할 수
        있었습니다.
      </p>
      <p>
        최종적으로 브레인스토밍 버튼에 원하는 호버 효과를 구현하는 동시에 텍스트
        입력을 방해하지 않고 클릭 시 OpenAI 브레인스토밍이 트리거되도록 하는 데
        성공했습니다.
      </p>
    </div>
  );
}

export default Issue4;
