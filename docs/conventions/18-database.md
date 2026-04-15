# Database Conventions

## Rules

- 관계형 데이터는 Postgres 기준으로 설계한다.
- 벡터 검색이 필요하면 `pgvector`를 사용한다.
- 검색용 필터와 similarity search를 같이 설계한다.
- 원문 입력과 운영 로그는 분리한다.

