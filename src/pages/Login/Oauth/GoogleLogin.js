import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      fetch(`http://url:8000/users/oauth/google?code=${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SOCIAL_LOGIN_SUCCESS') {
            localStorage.setItem('token', result.accessToken);
            localStorage.setItem('token', result.refreshToken);
            localStorage.setItem('nickname', result.nickname);

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

export default GoogleLogin;