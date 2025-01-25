export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[7,0,2,3,4,5,6,1]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[7]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[7,0,2,3,4,5,6,1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

