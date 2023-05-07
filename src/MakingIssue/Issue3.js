import React from 'react';
import './Issue3.css';

function Issue3() {
  return (
    <div className="issue3">
      <h2>
        Issue 3: Creating Navigation with Router, Routes, and Route without
        Switch
      </h2>
      <p>
        애플리케이션의 내비게이션 시스템을 제작했습니다. 이전 버전의 React
        Router에서는 일반적으로 Switch 컴포넌트를 사용해 내비게이션을
        처리했습니다. 하지만 최근 React Router 라이브러리의 변경으로 인해 Switch
        컴포넌트를 사용하지 않고 내비게이션을 만드는 방법을 배워야 했습니다.
        대신 Router, Routes, Route 컴포넌트를 사용했고 중첩 라우팅을 위해 Outlet
        컴포넌트도 활용했습니다.
      </p>

      <h3>Understanding Router, Routes, and Route</h3>
      <p>
        먼저 React Router 라이브러리의 새로운 컴포넌트에 익숙해져야 했습니다.
        Router 컴포넌트는 전체 애플리케이션을 감싸고 라우팅 기능을 제공하는
        최상위 컴포넌트입니다. Routes 컴포넌트는 개별 Route와 관련 컴포넌트를
        정의하는 여러 Route 컴포넌트를 위한 컨테이너입니다.
      </p>

      <h3>Setting Up the Navigation</h3>
      <p>
        새로운 컴포넌트를 이해한 후 애플리케이션의 내비게이션을 설정했습니다.
        먼저 'react-router-dom' 패키지에서 Router, Routes, Route, Outlet
        컴포넌트로 브라우저 Router를 가져왔습니다. 그런 다음 Router 컴포넌트로
        애플리케이션을 감싸고 여러 Route 컴포넌트를 포함하는 Routes 컴포넌트를
        만들었습니다.
      </p>
      <p>
        각 Route 컴포넌트에는 URL 패턴을 지정하는 Route property와 Route가
        일치할 때 렌더링할 컴포넌트를 정의하는 요소 property가 있었습니다. 이
        접근 방식을 통해 Switch 컴포넌트 없이도 명확하고 유연한 탐색 구조를 만들
        수 있었습니다.
      </p>

      <h3>Nested Routing with Outlet</h3>
      <p>
        메인 내비게이션을 만드는 것 외에도 애플리케이션의 일부에 대한 중첩
        라우팅도 처리해야 했습니다. 이때 Outlet 컴포넌트가 유용하게
        사용되었습니다. Outlet 컴포넌트는 부모 Route 컴포넌트 내에서 렌더링할
        하위 Route의 플레이스홀더 역할을 합니다.
      </p>
      <p>
        중첩 라우팅을 구현하기 위해 하위 Route를 렌더링할 상위 Route 컴포넌트에
        Outlet 컴포넌트를 추가했습니다. 그런 다음 상위 Route 컴포넌트 안에 하위
        Route에 대한 Route 컴포넌트를 포함하는 Routes 컴포넌트를 만들었습니다.
        이 구조를 통해 복잡한 내비게이션 시나리오를 쉽게 처리할 수 있는 중첩
        라우팅 시스템을 만들 수 있었습니다.
      </p>

      <p>
        결론적으로 Switch 컴포넌트 없이 Router, Routes, Route를 사용해
        내비게이션을 만들었습니다. 중첩 라우팅에 Outlet 컴포넌트를 사용하는
        방법을 배운 것도 복잡한 내비게이션 구조를 처리하는 능력을 향상시킨
        경험이었습니다. 이러한 경험을 통해 React Router에 대한 지식이
        넓어졌습니다.
      </p>
    </div>
  );
}

export default Issue3;
