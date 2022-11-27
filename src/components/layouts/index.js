import { React } from 'react';
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';

import Headers from './Headers';
import Footer from './Footer';

export default function Layout() {
    return(
        <>
          <Headers />
            <main><Outlet /></main>
          <Footer />
        </>
    )
}