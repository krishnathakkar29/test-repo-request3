import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Scores from "./pages/Scores";
import axios from "axios";
import AllScoresContext from "./context/AllScoresContext";
function App() {
  const [allScores, setAllScores] = useState({});

  const fetchScores = async () => {
    const response = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=FW1SkB1HkewNM1pXURYzasFIxjiACoj9a6Yx9PdeXctCgZVJ17rWw6QxYLu14Z4-VkmVTj8Txfb_ZeTWRZIOcnMQjdrWMD1Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAEFBR0HgEroBG3EwVVV0G-T09q4vtT5ZDb-povGb_9boDqKLBf9tN0Qj2wZVEEK_Quu197fAvp00mUhz3GCOShdg7H02OWP8g&lib=MfBbnKIdD6ukmKAdyS-OY4A16_JWBohlm"
    );

    const data = response.data;
    console.log("data", data);

    setAllScores(data);
  };

  useEffect(() => {
    // fetchScores();
    // Set up the interval
    const intervalId = setInterval(fetchScores, 5000); // 5000 ms = 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <AllScoresContext.Provider value={{ allScores, setAllScores }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="team/:team"
              element={
                <>
                  <Layout>
                    <Scores />
                  </Layout>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </AllScoresContext.Provider>
    </>
  );
}

export default App;
