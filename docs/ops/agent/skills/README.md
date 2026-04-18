# Skills

이 폴더는 PromptCraft에서 반복되는 작업 절차를 분리한 스킬 카탈로그다.

## Planned Skills

- `spring-module-architecture.md`
- `api-contract-writing.md`
- `database-migration.md`
- `test-verification.md`
- `docs-sync.md`
- `ai-routing-policy.md`

### `spring-module-architecture`

- Spring 패키지 경계와 모듈 분리를 정리한다.
- controller, service, repository의 책임을 나눈다.

### `api-contract-writing`

- API 요청/응답 계약을 작성한다.
- envelope, error code, sample payload를 정리한다.

### `database-migration`

- 스키마 변경과 migration 작성 규칙을 정리한다.
- 되돌리기와 영향 범위를 함께 본다.

### `test-verification`

- 태스크 완료 전 확인 항목을 정리한다.
- backend, frontend, integration 검증 순서를 둔다.

### `docs-sync`

- 코드 변경과 함께 갱신할 문서를 정리한다.
- current-state, roadmap, architecture 동기화를 돕는다.

### `ai-routing-policy`

- free-first, fallback, hard stop 규칙을 정리한다.
- quota exhausted 상태와 실패 경로를 다룬다.

## Skill Rules

- 각 skill은 하나의 태스크 유형만 다룬다.
- 공통 규칙은 `agent.md`에 남긴다.
- skill에는 절차, 체크리스트, 예시만 넣는다.
- skill이 커지면 다시 더 작은 skill로 나눈다.

## Suggested Load Order

1. `agent.md`
2. 해당 task의 skill
3. 필요할 때만 보조 문서
