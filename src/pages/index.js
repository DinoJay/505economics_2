import React, {useState} from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bg from '../images/background.jpg';
import bg2 from '../images/bg-2.jpg';


const Landing = ({height}) => {
      return <section style={{height}} className="flex-grow flex flex-col relative">
      <div className="mt-16 mx-auto z-10 text-white text-center flex-shrink">
        <h2 className="text-2xl font-bold inline-block p-3">505 Economics</h2>

        <p className="mx-auto text-lg 2 p-2">Approaches to economics and data science at the cutting edge of research.</p>
            </div>

        <img
          style={{filter: 'brightness(70%)'}}
          alt="background"
          className="absolute h-full"
          src={bg}
        />

      </section>
}

Landing.propTypes = {height: PropTypes.number}

const About = ({height}) => {
      return <section style={{height}}className="flex-grow flex flex-col relative">
      <div className="z-20 text-white">

        <h2 className="text-2xl font-bold inline-block p-3">505 Economics</h2>

        <p className="mx-auto text-lg 2 p-2">505 Economics is a boutique economic consultancy. It was set up by a group of doctoral researchers based at the London School of Economics and Political Science. The consultancy specialises in economic modelling, policy evaluation and data analysis.

We focus on supporting governments and organisations with the development of economic models using new non-traditional data sources.</p>
    </div>

        <img
          style={{filter: 'brightness(50%)'}}
          alt="background"
          className="absolute h-full"
          src={bg2}
        />

      </section>
}


About.propTypes = {height: PropTypes.number}


function IndexPage() {

  const [height, setHeight] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(null);

  console.log('height', height);
  return (
    <Layout onHeightUpdate={setHeight} onHeaderUpdate={setHeaderHeight}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

    { height && <Landing height={height -headerHeight} /> }
    { height && <About height={height} /> }


    </Layout>
  );
}

export default IndexPage;
