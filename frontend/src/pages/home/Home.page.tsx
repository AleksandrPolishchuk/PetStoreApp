import "./home.scss";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <h1>Wetlome to Store</h1>
      <Button variant="outlined" color="primary">
        Product List
      </Button>
    </div>
  );
};

export default Home;
