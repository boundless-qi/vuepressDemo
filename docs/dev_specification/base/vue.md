# vue2.0 and vue3.0

# v-if 与 v-for 的优先级对比

非兼容 #概览
非兼容：两者作用于同一个元素上时，v-if 会拥有比 v-for 更高的优先级。 #介绍
Vue.js 中使用最多的两个指令就是 v-if 和 v-for，因此开发者们可能会想要同时使用它们。虽然不建议这样做，但有时确实是必须的，于是我们想提供有关其工作方式的指南。

#2.x 语法
2.x 版本中在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。

#3.x 语法
3.x 版本中 v-if 总是优先于 v-for 生效。