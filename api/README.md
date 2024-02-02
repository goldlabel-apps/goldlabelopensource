## Goldlabel API

#### Firebase Functions 2nd generation API

> Implementing this API alongside 


```javascript
{
  "name": "2nd-api",
  "description": "Cloud Functions 2nd gen, delivering more events, compute and control",
  "scripts": {
    "start": "cd api && npm run serve",
    "watch": "cd api && npm run build:watch",
    "lint": "clear && cd api && npm run lint",
    "deploy": "cd api && npm run deploy",
    "test": "echo \"LGTM\" && exit 0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/listingslab-software/2nd-api"
  }
}

```

## Firestore CRUD

> From within an async function you can all the following CRUD operations using Typed options

### Create
```javascript
    import {crud_c} from "../"
    
    export type CRUD_C_OPTIONS = {
        collection: string;
        doc: any
    };

    const myAsyncFunc = async (options: CRUD_C_OPTIONS) =>  {
        await crud_c (options)
        return true
    }
```
### Read
```javascript
    import {crud_r} from "../"
    
    export type CRUD_R_OPTIONS = {
        collection: string
        fbId?: string // Firebase Document Id
        limit?: number 
        orderBy?: string 
        sort?: "ASC"|"DESC" 
    };

    const myAsyncFunc = async (options: CRUD_C_OPTIONS) =>  {
        await crud_r (options)
        return true
    }
```
### Update 
```javascript
    import {crud_r} from "../"
    
    export type CRUD_U_OPTIONS = {
        collection: string
        fbId?: string
        doc: any
    };

    const myAsyncFunc = async (options: CRUD_U_OPTIONS) =>  {
        await crud_u (options)
        return true
    }
```
### Delete 
```javascript
    import {crud_d} from "../"
    
    export type CRUD_D_OPTIONS = {
        collection: string
        fbId?: string
    };

    const myAsyncFunc = async (options: CRUD_U_OPTIONS) =>  {
        await crud_u (options)
        return true
    }
```


## Nodemailer

https://nodemailer.com/message/

Common fields

from
The email address of the sender. All email addresses can be plain ‘sender@server.com’ or formatted '“Sender Name” sender@server.com', see Address object for details

to
Comma separated list or an array of recipients email addresses that will appear on the To: field

cc
Comma separated list or an array of recipients email addresses that will appear on the Cc: field

bcc
Comma separated list or an array of recipients email addresses that will appear on the Bcc: field

subject
The subject of the email

text
The plaintext version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘/var/data/…'})

html
The HTML version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘http://…'})

attachments
An array of attachment objects (see Using attachments for details). Attachments can be used for embedding images as well.

