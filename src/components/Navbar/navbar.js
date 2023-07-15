import { useState } from 'react';
import logo from '../../assets/images/UNBK-removebg-preview.png';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Navbar () {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <nav className='h-20 flex align-center justify-between shadow-md'>
            <img className='object-contain bg-blend-color-burn w-40 h-35 ml-10' src={logo} alt='unbk logo' />
            <div className='w-96 flex justify-around items-center mr-10 font-extrabold'> 
                <div>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText/> PROGRAMS
                        { open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} className='fixed' timeout="auto" unmountOnExit>
                        <List className='bg-slate-100 w-40 h-40' component="div" disablePadding>
                            <ListItemText className='pl-1' /> UNBK PRO
                            <ListItemText /> UNBK LIFT
                            <ListItemText /> UNBK SWEAT
                            <ListItemText /> UNBK CLASSIC
                        </List>
                    </Collapse>
                </div>
                <a href='#'>TEAM</a>
                <a href='#'>FAQ</a>
                <a href='#'>MY ACCOUNT</a>
            </div>    
        </nav>
    );
};

export default Navbar;
