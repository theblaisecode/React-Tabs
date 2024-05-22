import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import AllTabs from "./components/AllTabs";
import Button from "./components/Buttons";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isTabs, setIsTabs] = useState([]);
  const [toggleTabs, setToggleTabs] = useState(3);

  // Fetch data from the api
  async function getTabs() {
    try {
      const res = await fetch(url);
      // If there are issues with the url, show error on screen
      if (!res.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      setIsLoading(false);
      setIsTabs(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  // useEffect to run api request
  useEffect(() => {
    getTabs();
  }, []);

  // Toggle between tabs
  function changeTab(order) {
    setToggleTabs(order);
  }

  // Show loading spinner
  if (isLoading) {
    return <Loading />;
  }

  // Show error if page not found
  if (isError) {
    return <Error />;
  }

  return (
    <main>
      <div className="show">
        <Button isTabs={isTabs} changeTab={changeTab} toggleTabs={toggleTabs} />
        <AllTabs isTabs={isTabs} toggleTabs={toggleTabs} />
      </div>
    </main>
  );
}

export default App;
