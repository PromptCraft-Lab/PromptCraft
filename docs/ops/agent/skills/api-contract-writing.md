# api-contract-writing

API 계약을 일관된 형태로 쓰기 위한 기준이다.

## Use When

- 새 엔드포인트를 정의할 때
- request/response 형태를 바꿀 때
- error code나 quota 응답을 정리할 때

## Rules

- 요청과 응답은 예시를 함께 쓴다.
- 에러는 고정된 enum 또는 코드 체계를 따른다.
- envelope 구조를 통일한다.
- 인증, 권한, quota 규칙을 함께 적는다.
- 내부 구현 설명보다 계약을 먼저 적는다.

## Output

- endpoint
- request sample
- response sample
- error cases
- verification notes
