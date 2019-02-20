import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const universal = require(`${process.cwd()}/dist/server`).app;
console.log('index.ts ======> universal', universal);

export const ssr = functions.https.onRequest(universal);
console.log('index.ts ======> ssr', ssr);
