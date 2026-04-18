# test-verification

작업 완료 전 검증 기준을 정리한다.

## Use When

- 기능 구현을 마쳤을 때
- 버그를 고쳤을 때
- AI routing, fallback, quota 같은 실패 경로를 바꿨을 때

## Rules

- 변경과 직접 연결된 검증만 먼저 실행한다.
- 성공 경로와 실패 경로를 같이 본다.
- 테스트 없이 완료라고 쓰지 않는다.
- 결과는 실행한 명령과 함께 기록한다.

## Default Checks

- Backend: `mvn test`
- Frontend: `npm run build`
- Docs: 링크와 경로 일치 여부 확인
- AI / routing: free-first, fallback, hard stop 확인

## Output

- 실행한 검증
- 통과 여부
- 남은 리스크
