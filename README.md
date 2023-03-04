Vue3-Vite-Skeleton
=================================

스켈레톤 규격
-------

기존 스켈레톤의 올드함을 버리고 좋은건 다 때려밖았습니다.

* Vite
* yarn berry
* Pinia
* Vue-router
* TailwindCSS
* PlayWright - E2E
* Vitest - Unit Test
* Vue3 친화적 Eslint 및 Prettier
* `project_root/src`를 `@`로 Alias화
* unplugin-auto-import를 통한 import 최소화
* 푸시할 때마다 e2e 및 단위 테스트를 자동 실행 Github Workflow 내장

프로젝트 설정 및 사용
------------

WebStorm 기준이기에 VSCode는 사용자분이 직접 알아보시길

#### Install dependencies

yarn

#### Run development server

yarn dev

#### Run unit tests (Vitest)

yarn test

#### Run component tests (Playwright)

yarn test-ct

#### Run e2e tests (Playwright)

yarn test-e2e

#### Build for production

yarn build

#### 그외

`package.json` 보시길

잡다구리
----

### Yarn Berry
zero-install 및 .yarn/cache 등.. 설명이 너무 길어 일단 배제

### Husky

추가예정

vue3-vite-skeleton
