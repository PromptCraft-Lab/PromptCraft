# RAG Structure

## Purpose

PromptCraft의 프롬프트 생성 품질을 높이기 위해 예시와 템플릿을 찾는 구조를 정의한다.

## Data To Retrieve

- prompt template
- example prompt
- category metadata
- intent tags
- search aliases

## Rules

- category filter를 먼저 거는다.
- semantic similarity를 그 다음에 쓴다.
- 검색 결과는 설명 가능한 점수와 함께 돌려준다.
- 너무 넓은 검색은 피한다.

