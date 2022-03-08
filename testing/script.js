// Creator: k6 Browser Recorder 0.6.2

import { sleep, group, check } from 'k6';
// eslint-disable-next-line import/no-unresolved
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    'logged in successfully': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default function main() {
  let response;

  group('page_1 - https://youthful-shirley-3dacfb.netlify.app/', () => {
    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/users',
      '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjcyNzU3MSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NzI3NTcxLCJleHAiOjE2NDY3MzExNzEsImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.QIZre73jBl2z61Yu3_fJ6fEnWEciBj1bhx1u_Lwu1D8HyHdZgxO0duGkg6pxW8Y2LKlvXfTRA7OccL4AAyqVD-X_FEJDNaYpFFROcrtBneGRLsYDLSLqzmT1nuP3bQn5_EEe2BY4qTDIFjv9O6Hi2dzIMY9FpJcqkRjA-GFVrrV97_4QcUE-h1RujvfvVTLTdGj01u510vKPUFruzRDYH88tWbDAVP1blFyjK43B5EyFcoZobLmJ4d7KoUC15NCGoebR4EkPQ8GaDPdCIULwUiTR_jb9SussnGpR6eKApdz8pMFo3Xk56RQMCNE0KIF4X_FtLLYNaFaQXyEkBS7Rew"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    console.log(
      `Response time was ${String(response.timings.duration)} ms`,
    );

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(8.5);

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/72',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(2.5);

    response = http.get(
      'https://c.daily.co/static/call-machine-object-bundle.js',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(0.5);

    response = http.get('https://gs.daily.co/rooms/check/quicktalk/Qtalk-01', {
      headers: {
        dnt: '1',
        'x-dailysessionid': 'e229435e-0b04-43f0-f2b5-5f7e796508c5',
        'sec-ch-ua':
          '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    });
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });

    response = http.options(
      'https://gs.daily.co/rooms/check/quicktalk/Qtalk-01',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'x-dailysessionid',
          'access-control-request-method': 'GET',
          origin: 'https://youthful-shirley-3dacfb.netlify.app',
          'sec-fetch-mode': 'cors',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(5.2);

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(9.3);

    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjcyNzU3MSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NzI3NTcxLCJleHAiOjE2NDY3MzExNzEsImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.QIZre73jBl2z61Yu3_fJ6fEnWEciBj1bhx1u_Lwu1D8HyHdZgxO0duGkg6pxW8Y2LKlvXfTRA7OccL4AAyqVD-X_FEJDNaYpFFROcrtBneGRLsYDLSLqzmT1nuP3bQn5_EEe2BY4qTDIFjv9O6Hi2dzIMY9FpJcqkRjA-GFVrrV97_4QcUE-h1RujvfvVTLTdGj01u510vKPUFruzRDYH88tWbDAVP1blFyjK43B5EyFcoZobLmJ4d7KoUC15NCGoebR4EkPQ8GaDPdCIULwUiTR_jb9SussnGpR6eKApdz8pMFo3Xk56RQMCNE0KIF4X_FtLLYNaFaQXyEkBS7Rew","name":"TEST-02","privacy":"public"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });

    response = http.options(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'content-type',
          'access-control-request-method': 'POST',
          origin: 'https://youthful-shirley-3dacfb.netlify.app',
          'sec-fetch-mode': 'cors',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(3.3);

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(21.9);

    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjcyNzU3MSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NzI3NTcxLCJleHAiOjE2NDY3MzExNzEsImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.QIZre73jBl2z61Yu3_fJ6fEnWEciBj1bhx1u_Lwu1D8HyHdZgxO0duGkg6pxW8Y2LKlvXfTRA7OccL4AAyqVD-X_FEJDNaYpFFROcrtBneGRLsYDLSLqzmT1nuP3bQn5_EEe2BY4qTDIFjv9O6Hi2dzIMY9FpJcqkRjA-GFVrrV97_4QcUE-h1RujvfvVTLTdGj01u510vKPUFruzRDYH88tWbDAVP1blFyjK43B5EyFcoZobLmJ4d7KoUC15NCGoebR4EkPQ8GaDPdCIULwUiTR_jb9SussnGpR6eKApdz8pMFo3Xk56RQMCNE0KIF4X_FtLLYNaFaQXyEkBS7Rew","name":"TEST-03","privacy":"public"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(1.4);

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(4.1);

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/73',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(4.8);

    response = http.get(
      'https://c.daily.co/static/call-machine-object-bundle.js',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });

    response = http.get('https://gs.daily.co/rooms/check/quicktalk/TEST-03', {
      headers: {
        dnt: '1',
        'x-dailysessionid': 'eee01a53-6a89-4753-8a00-129529696d9b',
        'sec-ch-ua':
          '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    });
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });

    response = http.options(
      'https://gs.daily.co/rooms/check/quicktalk/TEST-03',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'x-dailysessionid',
          'access-control-request-method': 'GET',
          origin: 'https://youthful-shirley-3dacfb.netlify.app',
          'sec-fetch-mode': 'cors',
        },
      },
    );
    check(response, {
      'is status 200': ({ status }) => (status && status === 200) || undefined,
    });
    sleep(10.5);

    response = http.get(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          dnt: '1',
          'sec-ch-ua':
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      },
    );
  });
  check(response, {
    'is status 200': ({ status }) => (status && status === 200) || undefined,
  });
}
