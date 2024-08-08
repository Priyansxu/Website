export const FadeInStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const BlurFadeIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
    },
  },
};

export const PopIn = {
  hidden: { opacity: 0, y: -20, scale: 1.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const BlurIn = {
  hidden: { filter: "blur(10px)" },
  visible: {
    filter: "blur(0px)",
    transition: {
      duration: 2,
    },
  },
};

export const SlideIn = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};