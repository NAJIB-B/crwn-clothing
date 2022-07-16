import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
