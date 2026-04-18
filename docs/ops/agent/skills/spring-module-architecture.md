# spring-module-architecture

Spring 기반 모듈 분리와 패키지 경계에 대한 기준이다.

## Use When

- 새 도메인 패키지를 만들 때
- controller / service / repository 경계를 나눌 때
- 공통 코드가 너무 커질 때

## Rules

- controller는 입력과 응답만 다룬다.
- service는 유스케이스와 규칙을 가진다.
- repository는 저장과 조회만 담당한다.
- 도메인별 패키지는 서로의 내부 구현을 직접 참조하지 않는다.
- 공통 코드는 정말 공통일 때만 `common`으로 올린다.

## Output

- 영향을 받는 패키지
- 새 책임 분배
- 의존 방향
- 분리/추가가 필요한 테스트
