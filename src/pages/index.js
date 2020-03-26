import React, {useState} from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bg from '../images/background.jpg';
import bg2 from '../images/bg-2.jpg';
import bookStack from '../images/book-icon.png';
import cd from '../images/cd-icon.png';
import cert from '../images/cert-icon.png';
import blueBook from '../images/bluebook-icon.png';
import openBook from '../images/openbook-icon.png';

import lars from '../images/lars.jpg';
import yohann from '../images/yohann.jpeg';
import rebecca from '../images/rebecca.jpg';
import sandro from '../images/sandro.png';


const Landing = ({height}) => {
      return <section style={{height}} className="flex-grow flex flex-col relative">
      <div className="mt-16 mx-auto z-10 text-white text-center flex-shrink">
        <h2 className="text-2xl font-bold inline-block p-3">505 Economics</h2>

        <p className="mx-auto text-lg 2 p-2">Approaches to economics and data science at the cutting edge of research.</p>
            </div>

        <img
          style={{filter: 'brightness(70%)'}}
          alt="background"
          className="absolute h-full w-full"
          src={bg}
        />

      </section>
}

Landing.propTypes = {height: PropTypes.number}

const About = ({height}) => {
      return <section style={{height}}className="flex-grow flex flex-col relative ">
      <div className="z-20 text-white p-2">
        <div className="text-center">
          <h2 className="text-2xl font-bold inline-block p-6">About</h2>
        </div>
        <p className="m-4 text-lg  md:mx-32">505 Economics is a boutique economic consultancy. It was set up by a group of doctoral researchers based at the London School of Economics and Political Science. The consultancy specialises in economic modelling, policy evaluation and data analysis.

We focus on supporting governments and organisations with the development of economic models using new non-traditional data sources.</p>
    </div>
      <img
        style={{filter: 'brightness(50%)'}}
        alt="background "
        className="absolute w-full h-full object-cover"
        src={bg2}
      />
    </section>
}

About.propTypes = {height: PropTypes.number}

const WhatWeDo = ({height}) => {
      return <section style={{height}}className="flex-grow flex flex-col relative">
      <div className="z-20 text-white">
        <div className="text-center">
          <h2
            className="text-2xl font-bold inline-block p-6">
            What We Do!
          </h2>
        </div>
        <div className="mx-3 flex flex-col items-center">
          <div className="flex mb-6 items-center ">
            <img src={bookStack} className="w-12 h-12 rounded-full mr-2"/>
            <div className="">Policy evaluation using modern micro-econometric tools</div>
          </div>
          <div className="flex mb-6 items-center">
            <img src={cd} className="h-12 rounded-full mr-2"/>
            <div>Policy simulations through computable general equilibrium (CGE) modelling</div>
          </div>
          <div className="flex mb-6 items-center">
            <img src={cert} className="w-12 h-12 rounded-full mr-2"/>
            <div>Macroeconomic forecasting model development
and improvement</div>
          </div>
          <div className="flex mb-6 items-center">
            <img src={blueBook} className="w-12 h-12 rounded-full mr-2"/>
            <div>Spatial analyses using geographic information systems (GIS) and satellite imagery</div>
          </div>
          <div className="flex items-center">
            <img src={openBook} className="w-12 h-12 rounded-full mr-2"/>
            <div>Machine learning and natural language processing for data analysis</div>
          </div>
        </div>
    </div>
      <img
        style={{filter: 'brightness(50%)'}}
        alt="background"
        className="absolute h-full w-full object-cover"
        src={bg2}
      />
    </section>
}


WhatWeDo.propTypes = {height: PropTypes.number}


const Team = () => {
      return <section style={{}}className="flex-grow flex flex-col relative">
      <div className="z-20 text-white">
        <div className="text-center">
          <h2
            className="text-2xl font-bold inline-block p-3">
            Who We Are
          </h2>
        </div>
        <div className="mx-3">
          <div className="mb-3 flex flex-col mb-8 items-center">
            <img src={lars} className="w-48 h-48 rounded-full mr-2"/>
            <p className="m-4">Lars is an economist whose research specialises in the economics of migration and labour markets. He has previously worked for the Centre for European Policy Studies and  the European Commission. He is a doctoral researcher at the London School of Economics</p>
          </div>
          <div className="mb-8 flex flex-col items-center">
            <img src={yohann} className="w-48 h-48 rounded-full object-cover"/>
            <p className="m-4">Yohan is a development economist who specialises in geographical information systems and spatial economics. He has previously worked as an economist for the Institute for State Effectiveness and in economic forecasting for the Australian Department of the Prime Minister and Cabinet. He is a doctoral researcher at the London School of Economics.</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={rebecca} className="w-48 h-48 rounded-full mr-2 object-cover"/>
            <p className="m-4">Rebecca is a macroeconomist who has previously worked for the Bank of England. She specialises in sovereign fiscal sustainability, public debt restructuring, and short and long-term macroeconomic forecasting. Prior to this she worked for Citigroup in London and the Central Bank of Poland. She is a doctoral researcher at the London School of Economics, where her research looks at constraints to economic development.</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={sandro} className="w-48 h-48 rounded-full mr-2 object-cover "/>
            <p className="m-4">
Sandro is a spatial economist, who specialises in the use of high-resolution satellite imagery as well as natural language processing and machine learning. He holds an MSc in Economics and Economic Policy from Stockholm School of Economics and Science Po, and is a doctoral researcher at the London School of Economics. His doctoral research is focused on the determinants of economic development in Africa.
</p>
          </div>
        </div>
    </div>
      <img
        style={{filter: 'brightness(50%)'}}
        alt="background"
        className="absolute h-full w-full object-cover"
        src={bg2}
      />
    </section>
}


Team.propTypes = {height: PropTypes.number}


function IndexPage() {

  const [height, setHeight] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(null);
  console.log('headerHeight', headerHeight);

  console.log('height', height);
  return (
    <Layout onHeightUpdate={setHeight} onHeaderUpdate={setHeaderHeight}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

    {height && <Landing height={height} />}
    {height && <About height={height} />}
    {height && <WhatWeDo height={height} />}
    {height && <Team height={height} />}


    </Layout>
  );
}

export default IndexPage;
