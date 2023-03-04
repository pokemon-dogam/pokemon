<script setup lang="ts">
// HelloWorld 자동 import
const VERSION = import.meta.env.VITE_APP_VERSION
</script>

<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>Vue3-Vite-Skeleton v{{ VERSION }}</h1>
      </header>
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
          <HelloWorld msg="테스트 컴포넌트"/>

          <h2>스켈레톤 규격</h2>

          <p>
            기존 스켈레톤의 올드함을 버리고 좋은건 다 때려밖았습니다.
              
          </p>

          <ul>
            <li>Vite</li>
            <li>yarn berry</li>
            <li>Pinia</li>
            <li>Vue-router</li>
            <li>TailwindCSS</li>
            <li>PlayWright - E2E</li>
            <li>Vitest - Unit Test</li>
            <li>Vue3 친화적 Eslint 및 Prettier</li>
            <li><code>project_root/src</code>를 <code>@</code>로 Alias화  </li>
            <li>unplugin-auto-import를 통한 import 최소화</li>
            <li>푸시할 때마다 e2e 및 단위 테스트를 자동 실행 Github Workflow 내장</li>
          </ul>

          <h2>프로젝트 설정 및 사용</h2>

          <p>
            WebStorm 기준이기에 VSCode는 사용자분이 직접 알아보시길
          </p>

          <h4>Install dependencies</h4>

          <pre>yarn i</pre>

          <h4>Run development server</h4>

          <pre>yarn dev</pre>

          <h4>Run unit tests (Vitest)</h4>

          <pre>yarn test</pre>

          <h4>Run component tests (Playwright)</h4>

          <pre>yarn test-ct</pre>

          <h4>Run e2e tests (Playwright)</h4>

          <pre>yarn test-e2e</pre>

          <h4>Build for production</h4>

          <pre>yarn build</pre>

          <h4>그외</h4>

          <p><code>package.json</code> 보시길</p>

          <h2>잡다구리</h2>

          <h3>Husky</h3>

          <p>
            추가예정
          </p>
        </div>
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>
          vue3-vite-skeleton
        </p>
      </footer>
    </div>
  </div>
</template>
