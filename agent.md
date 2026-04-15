# PromptCraft Agent Guide

이 문서는 `PromptCraft` 저장소에서 작업을 시작할 때 가장 먼저 읽는 메인 운영 가이드다.

## 프로젝트 목적

PromptCraft는 사용자의 짧은 작업 요청을 작업 상황에 맞는 고품질 프롬프트로 빠르게 구조화하는 플랫폼이다.

핵심 목표는 다음과 같다.
- 프롬프트 작성 부담을 줄인다.
- 누락과 편차를 줄인다.
- 작업 유형에 맞는 프롬프트 구조를 자동으로 추천한다.
- 사용자가 바로 복사하거나 LLM에 넣어 쓸 수 있게 한다.

## 기술 방향

- 프론트엔드: React 19, TypeScript, Vite, Tailwind CSS
- 백엔드: Java 21, Spring Boot 3.x
- DB: Supabase Postgres 우선, 필요 시 pgvector 사용
- AI: Gemini 2.0 Flash 우선, Llama 보조/대체 경로
- 배포: Cloudflare Pages 프론트, 무료 백엔드 호스팅

## 읽는 순서

1. `agent.md`
2. `README.md`
3. `docs/README.md`
4. `docs/conventions/README.md`
5. `docs/project/` 아래의 제품 문서
6. `docs/architecture/` 아래의 구조 문서
7. `docs/workflow/` 아래의 작업 흐름 문서
8. `docs/ops/README.md`
9. `docs/ops/workflows/working-tree.md`
10. `docs/ops/workflows/pr-mr.md`
11. `docs/ops/workflows/github-action-checks.md`
12. `docs/ops/workflows/terminal.md`

## 작업 원칙

1. 작은 단위로 나눠서 변경한다.
2. 기존 동작은 함부로 바꾸지 않는다.
3. 관련 없는 파일은 건드리지 않는다.
4. 수정은 가능한 한 `apply_patch`로 한다.
5. 문서와 구현은 서로 어긋나지 않아야 한다.
6. AI 출력은 구조화되고 검증 가능해야 한다.
7. 프롬프트 생성 경험은 편의성을 최우선으로 한다.
8. 로그인 없이 바로 쓰는 흐름을 우선한다.
9. 관리자 기능은 일반 사용 흐름과 분리한다.
10. 무료 경로가 막히면 조용히 실패하지 말고 명시적으로 멈춘다.

## 제품 설계 원칙

- 사용자는 짧게 입력해도 된다.
- 시스템이 intent, category, subcategory, template, retrieval hint를 채운다.
- RAG, 청킹, NLU, fallback은 내부 엔진의 책임이다.
- 화면은 단순해야 하고, 복잡한 엔진은 숨겨야 한다.
- 사용자는 결과를 그대로 복사하거나 수정할 수 있어야 한다.

## 협업 원칙

- 불확실하면 추측하지 말고 불확실하다고 말한다.
- 가능하면 선택지를 좁혀서 제안한다.
- 작업 범위가 넓어지면 먼저 쪼갠다.
- 한 번에 너무 많은 기능을 건드리지 않는다.
- 문서 변경이 있으면 같은 변경에서 함께 갱신한다.
- 비교가 필요한 변경은 기본적으로 워킹트리 2안 비교를 고려한다.
- 한 브랜치에는 하나의 주제만 담는다.
- PR/MR에는 변경 요약, 이유, 검증 결과를 함께 남긴다.
- 브랜치 보호용 체크 이름은 문서와 맞춰둔다.
- 한글이 깨지면 UTF-8 설정을 먼저 맞춘다.

## 코드 기준

- 백엔드는 controller / service / repository 경계를 분리한다.
- 프론트는 features 기준으로 나눈다.
- 공통 계약은 `contracts/`에 둔다.
- DB와 벡터 검색 기준은 `Supabase Postgres`를 기준으로 둔다.
- AI provider 연동은 독립 계층으로 둔다.

## 출력 기준

- 설명은 짧고 구체적으로 쓴다.
- 파일 경로는 절대 경로를 쓴다.
- 변경 요약은 무엇/왜/어떻게를 포함한다.
- 검증하지 않은 내용은 완료라고 말하지 않는다.
- 한글이 깨지면 UTF-8 설정을 먼저 맞춘다.

## 보조 문서

- `docs/ops/agent/agent.md`
- `docs/README.md`
- `docs/conventions/`
- `docs/project/`
- `docs/architecture/`
- `docs/workflow/`
- `docs/ops/`

## Update Rule

프로젝트 목표, 기술 스택, 구조, 작업 방식이 바뀌면 이 문서를 먼저 갱신한다.
