import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-around sticky top-0'>
            <div className='flex gap-4 text-xl'>
                <Link to='/dash_chart'>Dash Chart</Link>
                <Link to="/bar_chart">Bar Chart</Link>
                <Link to="/area_chart">Area Chart</Link>
                <Link to="/pie_chart">Pie Chart</Link>
                <Link to="/scatter_chart">Scatter Chart</Link>
                <Link to="/redar_chart">Rader Chart</Link>
            </div>
        </div>
    );
};

export default Navbar;