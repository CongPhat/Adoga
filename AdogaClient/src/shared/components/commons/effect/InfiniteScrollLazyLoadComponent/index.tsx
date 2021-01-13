import React, { Suspense, useEffect, useRef, useState } from "react";
interface IProps {
  children: any;
  yCoor?: number;
  delay: number; // delay
  loading?: any;
}

const InfiniteScrollLazyLoad = ({
  children,
  yCoor,
  delay,
  loading,
}: IProps) => {
  const [active, setActive] = useState<boolean>(false);
  const refScrollLazy = useRef(null);

  const checkScrollHeight = () => {
    const offsetTop = yCoor || refScrollLazy.current.offsetTop;
    if (window.pageYOffset + window.innerHeight >= offsetTop - 300) {
      setActive(true);
      window.removeEventListener("scroll", checkScrollHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollHeight);
    setTimeout(() => {
      checkScrollHeight();
    }, delay);
  }, []);
  return (
    <div ref={refScrollLazy}>
      {active && (
        <Suspense fallback={loading || <></>}>{{ ...children }}</Suspense>
      )}
    </div>
  );
};
export default React.memo(InfiniteScrollLazyLoad);
