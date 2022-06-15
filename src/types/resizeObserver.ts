import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

export const useResizeObserver = () => {
  // create a new ref,
  // which needs to be attached to an element in a template
  const resizeRef = ref<Element>();
  const resizeState = reactive<{
    dimensions: {
      width: number;
      height: number;
    };
  }>({
    dimensions: { width: 0, height: 0 },
  });

  const observer = new ResizeObserver((entries) => {
    // called initially and on resize
    entries.forEach((entry) => {
      resizeState.dimensions = entry.contentRect;
    });
  });

  onMounted(() => {
    // set initial dimensions right before observing: Element.getBoundingClientRect()
    if (resizeRef.value) {
      resizeState.dimensions = resizeRef.value.getBoundingClientRect();
      observer.observe(resizeRef.value);
    }
  });

  onBeforeUnmount(() => {
    if (resizeRef.value) {
      observer.unobserve(resizeRef.value);
    }
  });

  // return to make them available to whoever consumes this hook
  return { resizeState, resizeRef };
};

export default useResizeObserver;
