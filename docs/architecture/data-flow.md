# Data Flow

## Purpose

사용자 입력이 결과로 바뀌는 순서를 설명한다.

## Main Flow

1. 사용자가 짧게 입력한다.
2. intent와 category를 추출한다.
3. 템플릿과 예시를 찾는다.
4. 프롬프트 구조를 조립한다.
5. 필요하면 AI로 보정한다.
6. 결과를 평가하고 저장한다.

## Rules

- intent, retrieval, generation은 분리한다.
- confidence가 낮으면 fallback을 명시한다.
- quota exhausted면 hard stop한다.
- 운영 로그와 사용자 기록은 분리한다.
