import React from 'react';
import Container from 'components/Container';
import l from 'utils/translate';

import './index.scss';

const Footer = () => (
    <Container className="app__footer">
        <div className="app__footer-content">
            &copy; {l('Money manager')}
        </div>
    </Container>
);

export default Footer;