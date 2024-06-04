import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
// import { useState } from "react";


const HomePage = () => {

  // const [isHome, setIsHome] = useState(true);
  return (
    <div>
      <Hero />
      <HomeCard />
      <JobListings isHome={true}  />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
