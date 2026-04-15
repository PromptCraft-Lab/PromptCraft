# GitHub Action Checks

PromptCraft의 브랜치 보호와 연결할 검증 체크 이름을 정한다.

## Check Names

- `repo-structure`
- `docs-integrity`
- `utf8-check`
- `ci-checks`
- `cd-checks`

## Role

- `repo-structure`: 필수 폴더와 패키지 이름이 프로젝트 기준과 맞는지 확인한다.
- `docs-integrity`: 메인 에이전트 가이드 길이, 핵심 문서 존재 여부, JS 앱 파일 금지를 확인한다.
- `utf8-check`: 저장소의 텍스트 파일이 UTF-8인지 확인한다.
- `ci-checks`: 기본 CI 준비 상태를 확인한다.
- `cd-checks`: 배포 준비 상태를 확인한다.

## Branch Protection

- `main` 브랜치는 위 다섯 체크가 모두 통과해야 병합할 수 있다.
- 필요하면 `dev` 브랜치에도 같은 체크를 적용한다.

## Validation

- 브랜치 보호 설정에서 체크 이름을 그대로 선택할 수 있다.
- 체크만 봐도 저장소 구조와 문서 상태를 확인할 수 있다.
