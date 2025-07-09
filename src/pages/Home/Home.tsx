import React from "react";
import Header from "../../components/homeComponents/Header";
import FeaturedJobs from "../../components/homeComponents/FeaturedJob";
import JobCategories from "../../components/homeComponents/JobCategories";
import Features from "../../components/homeComponents/Features";
import Newsletter from "../../components/homeComponents/Newsletter";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedJobs />
      <JobCategories />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
