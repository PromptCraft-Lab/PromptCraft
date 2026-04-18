# Architecture Overview

## Purpose

PromptCraft의 전체 구조와 경계를 한눈에 보는 요약 문서다.
세부 판단이 필요할 때만 다른 아키텍처 문서를 추가로 읽는다.

## System Scope

- `frontend/`: 사용자 입력과 결과 표현
- `backend/`: intent, retrieval, assembly, evaluation, history, admin
- `contracts/`: 요청/응답과 공통 스키마
- `infra/`: 배포와 환경 설정

## Principles

- UI는 표현과 상호작용에 집중한다.
- 비즈니스 규칙은 백엔드가 책임진다.
- 공통 계약은 문서와 코드에서 함께 유지한다.
- 운영 데이터와 사용자 데이터를 분리한다.

## When To Read Other Docs

- 화면 구조가 궁금하면 `frontend.md`
- 서비스 경계가 궁금하면 `backend.md`
- 요청 흐름이 궁금하면 `data-flow.md`
