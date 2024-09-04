import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function index() {
  const { location } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}

export default index;
