# API Contract

## Core Endpoints

- `POST /api/v1/intent`
- `POST /api/v1/examples/search`
- `POST /api/v1/prompt/assemble`
- `POST /api/v1/ai/generate`
- `POST /api/v1/optimize/run`
- `POST /api/v1/optimize/compare`
- `GET /api/v1/history`
- `POST /api/v1/history/restore`
- `GET /api/v1/quota/state`
- `GET /api/v1/admin/logs`

## Rules

- request/response envelope은 통일한다.
- intent, retrieval, generation은 분리한다.
- quota exhausted면 hard stop한다.
- paid backend로 자동 전환하지 않는다.
- error code는 고정 enum으로 관리한다.

