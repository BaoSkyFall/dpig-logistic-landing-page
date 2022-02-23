// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBk383rMQbyYDZZpqY3yxcsYiqtIJbWIlw",
    authDomain: "dpig-logistic.firebaseapp.com",
    projectId: "dpig-logistic",
    storageBucket: "dpig-logistic.appspot.com",
    messagingSenderId: "378868996675",
    appId: "1:378868996675:web:136f75559558592959d2f6",
    measurementId: "G-KV0J0B66WZ"
  },
  sendGridConfig:{
    API_KEY:'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',
    template_id:'d-669eb6b3423f45b4948da943bc1edc8c'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
