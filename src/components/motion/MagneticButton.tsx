"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<typeof motion.a> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({
  className,
  children,
  variant = "primary",
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : variant === "secondary"
        ? "glass text-white hover:bg-white/10"
        : "text-white/80 hover:text-white";

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-colors",
        styles,
        className,
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
