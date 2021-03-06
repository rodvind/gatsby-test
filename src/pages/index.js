import React from 'react';
import { Link } from 'gatsby'

// import Footer from '../components/footer'
// import Header from '../components/header'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home"/>
      <h1>Hello</h1>
      <h2>I'm Rodvin, a full-stack developer living in beautiful Calgary</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )

  // return (
  //   <div>
  //     <Header />
  //     <h1>Hello</h1>
  //     <h2>I'm Rodvin, a full-stack developer living in beautiful Calgary</h2>
  //     {/* <p>Need a developer? <a href="/contact">Contact me.</a></p> */}
  //     <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
  //     <Footer />
  //   </div>
  // )
}

export default IndexPage
