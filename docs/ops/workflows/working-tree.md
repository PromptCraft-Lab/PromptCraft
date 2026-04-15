# Branch and Worktree Rules

PromptCraft에서 작업할 때 지켜야 하는 브랜치, 워킹트리, PR 규칙을 정리한다.

## Branch Rules

- 기본 브랜치에서 바로 작업하지 않는다.
- 작업은 목적이 드러나는 브랜치에서 시작한다.
- 브랜치명은 영어 소문자와 하이픈을 사용한다.
- 브랜치명은 짧고 의미가 보여야 한다.
- 한 브랜치에는 하나의 작업만 담는다.
- 권장 접두사는 `feat/`, `fix/`, `docs/`, `refactor/`, `hotfix/`다.

## Suggested Format

- 기능: `feat/{issue}-{description}`
- 버그: `fix/{issue}-{description}`
- 리팩토링: `refactor/{issue}-{description}`
- 문서: `docs/{issue}-{description}`
- 긴급 수정: `hotfix/{issue}-{description}`

## Worktree Rules

- 비교가 필요한 작업은 기본적으로 워킹트리 2안 비교를 고려한다.
- 하나의 수정안만 만들고 끝내는 것은 예외로 둔다.
- 비교를 생략하려면 변경이 매우 작거나, 두 안을 나눌 실익이 없다는 점을 먼저 적는다.
- 비교 시에는 변경량, 파일 수, 검증 결과, 분리 적합성을 함께 본다.
- 선택 이유는 작업 로그나 관련 문서에 남긴다.

## PR / MR Rules

- 하나의 PR/MR은 하나의 주제만 담는다.
- 문서와 코드가 함께 바뀌면 같은 PR/MR에 묶는다.
- 설명에는 무엇을, 왜, 어떻게 바꿨는지 적는다.
- 검증 결과를 함께 남긴다.
- 관련 없는 파일은 포함하지 않는다.
- 문서 수정 없이 계약만 바꾸지 않는다.

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
- PR/MR 설명이 부족해서 리뷰어가 맥락을 다시 찾아야 하는 상태
- 인코딩 문제로 문서/출력이 깨지는 상태
