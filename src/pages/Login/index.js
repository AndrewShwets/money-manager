import React from 'react';

import Container from 'components/Container';
import l from 'utils/translate';

import './index.scss';

const Login = () => (
    <Container className="app__login">
        {l('Login')}
    </Container>
);

export default Login;