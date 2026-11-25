import { useEffect } from "react";

// Shared counter so multiple overlays (mobile menu, modals) don't
// override each other's body overflow setting.
let lockCount = 0;

export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    lockCount += 1;
    document.body.style.overflow = "hidden";

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [active]);
}
