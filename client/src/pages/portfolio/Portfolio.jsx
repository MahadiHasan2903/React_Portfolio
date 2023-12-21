import React, { useState, useEffect } from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./Portfolio.css";
import Loader from "../../components/Loader/Loader";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="portfolio section">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="section_title">
            My <span>Projects</span>
          </h2>

          <div className="portfolio_container container grid">
            {portfolio.map((item) => {
              return <PortfolioItem key={item.id} {...item} />;
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Portfolio;
