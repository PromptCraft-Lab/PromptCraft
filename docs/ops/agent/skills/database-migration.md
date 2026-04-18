# database-migration

데이터베이스 스키마 변경과 migration 작성 기준이다.

## Use When

- 테이블을 추가하거나 바꿀 때
- 컬럼, 인덱스, 제약 조건을 수정할 때
- 기존 데이터에 영향을 주는 변경을 할 때

## Rules

- migration은 순서를 잃지 않게 관리한다.
- 스키마 변경과 데이터 이관을 분리해서 생각한다.
- 되돌리기 영향을 먼저 본다.
- 변경 이유와 영향 범위를 함께 적는다.
- application code보다 migration이 먼저 안전해야 한다.

## Output

- schema change
- migration plan
- rollback note
- verification steps
