# Harness Engineering

PromptCraft의 하네스는 AI가 무엇을 알게 할지, 무엇을 금지할지, 무엇으로 검증할지를 분리해서 관리하는 방식이다.

## 5 Levers

### 1. System Prompt

- `agent.md`에 둔다.
- 모든 태스크에 공통으로 적용되는 규칙만 넣는다.
- 너무 긴 설명, 조건부 분기, 중복된 지식은 넣지 않는다.

### 2. Skills

- 반복 작업은 skill 문서로 분리한다.
- 태스크 시작 전에 필요한 지식만 읽는다.
- 작업별 best practice와 체크리스트를 캡슐화한다.

### 3. MCP

- 외부 도구는 최소한으로 둔다.
- 실제로 반복 사용하는 도구만 연결한다.
- 도구 수가 늘어나면 선택 혼란이 커진다.

### 4. Subagents

- 긴 태스크를 쪼개는 방화벽으로 사용한다.
- 독립적인 조사, 비교, 검토를 분리한다.
- 메인 작업의 컨텍스트를 오염시키지 않는다.

### 5. Hooks

- 완료 직전 검증을 강제하는 장치로 사용한다.
- pre-commit, pre-completion, doc-sync, loop-detection 같은 단계가 여기에 해당한다.

## PromptCraft Mapping

- `agent.md`는 짧게 유지한다.
- 반복 작업은 `docs/ops/agent/skills/`로 내린다.
- 완료 직전 확인은 `docs/ops/workflows/verification.md`를 따른다.
- 복잡한 조사나 정리는 필요할 때만 subagent로 분리한다.

## Rule

- 하네스 문서는 제품 문서와 겹치지 않게 둔다.
- 하네스는 규칙, 검증, 피드백의 레이어를 만든다.
- 세부 구현은 코드보다 문서와 workflow로 먼저 정의한다.
