# Verification Workflow

이 문서는 작업 완료 전에 반드시 확인할 검증 흐름을 정리한다.

## Completion Gate

- 변경한 기능과 직접 연결된 검증을 먼저 실행한다.
- 테스트 결과를 확인한다.
- 빌드가 있는 경우 빌드도 확인한다.
- 문서 변경이 있으면 문서 링크와 실제 내용이 맞는지 점검한다.
- 완료 보고에는 검증 결과를 함께 적는다.

## Default Checks

- Backend change
  - `mvn test`
  - 필요하면 `mvn package`

- Frontend change
  - `npm run build`

- Docs change
  - 파일명, 경로, 링크가 실제 구조와 일치하는지 확인
  - 중복 설명이나 오래된 경로가 남아 있지 않은지 확인

- AI / routing change
  - free-first 동작이 유지되는지 확인
  - fallback이 명시적으로 반환되는지 확인
  - quota exhausted 상태가 hard stop으로 처리되는지 확인

## Completion Notes

- 검증하지 않은 항목은 완료라고 쓰지 않는다.
- 실패 경로는 숨기지 말고 함께 적는다.
- 반복되는 실패는 skill이나 docs로 흡수한다.
