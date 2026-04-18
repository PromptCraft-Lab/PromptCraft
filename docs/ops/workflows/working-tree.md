# Branch and Worktree Rules

PromptCraft에서 작업할 때 지켜야 하는 브랜치와 워킹트리 점검 항목을 정리한다.
브랜치 원칙과 PR/MR 기준은 `docs/conventions/04-branch.md`와 `docs/conventions/05-pr-mr.md`를 우선한다.

## Branch Checks

- 기본 브랜치에서 바로 작업하지 않는다.
- 브랜치명이 `docs/conventions/04-branch.md` 기준과 맞는지 확인한다.
- 한 브랜치에 하나의 작업만 담긴 상태인지 확인한다.

## Worktree Checks

- 비교가 필요한 작업은 기본적으로 워킹트리 2안 비교를 고려한다.
- 비교를 생략할 경우에는 이유를 짧게 남긴다.
- 비교 시에는 변경량, 파일 수, 검증 결과, 분리 적합성을 함께 본다.
- 선택 이유는 작업 로그나 관련 문서에 남긴다.

## Handoff

- 워킹트리 비교 결과는 관련 문서나 작업 로그에 짧게 남긴다.
- PR/MR 제출 전에는 `docs/ops/workflows/pr-mr.md`를 확인한다.

## Terminal Rules

- 한글이 깨지면 UTF-8 설정을 먼저 맞춘다.
- 긴 명령은 필요한 만큼만 나눠서 실행한다.
- 수정은 가능한 한 `apply_patch`를 우선한다.
- 빌드와 테스트는 필요한 시점에만 실행한다.

## UTF-8 Setup

```powershell
chcp 65001 > $null
[Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [Console]::OutputEncoding
```

## Failure Modes

- 한 브랜치에 여러 작업이 섞이는 상태
- 워킹트리 비교가 필요한데도 단일안만 만드는 상태
- 인코딩 문제로 문서/출력이 깨지는 상태
