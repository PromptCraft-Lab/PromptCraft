# ai-routing-policy

무료 AI 경로와 fallback 정책을 정리한다.

## Use When

- AI provider를 선택할 때
- quota 상태를 다룰 때
- fallback과 stop 조건을 정리할 때

## Rules

- free-first를 기본으로 한다.
- quota exhausted면 hard stop한다.
- paid backend로 자동 전환하지 않는다.
- fallback은 숨기지 말고 명시한다.
- provider별 상태를 분리해서 기록한다.

## Output

- provider order
- fallback path
- hard stop condition
- quota notes
