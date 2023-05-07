import React from 'react';
import './Issue2.css';

function Issue2() {
  return (
    <div className="issue2">
      <h2>
        Issue 2: Connecting to GPT and Using Axios without OpenAI Installation
        and Separate Back-end Configuration
      </h2>
      <p>
        이 프로젝트에서 제가 직면한 또 다른 중요한 과제는 콘텐츠를 생성하기 위해
        GPT API를 통합하고, OpenAI를 설치하거나 별도의 백엔드를 구성하지 않고도
        HTTP 요청을 처리하기 위해 Axios를 사용하는 것이었습니다. GPT API와
        통신할 수 있는 안정적이고 효율적인 방법이 필요했고, Axios는 훌륭한
        선택처럼 보였습니다. 하지만 그 과정에서 몇 가지 어려움에 직면했습니다.
      </p>

      <h3>Understanding the GPT API</h3>
      <p>
        우선 GPT API의 작동 방식과 상호 작용하는 방법을 이해해야 했습니다. 공식
        문서는 API 엔드포인트, 입력 매개변수, 응답 형식에 대한 자세한 정보를
        제공했습니다. 저는 API 사용 모범 사례와 요청 형식을 올바르게 지정하는
        방법을 이해하기 위해 설명서를 공부하는 데 시간을 할애했습니다.
      </p>

      <h3>Integrating Axios</h3>
      <p>
        공식 문서에 나온 설명처럼 openai 라이브러리를 install하는 것은 react에서
        사용할 수 없는 방법이었기에 Axios를 프로젝트에 통합하였습니다. Axios는
        자바스크립트에서 HTTP 요청을 만드는 데 널리 사용되는 다목적
        라이브러리입니다. 저는 단순성, 오류 처리 기능, 요청 취소 기능 때문에
        Axios를 사용하기로 결정했습니다. Axios를 사용하기 위해 먼저 npm을
        사용하여 설치한 다음 프로젝트에 가져왔습니다.
      </p>

      <h3>Connecting to GPT API using Axios and Netlify Functions</h3>
      <p>
        3일이라는 짧은 시간동안 백앤드 구성까지 완성하기에는 무리가 있었기에
        때문에 Netlify 함수를 사용하여 GPT API와 안전하게 상호 작용하기로
        결정했습니다. Netlify 함수는 프론트엔드 애플리케이션과 함께 쉽게 배포할
        수 있는 서버리스 함수입니다. 이러한 함수는 API 키와 같은 민감한 정보를
        노출하지 않고도 외부 API와의 통신과 같은 작업을 처리할 수 있습니다. 저는
        프런트엔드 애플리케이션의 요청을 GPT API로 전달하는 Netlify 함수를
        만들었습니다. 함수 내부에서 Axios를 사용하여 API 키를 포함한 필수 헤더와
        함께 HTTP 요청을 GPT API로 보냈습니다. 이 접근 방식을 통해 별도의
        백엔드나 OpenAI 라이브러리를 설치할 필요 없이 GPT API와 안전하게 통신할
        수 있었습니다.
      </p>
      <p>
        저는 프런트엔드 애플리케이션의 요청을 GPT API로 전달하는 Netlify 함수를
        만들었습니다. 함수 내에서 Axios를 사용하여 API 키를 포함한 필수 헤더와
        함께 HTTP 요청을 GPT API로 보냈습니다. 이 접근 방식을 통해 별도의
        백엔드나 OpenAI 라이브러리를 설치할 필요 없이 GPT API와 안전하게 통신할
        수 있었습니다.
      </p>

      <h3>Connecting the Front-end to the Netlify Function</h3>
      <p>
        Netlify 함수를 설치한 후 Axios를 사용하여 프런트엔드 애플리케이션에서
        요청을 보냈습니다. 사용자 입력을 받아 Netlify 함수로 전송한 다음 GPT
        API에서 응답을 처리하는 함수를 만들었습니다. Axios를 사용하면 오류, 시간
        초과를 쉽게 처리하고 필요한 경우 요청을 취소할 수 있습니다. Netlify
        함수를 통해 Axios와 GPT API를 통합한 덕분에 원활하고 안전한 사용자
        경험을 제공할 수 있었습니다.
      </p>

      <p>
        요약하자면, OpenAI 설치와 별도의 백엔드 구성 없이 GPT API에 연결하고
        Axios를 사용하는 것은 어렵지만 깨달음을 주는 경험이었습니다. API 통합,
        보안 통신의 중요성, Netlify Functions와 같은 서버리스 기능을 프론트엔드
        애플리케이션과 함께 사용할 때의 이점에 대해 배웠습니다. 이 지식은 향후
        프로젝트에 매우 유용할 것이며 현재 프로젝트의 기능과 보안을 크게
        향상시켰습니다.
      </p>
    </div>
  );
}

export default Issue2;
