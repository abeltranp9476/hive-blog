import { useState } from 'react'
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Login } from '@mui/icons-material';

import { MyLink } from '../mylink';
import { useSign } from '../../hooks/useSign'

export const Header = (props) => {
    const { sections, title } = props;

    const [anchorElUser, setAnchorElUser] = useState(null);

    const { userName, logout } = useSign()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        logout()
        handleCloseUserMenu()
    }

    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Link href={'https://ecency.com/@' + import.meta.env.VITE_HIVE_ACCOUNT + '/rss.xml'}>
                    <Button size="small">
                        RSS
                    </Button>
                </Link>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    <MyLink to="/">
                        {title}
                    </MyLink>
                </Typography>
                {
                    userName ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Opciones de usuarios">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={userName} src={'https://images.ecency.com/webp/u/' + userName + '/avatar/medium'} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Salir</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    ) : (
                        <Link href={'https://hivesigner.com/oauth2/authorize?client_id=abeltranp9476&redirect_uri=' + import.meta.env.VITE_APP_URL + '/sign' + '&scope=vote,comment'}>
                            <Button variant="outlined" size="small">
                                <Login />
                            </Button>
                        </Link>
                    )
                }

            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections.map((section, id) => (
                    <MyLink key={id}
                        to={section.url}
                        key={section.title}
                    >
                        <Link
                            sx={{ p: 1, flexShrink: 0 }}
                            variant="body2"
                        >
                            {section.title}
                        </Link>
                    </MyLink>
                ))}
            </Toolbar>
        </>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;