export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[13,10,0,12,3,4,1,5,14,15,6,2,7,8,9,11]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[13,14,15,10]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[13,0,12,3,4,1,5,14,15,6,2,7,8,9,11,10]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

