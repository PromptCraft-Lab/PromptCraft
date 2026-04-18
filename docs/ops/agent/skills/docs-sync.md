# docs-sync

코드 변경과 문서 변경을 같이 맞추기 위한 기준이다.

## Use When

- 구조, API, 라우팅, 검증 흐름이 바뀔 때
- README나 roadmap을 갱신해야 할 때
- current-state를 다시 써야 할 때

## Rules

- 코드가 바뀌면 관련 문서도 같이 확인한다.
- 문서는 중복보다 canonical source를 먼저 둔다.
- 오래된 경로, 오래된 이름, 오래된 흐름은 남기지 않는다.
- 변경 범위가 크면 문서도 한 번에 나눠 정리한다.

## Target Docs

- `docs/project/current-state.md`
- `docs/project/README.md`
- `docs/architecture/README.md`
- `docs/ops/README.md`
- `docs/ops/workflows/verification.md`

## Output

- updated docs
- outdated docs removed or left untouched
- follow-up docs needed
