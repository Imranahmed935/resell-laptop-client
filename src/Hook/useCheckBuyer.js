import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useCheckBuyer = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer, setIsBuyer] = useState(true);
  const [buyerLoading, setBuyerLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://laptop-planet-server.vercel.app//dashboard/buyer/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsBuyer(data.isBuyer);
        setBuyerLoading(false);
      });
  }, [user?.email, buyerLoading]);
  return [isBuyer, buyerLoading];
};

export default useCheckBuyer;
