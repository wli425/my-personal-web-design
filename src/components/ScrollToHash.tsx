import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ensures hash links like #talks scroll correctly on initial load and when hash changes
export const ScrollToHash = () => {
  const location = useLocation();

  // On initial path load (and when path changes), try scrolling to the hash
  useEffect(() => {
    const tryScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = decodeURIComponent(hash.replace("#", ""));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Try immediately and after short delays to account for layout/image load
    tryScroll();
    const t1 = setTimeout(tryScroll, 100);
    const t2 = setTimeout(tryScroll, 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  // When only the hash changes (e.g., clicking in-page anchors), scroll accordingly
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = decodeURIComponent(hash.replace("#", ""));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
};
