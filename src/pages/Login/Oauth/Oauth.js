import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      fetch(`url?code=${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SOCIAL_LOGIN_SUCCESS') {
            localStorage.setItem('token', result.token);
            navigate('/');
          } else {
            alert('로그인 실패');
            navigate('/login');
          }
        });
    }
  }, []);

  return <div />;
};

export default Oauth;
