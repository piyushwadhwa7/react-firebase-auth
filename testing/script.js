// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import { check } from 'k6';
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
  stages: [
    { duration: '1m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '1m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    'http_req_duration': ['p(99)<3500'], // 99% of requests must complete below 1.5s
    'logged in successfully': ['p(99)<3500'], // 99% of requests must complete below 1.5s
  },
};



export default function main() {
  let response

  const vars = {}

  group('page_1 - http://localhost:3000/', function () {
    response = http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc',
      '{"requestUri":"https://react-authentication-928d6.firebaseapp.com/__/auth/handler?state=AMbdmDmwIUvvgSml-oG8KhxfQkT_7WgAT-NE5UQK4yx0CEyweJRUh86hhoabiQFEmQjgNfeEAKC3CSh9ECaj_8IEIJMF97eYodxid8RE_-Q-18C2eHK8yccUasCISAWk7fhgwFuiB3uxqFLUnmFdTxi6qL7KAfJDB76mST64nca78jpzI0vqQprj5h58tdIbCbLkNZqOnTnxPkpiaIo4MVbP-gZnkouM8x0qTJRMwt77I6dgJqg3ijWH0oRnwyd8VJCOe9kFDyznXkWXVlyYpq-uvg2iBKSxyKyIHpjOLci1gQJ85ARBbJrpYEePFTzBO14LDMYio_RFGh0Gk5sIaY3x-PCE&code=4%2F0AX4XfWi7AOEhSzBFOGBFsgnwakvClw5kMpBzptz1h1gMtnqDk1wpKBuDndCEbj0UzlFyZA&scope=email%20profile%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=none","sessionId":"rvkqWIGpwrbwzH5Acf8-yRmdUbA","returnSecureToken":true,"returnIdpCredential":true}',
      {
        headers: {
          'content-type': 'application/json',
          dnt: '1',
          'x-client-version': 'Chrome/JsCore/9.6.6/FirebaseCore-web',
          'x-firebase-gmpid': '1:448825619649:web:4ae619687c29e6c3a29040',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    vars['idToken'] = jsonpath.query(response.json(), '$.idToken')[0]
    check(response, {
      'is status 200': (r) => r.status === 200,
    });

    sleep(0.6)

    response = http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc',
      `{"idToken":"${vars['idToken']}"}`,
      {
        headers: {
          'content-type': 'application/json',
          dnt: '1',
          'x-client-version': 'Chrome/JsCore/9.6.6/FirebaseCore-web',
          'x-firebase-gmpid': '1:448825619649:web:4ae619687c29e6c3a29040',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    sleep(0.5)

    response = http.post(
      'https://guarded-plains-83208.herokuapp.com/api/v1/users',
      `{"key":"AIzaSyA3_xQelqAt31v9g5pFZFJZKJlbauqNvjc","token":"${vars['idToken']}"}`,
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
      'is status 200': (r) => r.status === 200,
    });

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(1.1)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/1', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/4', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/5', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

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
    sleep(4.6)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks/28', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://partyline.daily.co/.netlify/functions/token',
      '{"properties":{"room_name":"ROOM-014"}}',
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
    sleep(2.2)

    response = http.get('https://c.daily.co/static/call-machine-object-bundle.js', {
      headers: {
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(0.5)

    response = http.get('https://gs.daily.co/rooms/check/quicktalk/ROOM-014', {
      headers: {
        dnt: '1',
        'x-dailyjointoken':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDYyMjY1MzEsInIiOiJST09NLTAxNCIsIm8iOnRydWUsImQiOiJhNzU3YzZkYi00ZTMwLTQxOWItYjYzNy1jOGFhOGU2MWYxOGEiLCJpYXQiOjE2NDYyMjU5MzF9.bf0urtaAnFMq_LzO33F7yvNyTDB_v9vPHkoiU1-5HME',
        'x-dailysessionid': '159094bd-2c52-4edc-8b66-2babc49cf96f',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://gs.daily.co/rooms/check/quicktalk/ROOM-014', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'x-dailyjointoken,x-dailysessionid',
        'access-control-request-method': 'GET',
        origin: 'https://youthful-shirley-3dacfb.netlify.app',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(7.2)

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/quick_talks', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/1', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/4', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://guarded-plains-83208.herokuapp.com/api/v1/users/5', {
      headers: {
        accept: 'application/json, text/plain, */*',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

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
    sleep(0.8)

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
  })
}