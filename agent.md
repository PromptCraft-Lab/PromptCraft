# PromptCraft Agent Guide

이 문서는 PromptCraft에서 모든 작업의 기본 하네스다.
이 파일만 읽어도 작업 방향, 제한, 검증 기준을 바로 알 수 있어야 한다.

## Project Goal

- 사용자의 짧은 입력을 구조화된 프롬프트로 바꾼다.
- 프롬프트를 개선, 비교, 저장, 복원할 수 있게 한다.
- Spring Boot 백엔드와 React 프론트엔드로 단순하고 일관된 흐름을 유지한다.

## Tech Stack

- Frontend: React 19, TypeScript, Vite, Tailwind CSS
- Backend: Java 21, Spring Boot 3.x
- Data: Supabase Postgres, pgvector if needed
- AI: Gemini 2.0 Flash first, Llama fallback
- Deployment: Cloudflare Pages frontend, free backend hosting

## Working Rules

- 작은 단위로 변경한다.
- 기존 동작은 함부로 바꾸지 않는다.
- 관련 없는 파일은 건드리지 않는다.
- 수정은 가능한 한 `apply_patch`로 한다.
- 문서와 구현은 같은 변경 안에서 함께 갱신한다.
- UI, API, data, docs의 책임을 섞지 않는다.

## Verification Rules

- 검증하지 않은 상태를 완료라고 말하지 않는다.
- 변경과 연결된 테스트와 빌드를 먼저 확인한다.
- AI, routing, quota, fallback을 바꿨다면 실패 경로까지 확인한다.
- 문서 변경이 있으면 인용 링크와 범위를 같이 점검한다.

## Constraints

- public 흐름과 admin 흐름은 분리한다.
- AI provider 연동은 독립 계층으로 둔다.
- 무료 경로가 막히면 명시적으로 멈춘다.
- paid backend로 자동 전환하지 않는다.
- 입력값과 결과를 불필요하게 초기화하지 않는다.

## Output Rules

- 설명은 짧고 구체적으로 쓴다.
- 파일 경로는 절대 경로로 쓴다.
- 변경 요약은 무엇, 왜, 어떻게를 포함한다.
- 확인되지 않은 내용은 완료라고 말하지 않는다.

## Read Order

1. `docs/project/current-state.md`
2. `docs/README.md`
3. `docs/ops/README.md`
4. `docs/project/README.md`
5. `docs/architecture/README.md`
6. `docs/conventions/README.md`

## Harness References

- `docs/ops/agent/README.md`
- `docs/ops/agent/harness-engineering.md`
- `docs/ops/agent/skills/README.md`
- `docs/ops/workflows/verification.md`

## Update Rule

프로젝트 목표, 기술 스택, 작업 방식, 검증 흐름이 바뀌면 이 문서를 먼저 갱신한다.
