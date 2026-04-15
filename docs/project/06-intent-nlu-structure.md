# Intent and NLU Structure

## Purpose

짧은 입력에서 사용자의 작업 의도를 최대한 빨리 잡아내는 구조를 정의한다.

## Output

- intent key
- category
- subcategory
- confidence
- fallback reason

## Rules

- 짧은 입력은 보수적으로 해석한다.
- confidence가 낮으면 fallback을 명시한다.
- 사용자 의도를 템플릿 선택과 연결한다.
- 추측이 많아지면 결과를 숨기지 말고 드러낸다.

