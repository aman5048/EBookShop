import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="dark:bg-darkbg  ">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
