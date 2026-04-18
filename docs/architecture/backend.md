# Backend Architecture

## Purpose

백엔드의 서비스 경계와 책임을 정의한다.

## Modules

- `routing`: intent 분석과 템플릿 선택
- `knowledge`: 템플릿, 예시, 검색 자산
- `prompt`: 프롬프트 조립과 구조화
- `ai`: provider adapter와 fallback
- `optimize`: 반복 개선과 비교
- `history`: 버전 저장과 복원
- `admin`: 로그, quota, 통계
- `storage`: DB와 vector search
- `common`: 응답, 예외, 검증

## Rules

- controller, service, repository 경계를 분리한다.
- retrieval과 generation을 분리한다.
- admin과 public 흐름을 분리한다.
- quota가 소진되면 명시적으로 멈춘다.
