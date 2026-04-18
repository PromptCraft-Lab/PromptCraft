# Terminal Rules

PromptCraft에서 PowerShell과 LLM CLI를 다룰 때의 실행 체크리스트다.
세부 기준은 `docs/conventions/08-terminal.md`를 우선한다.

## Rules

- 터미널에서 필요한 명령만 실행한다.
- 한글이 깨지면 UTF-8 설정을 먼저 적용한다.
- 긴 명령은 짧게 나눠서 실행한다.
- 로그와 출력은 작업 검증에 필요한 만큼만 본다.
- 작업 지시는 `목표 / 대상 / 완료 기준 / 참조 문서`로 먼저 고정한다.
- 컨벤션은 파일 경로로만 건넨다.

## UTF-8 Setup

```powershell
chcp 65001 > $null
[Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [Console]::OutputEncoding
```

## Preferred Usage

- 문서 확인과 파일 점검은 읽기 명령으로 먼저 한다.
- 수정은 `apply_patch`를 우선한다.
- 빌드와 테스트는 필요한 경우에만 실행한다.
- 출력만 보고 완료했다고 판단하지 않는다.

## Failure Modes

- 무의미한 반복 실행
- 인코딩 설정 없이 한글 문서를 다루는 것
- 터미널 출력만 보고 완료했다고 판단하는 것
