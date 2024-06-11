import SearchBar from "../../../components/SearchBar/SearchBar";
import ClientNavigationBar from "../../../components/Navigation/ClientNavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllServices } from "../../../feature/getAllServicesSlice";

import ClientServiceCard from "../../../components/ServiceCard/ClientServiceCard";

export default function ClientDashBoard() {
  // const authToken = useSelector((state) => state.auth.authToken);
  const authToken = sessionStorage.getItem("authToken");
  // const userId = sessionStorage.getItem("userId");
  const services = useSelector((state) => state.getAllServices.items);
  const status = useSelector((state) => state.getAllServices.status);
  const searchResults = useSelector((state) => state.search.results);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authToken) {
      dispatch(fetchAllServices({ authToken: authToken }));
    }
  }, [dispatch, authToken]);

  return (
    <>
      <ClientNavigationBar />
      <SearchBar />

      <div className="service-list">
        {status === "loading" && <p>Loading services...</p>}
        {status === "succeeded" && services.length === 0 && (
          <div className="image-container">
            <img
              src="/empty.png"
              alt="No Bookings"
              className="centered-image"
            />
          </div>
        )}
        {status === "succeeded" &&
          (searchResults.length > 0
            ? searchResults.map((service) => (
                <ClientServiceCard key={service.id} service={service} />
              ))
            : services.map((service) => (
                <ClientServiceCard key={service.id} service={service} />
              )))}
        {status === "failed" && <p>Failed to load services.</p>}
      </div>
    </>
  );
}
