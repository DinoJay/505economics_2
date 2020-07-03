import React  from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bg from '../images/background.jpg';
import bg2 from '../images/bg-2.jpg';
import codeBg from '../images/code.jpg';
import bookStack from '../images/book-icon.png';
import cd from '../images/cd-icon.png';
import cert from '../images/cert-icon.png';
import logoWhite from '../images/505-logo-white.svg';
import blueBook from '../images/bluebook-icon.png';
import openBook from '../images/openbook-icon.png';

import lars from '../images/lars.jpg';
import yohann from '../images/yohann.jpeg';
import rebecca from '../images/rebecca.jpg';
import sandro from '../images/sandro.png';
import sam from '../images/samwatts.png';
import mikkel from '../images/mikkel.jpg';
import jan from '../images/janstuckatz.jpg';


const Landing = () => {
      return <section className="flex-grow flex flex-col relative min-h-screen">
      <div className="mt-16 mx-auto z-10 text-white text-center flex-shrink">
        <div className="flex p-3 items-center justify-start">
          <img src={logoWhite} className="w-24 h-24 mr-2"/>
          <div className="flex flex-col items-start">
            <h2 className="leading-none text-2xl md:text-6xl font-bold  ">505 Economics</h2>
            <div className="text-left mx-auto text-lg md:text-2xl 2 ">Approaches to economics and data science at the cutting edge of research.</div>
            </div>
        </div>

            </div>

        <img
          style={{filter: 'brightness(70%) blur(1px)'}}
          alt="background"
          className="absolute h-full w-full"
          src={bg}
        />

      </section>
}

Landing.propTypes = {height: PropTypes.number}

const About = () => {
      return <section className="flex-grow flex flex-col relative min-h-screen">
      <div className="z-20 mx-3 text-white p-2">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold inline-block p-6">About</h2>
        </div>
        <p className="text-lg  mx-auto max-w-text">505 Economics is a boutique economic consultancy. It was set up by a group of doctoral researchers based at the London School of Economics and Political Science. The consultancy specialises in economic modelling, policy evaluation and data analysis.

We focus on supporting governments and organisations with the development of economic models using new non-traditional data sources.</p>
    </div>
      <img
        style={{filter: 'brightness(50%) blur(1px)'}}
        alt="background "
        className="absolute w-full h-full object-cover"
        src={bg2}
      />
    </section>
}

About.propTypes = {height: PropTypes.number}

const WhatWeDo = () => {
      return <section className="flex-grow flex flex-col relative min-h-screen">
      <div className="z-20 text-white">
        <div className="text-center">
          <h2
            className="text-2xl md:text-4xl font-bold inline-block p-6">
            What We Do!
          </h2>
        </div>
        <div className="mx-3 flex flex-col items-center">
          <div className="flex mb-6 items-center ">
            <img src={bookStack} className="w-12 h-12 rounded-full mr-3"/>
            <div className="max-w-text md:text-width">Policy evaluation using modern micro-econometric tools</div>
          </div>
          <div className="flex mb-6 items-center">
            <img src={cd} className="h-12 rounded-full mr-3"/>
            <div className="max-w-text">Policy simulations through computable general equilibrium (CGE) modelling</div>
          </div>
          <div className="flex mb-6 items-center">
            <img src={cert} className="w-12 h-12 rounded-full mr-3"/>
            <div className="max-w-text">Macroeconomic forecasting model development
and improvement</div>
          </div>
          <div className="flex mb-6 items-center">
            <img src={blueBook} className="w-12 h-12 rounded-full mr-3"/>
            <div className="max-w-text">Spatial analyses using geographic information systems (GIS) and satellite imagery</div>
          </div>
          <div className="flex items-center">
            <img src={openBook} className="w-12 h-12 rounded-full mr-3"/>
            <div className="max-w-text">Machine learning and natural language processing for data analysis</div>
          </div>
        </div>
    </div>
      <img
        style={{filter: 'brightness(50%) blur(1px)'}}
        alt="background"
        className="absolute h-full w-full object-cover"
        src={bg2}
      />
    </section>
}


WhatWeDo.propTypes = {height: PropTypes.number}


const Team = () => {
      return <section className="flex-grow flex flex-col relative items-center min-h-screen">
      <div className="z-20 text-white">
        <div className="text-center">
          <h2
            className="text-2xl md:text-4xl font-bold inline-block p-6">
            Who We Are
          </h2>
        </div>
        <div className="mx-3 flex flex-wrap justify-center max-w-screen-lg">
          <div className="mb-3 flex flex-col mb-8 items-center">
            <img src={lars} className="w-48 h-48 rounded-full mr-2 mb-3"/>
            <h4 className="text-xl">Lars Ludolph</h4>
            <h3 className="font-bold text-2xl">Executive Director</h3>
            <p className="m-4 max-w-text">Lars is an economist whose research specialises in European labour markets, public economics and the political economy of Europe. He has previously worked for the Centre for European Policy Studies, the Central Bank of Malta and the European Commission. He is a doctoral researcher at the London School of Economics.</p>
          </div>
          <div className="mb-8 flex flex-col items-center">
            <img src={yohann} className="w-48 h-48 rounded-full object-cover mb-3"/>
            <h4 className="text-xl">Yohan Iddawela</h4>
            <h3 className="font-bold text-2xl">Director of Operations</h3>
            <p className="m-4 max-w-text">Yohan is a development economist who specialises in geographical information systems and spatial economics. He has previously worked as an economist for the Institute for State Effectiveness and in economic forecasting for the Australian Department of the Prime Minister and Cabinet. He is a doctoral researcher at the London School of Economics.</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={rebecca} className="w-48 h-48 rounded-full mr-2 object-cover mb-3"/>
            <h4 className="text-xl">Rebecca Mari</h4>
            <h3 className="font-bold text-2xl">Macroeconomist</h3>
            <p className="m-4 max-w-text">Rebecca is a macroeconomist who has previously worked for the Bank of England. She specialises in sovereign fiscal sustainability, public debt restructuring, and short and long-term macroeconomic forecasting. Prior to this she worked for Citigroup in London and the Central Bank of Poland. She is a doctoral researcher at the London School of Economics, where her research looks at constraints to economic development.</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={sandro} className="w-48 h-48 rounded-full mr-2 object-cover mb-3"/>
            <h4 className="text-xl">Sandro Provenzano</h4>
            <h3 className="font-bold text-2xl">Spatial Economist</h3>
            <p className="m-4 max-w-text">
Sandro is a spatial economist, who specialises in the use of high-resolution satellite imagery as well as natural language processing and machine learning. He holds an MSc in Economics and Economic Policy from Stockholm School of Economics and Science Po, and is a doctoral researcher at the London School of Economics. His doctoral research is focused on the determinants of economic development in Africa.
</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={sam} className="w-48 h-48 rounded-full mr-2 object-cover mb-3"/>
            <h4 className="text-xl">Sam Watts</h4>
            <h3 className="font-bold text-2xl">Legal Officer</h3>
            <p className="m-4 max-w-text">
Sam is 505’s Legal Officer. He is currently a Senior Crown Prosecutor for the UK Crown Prosecution Service. He was previously a Legal Officer for the Australian Federal Police. He is also a serial entrepreneur who has previously founded legal-tech and e-commerce businesses.
</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={mikkel} className="w-48 h-48 rounded-full mr-2 object-cover mb-3"/>
            <h4 className="text-xl">Mikkel Barslund</h4>
            <h3 className="font-bold text-2xl">
Senior Economic Advisor
</h3>
            <p className="m-4 max-w-text">
Mikkel is an economist with extensive experience in think tanks, government and academia. Over the past ten years his work has focused primarily on economic policies within the EU. His main expertise lies in economic modelling and econometric analysis. Mikkel has a keen interest in the effects of population ageing and holds a PhD in Economics from the University of Copenhagen.

</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={jan} className="w-48 h-48 rounded-full mr-2 object-cover mb-3"/>
            <h4 className="text-xl">Jan Stuckatz</h4>
            <h3 className="font-bold text-2xl">Associate Senior Data Scientist</h3>
            <p className="m-4 max-w-text">
Jan is a political economist who specializes in machine learning, natural language processing, and the analysis and visualization of big data. He is currently a research fellow at the Institute for Advanced Study in Toulouse where he works on money in politics, inequality, and trade policy. He holds a PhD in political science from the London School of Economics.
</p>
          </div>
        </div>
    </div>
      <img
        style={{filter: 'brightness(50%) blur(1px)'}}
        alt="background"
        className="absolute h-full w-full object-cover"
        src={bg2}
      />
    </section>
}


Team.propTypes = {height: PropTypes.number}
// ns23.domaincontrol.com
// ns24.domaincontrol.com



const Contact = () => {
      return <section className="flex-grow flex flex-col relative min-h-screen">
      <div className="mt-16 mx-auto z-10 text-white text-center flex-shrink">
        <h2 className="text-2xl md:text-4xl font-bold inline-block p-3">Contact Us</h2>

      </div>
        <a href="mailto:lars.ludolph@505economics.com "className="mx-auto text-xl md:text-2xl 2 p-2 z-10 text-white underline">Click to send email
            </a>
        <img
          style={{filter: 'brightness(70%) blur(1px)'}}
          alt="background"
          className="absolute h-full w-full"
          src={codeBg}
        />

      </section>
}

Contact.propTypes = {height: PropTypes.number}


function IndexPage() {

  return (
    <Layout
    >
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

    <Landing  />
    <About  />
    <WhatWeDo  />
    <Team  />
    <Contact  />


    </Layout>
  );
}

export default IndexPage;
