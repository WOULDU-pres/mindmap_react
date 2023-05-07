import React from 'react';
import './NextMission.css';

function NextMission() {
  return (
    <div className="next-mission">
      <div className="missions">
        <h2>Mission1 : 한국어 최적화 설정</h2>
        <p>
          현재는 Davinci-003을 사용하고 있어, 한국어 결과의 신뢰도가 많이
          떨어진다.
        </p>
        <h3>구현 방안</h3>
        <p>1. KAKAOBRAIN의 KO-GPT 모델 사용</p>
        <p>2. 직접 GPT3 fine-tuning</p>
        <p>
          3. GPT4 모델 사용 (한국어 기능이 fine-tuning한 GPT3보다 괜찮다는 평가)
        </p>
      </div>

      <div className="missions">
        <h2>
          Mission2 : GPT brainstorm시에 알아서 다음 가지들을 만들어주는
          기능(필수)
        </h2>
        <p>
          현재 GPT 4 API 승인 이전이기에 적절한 답을 만들수가 없는 상태이다.
          정확도가 낮은 상태로 새로운 노드를 자동으로 생성한다면 오히려 사용자
          만족도가 떨어질 것으로 예상된다. 현재 GPT4 API 신청해둔 상태이므로
          기능만 구현해둘 예정이다.
        </p>
      </div>

      <div className="missions">
        <h2>Mission3 : Image generater 기능</h2>
        <p>Brainstorm한 주제와 알맞는 이미지를 마인드맵에 보여준다.</p>
        <h3>구현 방안</h3>
        <p>1. KAKAOBRAIN B^ DISCOVER 등 그림 생성모델 사용</p>
        <p>
          2. Stable diffusion활용 간단한 스케치 입력을 통해 원하는 디테일 이미지
          그려주기
        </p>
        <p>3. 웹 검색하여 적절한 이미지 가져오기</p>
      </div>

      <div className="missions">
        <h2>Mission4 : Tutorial</h2>
        <p>사용하기 편리하게 Tutorial 페이지, 혹은 영상을 Home에 띄워둔다.</p>
      </div>

      <div className="missions">
        <h2>Mission5 : Refactoring(진행중)</h2>
        <p>서비스 유지 보수를 위한 리팩토링 작업</p>
        <p>동시에 이점이 많은 next.js로 웹 변경 진행 중에 있다.</p>
      </div>
    </div>
  );
}

export default NextMission;
