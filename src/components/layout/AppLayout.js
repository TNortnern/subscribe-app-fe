import Navigation from "./Navigation";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
