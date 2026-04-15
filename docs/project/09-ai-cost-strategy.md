# AI Cost Strategy

## Principle

- 무료 AI를 먼저 쓴다.
- 막히면 조용히 다른 유료 경로로 넘어가지 않는다.
- 비용보다 편의성을 우선하지만, 운영 불능은 피한다.

## Suggested Order

1. Gemini 2.0 Flash
2. Llama

## Rules

- quota가 소진되면 hard stop한다.
- backend별 상태를 기록한다.
- 재시도와 fallback은 명시적으로 관리한다.

