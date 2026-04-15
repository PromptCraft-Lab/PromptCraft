# Folder Split Rules

## Rules

- 기능 책임이 다르면 폴더를 분리한다.
- 실행 환경이 다르면 폴더를 분리한다.
- 소유 주체가 다르면 폴더를 분리한다.
- 공통으로 재사용되는 것은 `shared`로 모은다.

## Current Base

- `frontend/`: 사용자 화면
- `backend/`: API와 서버 로직
- `contracts/`: 공통 계약
- `docs/`: 설계와 운영 문서
- `infra/`: 배포와 환경 설정

