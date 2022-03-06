// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 50 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
    //{ duration: '5m', target: 20 }, // stay at 60 users for 10 minutes
    //{ duration: '3m', target: 40 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
    //{ duration: '2m', target: 40 }, // stay at 100 users for short amount of time (peak hour)
    //{ duration: '3m', target: 50 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
    //{ duration: '10m', target: 50 }, // continue at 60 for additional 10 minutes
    //{ duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export const option = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<2000'], // 95% of requests should be below 200ms
  },
};


export default function main() {
  let response

  group('page_1 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/', function () {
    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/users',
      '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjU1NzkxOSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NTU3OTE5LCJleHAiOjE2NDY1NjE1MTksImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.YyplFM1ImqNEfti9yBUmtmTFmOhZL4ZDEtQ8dMALR3ZFMI2X1C39IT1hcrP2mgQauJ0NIVk-v7rBr3eB4azx_gtyCWlq8rTIs1eEPVCdV3-Gnl50Rwvo3kuuEN5PNS7UtnWRkS93cmX3bzlQdUB4HOuZpz7zCMLkk1w0nb0O3gKuwMt__pmbv-vN1yAN-FwVi83YrfKGHB5_ejzmML3jKK5AnSHFFdZth6D8K4uWC-fzuakzGPj50xIwWpPm76DxyJeOCgKwdn4-4-YWnsvVTzBG9yE7jZKCiJZGh7LOFbaey808t9vBOHGFgsXi_c4-WkQxKsj8t5t7QsE1DwNGVg"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(2)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(0.6)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/1', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/4', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/5', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/6', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/7', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/2', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/11', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/12', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/8', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(1)

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14Gj98X4MS9NYa4k_0xr_w177Cpkke9Kyqr9ST6pvs_M=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14GjBxdNRC9VSx3gCZKVm6hnk0S7IFvnWt6NvYKHpMA=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14GjJjS-dSKcAaqHiEa8EUsKSFTtLSsR8xv5DpMWS=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwPvZLCo7jLXyBbxOmhTnO6OQ2tyWdrf_LPUcXl=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwKzKU4WG8b9gGjfcX_pMtys7HzqOW0CXwz2Gv1=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwnX_u_JqYs0d-xO6Royo0Rjf5XqUL6Ouyk4wco=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJycDx_notTp4qQadS0TprbHhPtmicuYAqeSV8Go=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwnrfhJX6Yi1rhkf5eNv5Ep_z_lt604C-FJhV7q=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(5.3)
  })

  group(
    'page_2 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/quicktalks/new',
    function () {
      response = http.get('https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/quicktalks/new', {
        headers: {
          dnt: '1',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })
      check(response, {
        'is status 200': (r) => ((r && r.status === 200) || r === null),
      });

      response = http.get(
        'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        {
          headers: {
            dnt: '1',
            origin: 'https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      check(response, {
        'is status 200': (r) => ((r && r.status === 200) || r === null),
      });
      sleep(5.3)

      response = http.post(
        'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
        '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjU1NzkxOSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NTU3OTE5LCJleHAiOjE2NDY1NjE1MTksImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.YyplFM1ImqNEfti9yBUmtmTFmOhZL4ZDEtQ8dMALR3ZFMI2X1C39IT1hcrP2mgQauJ0NIVk-v7rBr3eB4azx_gtyCWlq8rTIs1eEPVCdV3-Gnl50Rwvo3kuuEN5PNS7UtnWRkS93cmX3bzlQdUB4HOuZpz7zCMLkk1w0nb0O3gKuwMt__pmbv-vN1yAN-FwVi83YrfKGHB5_ejzmML3jKK5AnSHFFdZth6D8K4uWC-fzuakzGPj50xIwWpPm76DxyJeOCgKwdn4-4-YWnsvVTzBG9yE7jZKCiJZGh7LOFbaey808t9vBOHGFgsXi_c4-WkQxKsj8t5t7QsE1DwNGVg","name":"","privacy":"public"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      check(response, {
        'is status 200': (r) => ((r && r.status === 200) || r === null),
      });
      sleep(1)

      response = http.post(
        'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
        '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjU1NzkxOSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NTU3OTE5LCJleHAiOjE2NDY1NjE1MTksImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.YyplFM1ImqNEfti9yBUmtmTFmOhZL4ZDEtQ8dMALR3ZFMI2X1C39IT1hcrP2mgQauJ0NIVk-v7rBr3eB4azx_gtyCWlq8rTIs1eEPVCdV3-Gnl50Rwvo3kuuEN5PNS7UtnWRkS93cmX3bzlQdUB4HOuZpz7zCMLkk1w0nb0O3gKuwMt__pmbv-vN1yAN-FwVi83YrfKGHB5_ejzmML3jKK5AnSHFFdZth6D8K4uWC-fzuakzGPj50xIwWpPm76DxyJeOCgKwdn4-4-YWnsvVTzBG9yE7jZKCiJZGh7LOFbaey808t9vBOHGFgsXi_c4-WkQxKsj8t5t7QsE1DwNGVg","name":"","privacy":"public"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      check(response, {
        'is status 200': (r) => ((r && r.status === 200) || r === null),
      });

      response = http.post(
        'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
        '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjU1NzkxOSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NTU3OTE5LCJleHAiOjE2NDY1NjE1MTksImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.YyplFM1ImqNEfti9yBUmtmTFmOhZL4ZDEtQ8dMALR3ZFMI2X1C39IT1hcrP2mgQauJ0NIVk-v7rBr3eB4azx_gtyCWlq8rTIs1eEPVCdV3-Gnl50Rwvo3kuuEN5PNS7UtnWRkS93cmX3bzlQdUB4HOuZpz7zCMLkk1w0nb0O3gKuwMt__pmbv-vN1yAN-FwVi83YrfKGHB5_ejzmML3jKK5AnSHFFdZth6D8K4uWC-fzuakzGPj50xIwWpPm76DxyJeOCgKwdn4-4-YWnsvVTzBG9yE7jZKCiJZGh7LOFbaey808t9vBOHGFgsXi_c4-WkQxKsj8t5t7QsE1DwNGVg","name":"","privacy":"public"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      check(response, {
        'is status 200': (r) => ((r && r.status === 200) || r === null),
      });

      response = http.post(
        'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
        '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjU1NzkxOSwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NTU3OTE5LCJleHAiOjE2NDY1NjE1MTksImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.YyplFM1ImqNEfti9yBUmtmTFmOhZL4ZDEtQ8dMALR3ZFMI2X1C39IT1hcrP2mgQauJ0NIVk-v7rBr3eB4azx_gtyCWlq8rTIs1eEPVCdV3-Gnl50Rwvo3kuuEN5PNS7UtnWRkS93cmX3bzlQdUB4HOuZpz7zCMLkk1w0nb0O3gKuwMt__pmbv-vN1yAN-FwVi83YrfKGHB5_ejzmML3jKK5AnSHFFdZth6D8K4uWC-fzuakzGPj50xIwWpPm76DxyJeOCgKwdn4-4-YWnsvVTzBG9yE7jZKCiJZGh7LOFbaey808t9vBOHGFgsXi_c4-WkQxKsj8t5t7QsE1DwNGVg","name":"","privacy":"public"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      check(response, {
        'is status 200': (r) => ((r && r.status === 200) || r === null),
      });
      sleep(1.8)
    }
  )

  group('page_3 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/home', function () {
    response = http.get('https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/home', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', {
      headers: {
        dnt: '1',
        origin: 'https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 304': (r) => ((r && r.status === 304) || r === null),
    });
    sleep(2.5)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(0.6)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/1', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/4', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/5', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/6', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/7', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/2', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/11', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/12', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/8', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(1)

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14Gj98X4MS9NYa4k_0xr_w177Cpkke9Kyqr9ST6pvs_M=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14GjBxdNRC9VSx3gCZKVm6hnk0S7IFvnWt6NvYKHpMA=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14GjJjS-dSKcAaqHiEa8EUsKSFTtLSsR8xv5DpMWS=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwPvZLCo7jLXyBbxOmhTnO6OQ2tyWdrf_LPUcXl=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwKzKU4WG8b9gGjfcX_pMtys7HzqOW0CXwz2Gv1=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwnX_u_JqYs0d-xO6Royo0Rjf5XqUL6Ouyk4wco=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJycDx_notTp4qQadS0TprbHhPtmicuYAqeSV8Go=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwnrfhJX6Yi1rhkf5eNv5Ep_z_lt604C-FJhV7q=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(3.5)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/42', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.post(
      'https://partyline.daily.co/.netlify/functions/token',
      '{"properties":{"room_name":"Ij57Ml1oer1PaZPmDp4I"}}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    sleep(1.4)

    response = http.get('https://c.daily.co/static/call-machine-object-bundle.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(0.5)

    response = http.get('https://gs.daily.co/rooms/check/quicktalk/Ij57Ml1oer1PaZPmDp4I', {
      headers: {
        dnt: '1',
        'x-dailyjointoken':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDY1NTg1NDYsInIiOiJJajU3TWwxb2VyMVBhWlBtRHA0SSIsIm8iOnRydWUsImQiOiJhNzU3YzZkYi00ZTMwLTQxOWItYjYzNy1jOGFhOGU2MWYxOGEiLCJpYXQiOjE2NDY1NTc5NDZ9.05yHRN1g7hT_DyMrWefwR8EPyrb2yN2WvthmXN1uRwA',
        'x-dailysessionid': '28e0aa0f-ea00-4eff-b7dd-470410bf18ad',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.options(
      'https://gs.daily.co/rooms/check/quicktalk/Ij57Ml1oer1PaZPmDp4I',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'x-dailyjointoken,x-dailysessionid',
          'access-control-request-method': 'GET',
          origin: 'https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(17.7)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/1', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/4', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/5', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/6', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/7', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/2', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/11', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/12', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/8', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(1.2)

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14Gj98X4MS9NYa4k_0xr_w177Cpkke9Kyqr9ST6pvs_M=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14GjBxdNRC9VSx3gCZKVm6hnk0S7IFvnWt6NvYKHpMA=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AOh14GjJjS-dSKcAaqHiEa8EUsKSFTtLSsR8xv5DpMWS=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwPvZLCo7jLXyBbxOmhTnO6OQ2tyWdrf_LPUcXl=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwKzKU4WG8b9gGjfcX_pMtys7HzqOW0CXwz2Gv1=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwnX_u_JqYs0d-xO6Royo0Rjf5XqUL6Ouyk4wco=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJycDx_notTp4qQadS0TprbHhPtmicuYAqeSV8Go=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get(
      'https://lh3.googleusercontent.com/a/AATXAJwnrfhJX6Yi1rhkf5eNv5Ep_z_lt604C-FJhV7q=s96-c',
      {
        headers: {
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(8.5)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/33', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://c.daily.co/static/call-machine-object-bundle.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://gs.daily.co/rooms/check/quicktalk/New_quicktalk_wasd', {
      headers: {
        dnt: '1',
        'x-dailysessionid': '4aae2e20-2cd0-4f18-ab00-963dcdf052cd',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.options('https://gs.daily.co/rooms/check/quicktalk/New_quicktalk_wasd', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'x-dailysessionid',
        'access-control-request-method': 'GET',
        origin: 'https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app',
        'sec-fetch-mode': 'cors',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(8.4)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/1', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/4', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/5', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/6', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/7', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/2', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/11', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/12', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/8', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(2.9)
  })

  group('page_4 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/logout', function () {
    response = http.get('https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/logout', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    response = http.get('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', {
      headers: {
        dnt: '1',
        origin: 'https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
  })
  check(response, {
    'is status 200': (r) => ((r && r.status === 200) || r === null),
  });
}