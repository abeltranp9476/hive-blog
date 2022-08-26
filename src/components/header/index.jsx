import * as React from 'react';

import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { MyLink } from '../mylink';

export const Header = (props) => {
    const { sections, title } = props;

    return (
        <React.Fragment>
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
                <Link href={'https://ecency.com/@' + import.meta.env.VITE_HIVE_ACCOUNT + '/posts'}>
                    <Button variant="outlined" size="small">
                        Perfil
                    </Button>
                </Link>
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
        </React.Fragment>
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