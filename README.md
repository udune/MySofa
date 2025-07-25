# MySofa 🛋️

**React + Unity WebGL을 활용한 실시간 소파 커스터마이징 및 시뮬레이션 플랫폼**

사용자가 원하는 스타일의 소파를 실시간으로 커스터마이징하고, Unity WebGL 환경에서 3D 시뮬레이션을 통해 다양한 공간에서의 배치를 미리 체험할 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **🎨 실시간 커스터마이징**: 소파의 색상, 재질, 크기, 모델 타입을 실시간으로 변경
- **🔐 사용자 관리**: JWT 기반 회원가입/로그인, 개인 커스터마이징 목록 관리
- **👨‍💼 관리자 기능**: 제품 등록, 수정, 삭제 및 전체 제품 관리
- **🌐 Unity WebGL 통합**: React 웹에서 Unity 3D 시뮬레이션으로 seamless 연동
- **📱 반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 환경 지원

## 🛠️ 기술 스택

### Frontend
- **React 19** + **TypeScript** - 현대적인 UI 개발
- **React Router 7** - SPA 라우팅
- **CSS Modules** - 컴포넌트 스타일링
- **Vite** - 빠른 개발 환경

### Backend Integration
- **Axios** - REST API 통신
- **JWT Authentication** - 보안 인증 시스템

### 3D Simulation
- **Unity WebGL** - 실시간 3D 렌더링 및 상호작용

### Development
- **ESLint** + **TypeScript** - 코드 품질 관리
- **Git** - 버전 관리

## 🏗️ 아키텍처

```
Web Frontend (React) ←→ Backend API ←→ Database
        ↓
Unity WebGL Session
```

- React에서 커스터마이징 옵션 선택
- Backend API를 통한 커스텀 세션 생성
- Unity WebGL에서 실시간 3D 시뮬레이션 실행

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

배포된 `https://my-sofa.org` 에서 확인 할 수 있습니다.

1. 테스트 계정
[ 관리자 ]
ID : admin@test.com
PW : abcd1234!
[ 유저 ]
ID : user@test.com
PW : abcd1234!

2. 회원가입 후 로그인

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Body/           # 메인 페이지 컴포넌트
│   └── UI/             # 재사용 가능한 UI 컴포넌트
├── contexts/           # React Context (상태 관리)
├── services/           # API 통신 레이어
├── styles/            # CSS 스타일
├── types/             # TypeScript 타입 정의
└── utils/             # 유틸리티 함수
```

## 🎯 주요 컴포넌트

- **Products**: 제품 목록 및 검색
- **Customization**: 실시간 커스터마이징 인터페이스
- **Simulation**: Unity WebGL 시뮬레이션 연동
- **My**: 개인 커스터마이징 목록 관리
- **Admin**: 관리자 제품 관리

## 🔗 Unity WebGL 연동

React 웹에서 선택한 커스터마이징 옵션이 Unity WebGL 환경으로 전달되어 실시간 3D 시뮬레이션이 구현됩니다. 세션 기반으로 데이터를 주고받아 seamless한 사용자 경험을 제공합니다.

---

> **Note**: 이 프로젝트는 React와 Unity WebGL의 통합을 통한 실시간 3D 커스터마이징 플랫폼의 가능성을 보여주는 프로토타입입니다.
