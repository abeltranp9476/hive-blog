import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { MyLink } from '../mylink';

export const Header = (props) => {
    const { sections, title, userName } = props;

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
                        <>
                            {userName}
                        </>
                    ) : (
                        <Link href={'https://hivesigner.com/oauth2/authorize?client_id=abeltranp9476&redirect_uri=' + import.meta.env.VITE_APP_URL + '/sign' + '&scope=vote,comment'}>
                            <Button variant="outlined" size="small">
                                Autenticarse
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