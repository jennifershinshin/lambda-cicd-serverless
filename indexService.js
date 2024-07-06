export default class HelloMomo {

  constructor() {}

  myFunc() {
    console.log('hi from service');
    return {
      statusCode: 200,
      body: 'Hi momo',
    };
  }
}