import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Learning', link: '/00-introduction/010-about' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/00-introduction/010-about' },
          {
            text: 'What is Vue.js?',
            link: '/00-introduction/020-what-is-vue',
          },
          {
            text: 'Key Elements of Vue.js',
            link: '/00-introduction/030-vue-core-components',
          },
          {
            text: 'Approach in This Book and Setting Up the Environment',
            link: '/00-introduction/040-setup-project',
          },
        ],
      },
      {
        text: 'Minimum Example',
        collapsed: false,
        items: [
          {
            text: 'First Rendering and the createApp API',
            link: '/10-minimum-example/010-create-app-api',
          },
          {
            text: "Let's Enable Rendering HTML Elements",
            link: '/10-minimum-example/020-simple-h-function',
          },
          {
            text: 'A Lightweight Reactivity System',
            link: '/10-minimum-example/030-minimum-reactive',
          },
          {
            text: 'A Minimal Virtual DOM',
            link: '/10-minimum-example/040-minimum-virtual-dom',
          },
          {
            text: 'Aspiring for Component-Oriented Development',
            link: '/10-minimum-example/050-minimum-component',
          },
          {
            text: 'A Simple Template Compiler',
            link: '/10-minimum-example/060-minimum-template-compiler',
          },
          {
            text: 'Desire to Write More Complex HTML',
            link: '/10-minimum-example/070-more-complex-parser',
          },
          {
            text: 'Data Binding',
            link: '/10-minimum-example/080-template-binding',
          },
          {
            text: 'Desire to Develop with Single File Components',
            link: '/10-minimum-example/090-minimum-sfc',
          },
          {
            text: 'Taking a Short Break',
            link: '/10-minimum-example/100-break',
          },
        ],
      },
      {
        text: 'Basic Virtual DOM',
        collapsed: false,
        items: [
          {
            text: 'key Attribute and Patch Rendering',
            link: '/20-basic-virtual-dom/010-patch-keyed-children',
          },
          {
            text: 'Bit-Level Representation of VNodes',
            link: '/20-basic-virtual-dom/020-bit-flags',
          },
          {
            text: 'Scheduler',
            link: '/20-basic-virtual-dom/030-scheduler',
          },
          {
            text: '🚧 Patch for Unhandled Props',
            link: '/20-basic-virtual-dom/040-patch-other-attrs',
          },
        ],
      },
      {
        text: 'Basic Reactivity System',
        collapsed: false,
        items: [
          {
            text: 'ref API',
            link: '/30-basic-reactivity-system/010-ref-api',
          },
          {
            text: 'computed / watch API',
            link: '/30-basic-reactivity-system/020-computed-watch',
          },
          {
            text: 'Various Reactive Proxy Handlers',
            link: '/30-basic-reactivity-system/030-reactive-proxy-handlers',
          },
          {
            text: 'Effect Cleanup and Effect Scope',
            link: '/30-basic-reactivity-system/040-effect-scope',
          },
          {
            text: 'Other Reactivity APIs',
            link: '/30-basic-reactivity-system/050-other-apis',
          },
        ],
      },
      {
        text: 'Basic Component System',
        collapsed: false,
        items: [
          {
            text: 'Lifecycle Hooks',
            link: '/40-basic-component-system/010-lifecycle-hooks',
          },
          {
            text: 'Provide/Inject',
            link: '/40-basic-component-system/020-provide-inject',
          },
          {
            text: 'Component Proxies and setupContext',
            link: '/40-basic-component-system/030-component-proxy-setup-context',
          },
          {
            text: 'Slots',
            link: '/40-basic-component-system/040-component-slot',
          },
          {
            text: 'Supporting Options API',
            link: '/40-basic-component-system/050-options-api',
          },
        ],
      },
      {
        text: 'Basic Template Compiler',
        collapsed: false,
        items: [
          {
            text: 'Refactoring Implementation of Transformer for Codegen',
            link: '/50-basic-template-compiler/010-transform',
          },
          {
            text: 'Implementing Directives (v-bind)',
            link: '/50-basic-template-compiler/020-v-bind',
          },
          {
            text: 'Eval expression in template',
            link: '/50-basic-template-compiler/022-transform-expression',
          },
          {
            text: 'Supporting v-on',
            link: '/50-basic-template-compiler/025-v-on',
          },
          {
            text: 'compiler-dom and Event Modifiers',
            link: '/50-basic-template-compiler/027-event-modifier',
          },
          {
            text: 'Support for Fragment',
            link: '/50-basic-template-compiler/030-fragment',
          },
          {
            text: 'Support for Comment Node',
            link: '/50-basic-template-compiler/035-comment',
          },
          {
            text: 'v-if and Structural Directives',
            link: '/50-basic-template-compiler/040-v-if-and-structural-directive',
          },
          {
            text: 'Support for v-for',
            link: '/50-basic-template-compiler/050-v-for',
          },
          {
            text: 'Resolving Components',
            link: '/50-basic-template-compiler/070-resolve-component',
          },
          {
            text: '🚧 Support for Slot',
            link: '/50-basic-template-compiler/080-slot',
          },
          {
            text: '🚧 Other Directives',
            link: '/50-basic-template-compiler/090-other-directives',
          },
          {
            text: '🚧 Chore Compiler',
            link: '/50-basic-template-compiler/100-chore-compiler',
          },
          {
            text: '🚧 Custom Directives',
            link: '/50-basic-template-compiler/500-custom-directive',
          },
        ],
      },
      {
        text: '🚧 Basic SFC Compiler',
        collapsed: true,
        items: [
          {
            text: 'Supporting script setup',
            link: '/60-basic-sfc-compiler/010-script-setup',
          },
          {
            text: 'Supporting defineProps',
            link: '/60-basic-sfc-compiler/020-define-props',
          },
          {
            text: 'Supporting defineEmits',
            link: '/60-basic-sfc-compiler/030-define-emits',
          },
          {
            text: 'Supporting Scoped CSS',
            link: '/60-basic-sfc-compiler/040-scoped-css',
          },
        ],
      },
      {
        text: '🚧 Web Application Essentials',
        collapsed: true,
        items: [
          {
            text: '🚧 Plugin',
            collapsed: false,
            items: [
              {
                text: 'Router',
                link: 'en//90-web-application-essentials/010-plugins/010-router',
              },
              {
                text: 'Preprocessors',
                link: 'en//90-web-application-essentials/010-plugins/020-preprocessors',
              },
            ],
          },

          {
            text: '🚧 Server Side Rendering',
            collapsed: false,
            items: [
              {
                text: 'createSSRApp',
                link: 'en//90-web-application-essentials/020-ssr/010-create-ssr-app',
              },
              {
                text: 'hydration',
                link: 'en//90-web-application-essentials/020-ssr/020-hydration',
              },
            ],
          },
          {
            text: '🚧 Builtins',
            collapsed: false,
            items: [
              {
                text: 'KeepAlive',
                link: 'en//90-web-application-essentials/030-builtins/010-keep-alive',
              },
              {
                text: 'Suspense',
                link: 'en//90-web-application-essentials/030-builtins/020-suspense',
              },
              {
                text: 'Transition',
                link: 'en//90-web-application-essentials/030-builtins/030-transition',
              },
            ],
          },
          {
            text: '🚧 Optimizations',
            collapsed: false,
            items: [
              {
                text: 'Static Hoisting',
                link: 'en//90-web-application-essentials/040-optimizations/010-static-hoisting',
              },
              {
                text: 'Patch Flags',
                link: 'en//90-web-application-essentials/040-optimizations/020-patch-flags',
              },
              {
                text: 'Tree Flattening',
                link: 'en//90-web-application-essentials/040-optimizations/030-tree-flattening',
              },
            ],
          },
        ],
      },
      {
        text: 'Appendix',
        collapsed: false,
        items: [
          {
            text: 'Writing Vue.js in 15 minutes.',
            collapsed: true,
            items: [
              {
                text: "chibivue, isn't it small...?",
                link: '/bonus/hyper-ultimate-super-extreme-minimal-vue/',
              },
              {
                text: 'Implement',
                link: '/bonus/hyper-ultimate-super-extreme-minimal-vue/15-min-impl.md',
              },
            ],
          },
          {
            text: 'debug original Vue.js source',
            link: '/bonus/debug-vuejs-core',
          },
        ],
      },
    ],
  },
}
