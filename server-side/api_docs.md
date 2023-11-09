# API Docs News

## Endpoints

List of available endpoints

- `GET/`
- `POST/register`
- `POST/login`
- `GET/news`
- `POST/favorites`
- `GET/favorites`
- `GET/user`
- `POST/generate-midtrans-token`
- `POST/status-user`


### 1. GET/

Description

> for checking server has been running

Response
- _200 - Ok_

- body

```json
    "Hello News World -----> RY-Project <-----!"
```

### 2. POST/register

Description

> register user to database

Request

- body

```json 
    {
        "firstName": string, 
        "lastName": string, 
        "email": string, 
        "password": string, 
        "phoneNumber": string, 
        "address": string
    }
```

Response
- _201 - Created_

_Body_

```json
    {
        "id": number,
        "email": string,
        "status": {
            "id": number,
            "UserId": number,
            "updatedAt": datestring,
            "createdAt": datestring,
            "status": string,
            "expiredAt": datestring
        }
    }
```

- _400 - Bad Request_

_Body_

```json
    {
       "message": "<field> is required"
    }
```

### 3. POST/login

Description

> login user to database

Request

- body

```json 
    {

        "email": string, 
        "password": string, 
    }
```

Response
- _200 - Ok_

_Body_

```json
    {
       "access_token": "<access_token"
    }
```

- _400 - Bad Request_

_Body_

```json
    {
       "message": "<field> is required"
    }
```

### 4. GET/news

Description

> get data news from 3 rd party API (newsapi.org)

Request

- query

```json 
    {
        "page": number, 
        "filter": string, 
    }
```

Response
- _200 - Ok_

_Body_

```json
    {
        "status": string,
        "totalResults": number,
        "articles": [
            {
                "source": {
                    "id": number,
                    "name": string
                },
                "author": string,
                "title": string,
                "description": string,
                "url": string,
                "urlToImage":string,
                "publishedAt": datestring,
                "content": string
        }
    }
```

- _500 - Internal error server_


### 5. POST/favorites

Description

> create new data to favorites table 

Request

- body

```json 
    {
        "author": string, 
        "title": string, 
        "description": string, 
        "url": string, 
        "urlToImage": string, 
        "publishedAt": datestring, 
        "content": string, 
        "UserId": number
    }
```

Response
- _201 - Created_

_Body_

```json
    {
        "author": string, 
        "title": string, 
        "description": string, 
        "url": string, 
        "urlToImage": string, 
        "publishedAt": datestring, 
        "content": string, 
        "UserId": number
    }
```
- _500 - Internal error server_

### 6. GET/favorites

Description

> get data from favorites table 

Response
- _200 - Ok_

_Body_

```json
    [
        {
            "id": number,
            "author": string,
            "title": string,
            "description": string,
            "url": string,
            "urlToImage": string,
            "publishedAt": datestring,
            "content": string,
            "UserId": 1,
            "createdAt": datestring,
            "updatedAt": datestring
        }
    ]
```
- _500 - Internal error server_

### 7. GET/user

Description

> get data from user table 

Response
- _200 - Ok_

_Body_

```json
    {
        "id": number,
        "firstName": string,
        "lastName": string,
        "email": string,
        "phoneNumber": string,
        "address": string,
        "createdAt": datestring,
        "updatedAt": datestring,
        "statusUser": {
            "id": number,
            "status": string,
            "expiredAt": datestring,
            "UserId": number,
            "createdAt": datestring,
            "updatedAt": datestring
        }
    }
```

### 8. POST/generate-midtrans-token

Description

> generate token midtrans from 3rd party api

Response
- _201 - Created_

_Body_

```json
    {
        "token": string,
        "redirect_url": string
    }
```

### 9. PATCH/status-user

Description

> update column status from statusUser table

Response
- _200 - Ok_

_Body_

```json
    {
        "Status user has been updated from free to <status>"
    }
```

### Global error

### response
- _500 - Internal Server Error_

_body_
```json
{
    "status" : 500,
    "message" : "Internal server error"
}
```

- _400 - Bad Request_

_body_
```json
{
    "status" : 400,
    "message" : "<err.errors[0].message>"
}
```

- _400 - Bad Request_

_body_
```json
{
    "status" : 400,
    "message" : "Email is required"
}
```

- _400 - Bad Request_

_body_
```json
{
    "status" : 400,
    "message" : "Password is required"
}
```

- _401 - Unauthorized_

_body_
```json
{
    "status" : 401,
    "message" : "Invalid email and password"
}
```

- _404 - Not Found_

_body_
```json
{
    "status" : 404,
    "message" : "Data not found"
}
```

- _400 - Bad Request_

_body_
```json
{
    "status" : 400,
    "message" : "You already premium"
}
```

- _400 - Bad Request_

_body_
```json
{
    "status" : 400,
    "message" : "<err.ApiResponse.error_messages[0]>"
}
```