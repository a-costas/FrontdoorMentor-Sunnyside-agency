import { FC, useEffect, useState } from "react";

// interface MountTransitionProps {
//   isMounted: Boolean;
//   unmountDelay: Number;
// }

const useMountTransition = (isMounted: Boolean, unmountDelay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;
