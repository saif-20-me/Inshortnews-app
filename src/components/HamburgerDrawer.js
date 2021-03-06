import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import { createtheme, ThemeProvider, useMediaQuery } from '@mui/material';
import categories from '../data/category';







export default function SwipeableTemporaryDrawer(setCategory) {
    const [state, setState] = React.useState({
        left: false,
        // top: false,
        // bottom: false,
        // right: false,
    });

    /* for theme of drwer */
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // const theme = React.useMemo(
    //     () =>
    //         createTheme({
    //             palette: {
    //                 mode: prefersDarkMode ? 'dark' : 'light',
    //             },
    //         }),
    //     [prefersDarkMode],
    // );

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>Categories</ListItem>
            </List>
            <Divider />
            <List>
                {categories.map((text, index) => (
                    <ListItem style={{ height: 38, borderRadius: 3 }} button key={text} onClick={() => setCategory(text)}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    /* to  change the drawer option from left to any orientation- 
    change left : right, top, bottom*/
    return (
        <div>

            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </Button>
                {/* <ThemeProvider Theme={theme}> */}
                <SwipeableDrawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>

                {/* </ThemeProvider> */}
            </React.Fragment>

        </div>
    );
}