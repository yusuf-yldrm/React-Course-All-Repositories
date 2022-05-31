import Navbar from "./components/Layout/Navbar/Navbar";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Navbar itemQuantity={12} />
      <Meals />
    </>
  );
}

export default App;
