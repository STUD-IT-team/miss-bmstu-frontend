<template>
  <slot></slot>
</template>

<script>
export default {
  emits: ['update:modelValue', 'show', 'hide'],

  props: {
    onRef: {
      type: String,
      required: true,
    },
    modelValue: Boolean,
    bottomOffset: {
      type: Number,
      default: 0,
    },
    topOffset: {
      type: Number,
      default: 0,
    },
    noHide: Boolean,
  },

  data() {
    return {
      modelValueCopy: this.$props.modelValue,
    };
  },

  methods: {
    handleScroll() {
      const slot = this.$slots.default?.[0];
      if (!slot) return;
      
      let el;
      if (slot.ref) {
        el = this.$refs[slot.ref] || this.$parent?.$refs[slot.ref];
        if (el && el.$el) el = el.$el;
      } else if (slot.elm) {
        el = slot.elm;
      }
      
      if (!el || typeof el.getBoundingClientRect !== 'function') return;
      
      const {top, bottom} = el.getBoundingClientRect();
      const screenHeight = document.documentElement.clientHeight;
      const isVisible = (this.topOffset < bottom) && ((top + this.bottomOffset) < screenHeight);
      if (this.modelValueCopy !== isVisible && !(this.modelValueCopy === true && this.noHide)) {
        this.$emit('update:modelValue', isVisible);
        this.$emit(isVisible ? 'show' : 'hide');
        this.modelValueCopy = isVisible;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
