## CheckBiz

사업자등록번호 유효성을 빠르게 확인할 수 있는 웹/앱 프로젝트입니다.  
React Native와 Next.js 기반으로 작성되었으며 하나의 코드베이스로 Web과 Mobile 환경 모두를 지원합니다.

현재 작업중인 프로젝트 입니다.

---

## 기술 스택

| 분류               | 스택                                      |
| ------------------ | ----------------------------------------- |
| Web                | Next.js 14, React 19, react-native-web    |
| Mobile (추후 확장) | React Native (CLI 기반) |
| 공통 UI            | react-native + styled-components          |
| 상태 관리          | React Query                               |
| 형식 관리          | TypeScript, Prettier, ESLint              |
| 모노레포 관리      | Turborepo + Yarn workspaces               |

---

## 프로젝트 구조

```
CheckBiz/
|-----apps/
|      |----- web/ # 웹 전용 (Next.js)
|----- packages/
|        |----- ui/ # 공통 UI 컴포넌트 (react-native)
|-----tsconfig.json
|-----package.json
|-----README.md
```

## 실행 방법

1. 패키지 설치

```
yarn install
```

2. 개발 서버 실행

```
yarn dev
```

→ http://localhost:3000 접속

## 주요 기능

- 사업자번호 유효성 확인 (Mock API)
- React Query를 통한 비동기 상태 관리
- React Native 기반 컴포넌트로 Web/Mobile 통합 대응
- 개발 효율을 위한 Monorepo 구조

## Git Convention

타입 설명
| 타입(Type) | 설명 |
|--------------|--------------------------------------|
| `Feat` | 새로운 기능 추가 |
| `Add` | 에셋/리소스 파일 추가 (이미지 등) |
| `Fix` | 버그 수정 |
| `Docs` | 문서 작성 및 수정 (README 등) |
| `Style` | 코드 스타일링 (포맷, 세미콜론 등) |
| `Refactor` | 코드 리팩토링 (기능 변경 없이 구조 수정)|
| `Test` | 테스트 코드 추가 및 수정 |
| `Deploy` | 배포 관련 작업 |
| `Conf` | 빌드/환경설정/패키지 관리 변경 |
| `Chore` | 기타 작업 |
| `Init` | 초기 설정 |
---

## 향후 계획

- 공공 API 와의 연동
- apps/mobile 추가 설정
- CI/CD
- Vercel/Play Store/App Store 배포
