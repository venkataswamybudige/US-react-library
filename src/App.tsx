import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/Components/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Components/Carousel';
import { Heros } from './layouts/HomePage/Components/Heros';
import { LibraryServices } from './layouts/HomePage/Components/LibraryServices';
import { Footer } from './layouts/HomePage/Components/Footer';
import { HomePage } from './layouts/HomePage/Homepage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const  App = ()  => {
  return (
    <div>
   {/* <HomePage/> */}
    <SearchBooksPage/>
    </div>
  );
}
