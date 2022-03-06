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
    //http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

export default function main() {
  let response

  group('page_1 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/', function () {
    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/users',
      '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjQ2MTI3NCwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NDYxMjc0LCJleHAiOjE2NDY0NjQ4NzQsImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.N0qLYSiBo4FExA0pi6lgWRJdvKmzU49DJyLUNRAECsADjvpTnDq0_cFBxj-4n92Sbx9CnbnBsVPzCM43-nK_a71qST5JJcoDCDJtTw0lBaw5zLFJfXPfNRGNTqE80lPXB1RH2fFxbN3ySBBNcOnISm-GLD0UuCdPSV512GboVGbP9C8N2P972nj7YpOdpMAMrpsnYQWwg6ZhBt34WwzQ7rS5r605BlMnlohYQF0IO0p5wOdSo_hkcQpYK3jCUuLE54JuC1yVYL05fKB454GGpABKjfr89aVAzconhrQV-VjfFsGOa0SxyMBnlvQv8DKBjQKj4AHq7yGSwkkBuJ_feg"}',
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

    response = http.options('https://guarded-plains-83208.herokuapp.com/api/v1/users', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'POST',
        origin: 'http://localhost:3000',
        'sec-fetch-mode': 'cors',
      },
    })
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
    sleep(1.1)

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
    sleep(8.7)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/34', {
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
    sleep(0.5)

    response = http.post(
      'https://partyline.daily.co/.netlify/functions/token',
      '{"properties":{"room_name":"TEST-01"}}',
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
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(1.5)

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
    sleep(16.7)

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
    sleep(1.1)

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
    sleep(1.8)
  })

  group('page_2 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/quicktalks/new', function () {
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
    sleep(14.9)

    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks',
      '{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkYzBlNmRmOTgyN2EwMjA2MWU4MmY0NWI0ODQwMGQwZDViMjgyYzAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUElZVVNIIFdBREhXQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHajk4WDRNUzlOWWE0a18weHJfdzE3N0Nwa2tlOUt5cXI5U1Q2cHZzX009czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXV0aGVudGljYXRpb24tOTI4ZDYiLCJhdWQiOiJyZWFjdC1hdXRoZW50aWNhdGlvbi05MjhkNiIsImF1dGhfdGltZSI6MTY0NjQ2MTI3NCwidXNlcl9pZCI6IjNWOVpLMUlpcDlUenh1blRLeG5LRmwxVURPMTIiLCJzdWIiOiIzVjlaSzFJaXA5VHp4dW5US3huS0ZsMVVETzEyIiwiaWF0IjoxNjQ2NDYxMjc0LCJleHAiOjE2NDY0NjQ4NzQsImVtYWlsIjoicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTIyODczNzEyNDI5NDk0NzE5NjgiXSwiZW1haWwiOlsicGl5dXNoLndhZGh3YS43MDNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.N0qLYSiBo4FExA0pi6lgWRJdvKmzU49DJyLUNRAECsADjvpTnDq0_cFBxj-4n92Sbx9CnbnBsVPzCM43-nK_a71qST5JJcoDCDJtTw0lBaw5zLFJfXPfNRGNTqE80lPXB1RH2fFxbN3ySBBNcOnISm-GLD0UuCdPSV512GboVGbP9C8N2P972nj7YpOdpMAMrpsnYQWwg6ZhBt34WwzQ7rS5r605BlMnlohYQF0IO0p5wOdSo_hkcQpYK3jCUuLE54JuC1yVYL05fKB454GGpABKjfr89aVAzconhrQV-VjfFsGOa0SxyMBnlvQv8DKBjQKj4AHq7yGSwkkBuJ_feg","name":"ABHISHEK-01","privacy":"public"}',
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

    response = http.options('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'POST',
        origin: 'http://localhost:3000',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(1.6)
  })
  check(response, {
    'is status 200': (r) => ((r && r.status === 200) || r === null),
  });

  group('page_3 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/home/', function () {
    response = http.get('https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/home/', {
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
    sleep(3)

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
    sleep(1.1)

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
    sleep(6.4)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/36', {
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
    sleep(0.5)

    response = http.post(
      'https://partyline.daily.co/.netlify/functions/token',
      '{"properties":{"room_name":"ABHISHEK-01"}}',
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
    check(response, {
      'is status 200': (r) => ((r && r.status === 200) || r === null),
    });
    sleep(0.9)

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
    sleep(8.9)

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

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/11', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/12', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/8', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(1.1)

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
    sleep(3.4)
  })

  group('page_4 - https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/logout/', function () {
    response = http.get('https://quicktalk-mr80eulb5-piyushwadhwa7.vercel.app/logout/', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
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
