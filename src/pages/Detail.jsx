import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Details from './../components/details/Details';
import Loader from 'react-loader-spinner';
import SEO from './../SEO/SEO';

const Detail = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
      <div className='load'>
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }
  return (
    <div>
      <SEO title='Course Details' />
      <Header />
      <Details />
      <Footer />
    </div>
  );
};

export default Detail;
