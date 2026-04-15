# Terminal Conventions

## Rules

- 터미널에서 필요한 명령만 실행한다.
- 한글이 깨지면 UTF-8 설정을 먼저 적용한다.
- 긴 명령은 짧게 나눠서 실행한다.
- 수정은 가능한 한 `apply_patch`를 우선한다.

## UTF-8 Setup

```powershell
chcp 65001 > $null
[Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [Console]::OutputEncoding
```

