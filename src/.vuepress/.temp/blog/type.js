export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[3,0,2,4,5,6,7,1]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[3]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[3,0,2,4,5,6,7,1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

