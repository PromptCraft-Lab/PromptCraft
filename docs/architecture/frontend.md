# Frontend Architecture

## Purpose

프론트엔드의 책임과 경계를 정의한다.

## Responsibilities

- 사용자 입력을 받는다.
- 결과를 보여주고 복사하거나 수정할 수 있게 한다.
- 로딩, 에러, 빈 상태를 명확히 구분한다.
- API 호출은 화면 로직과 분리한다.

## Structure

- `app`: 부트스트랩과 라우팅
- `features`: 화면 단위 기능
- `components`: 재사용 UI
- `lib`: API client, 공통 유틸

## Rules

- 화면 조립과 비즈니스 규칙을 한 파일에 섞지 않는다.
- 입력 파싱과 데이터 가공은 가능한 한 UI 밖으로 뺀다.
- 공통 계약은 `contracts/` 기준으로 맞춘다.
