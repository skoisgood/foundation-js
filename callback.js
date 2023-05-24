const callMe = () => {
  console.log("hello from call back function");
};

const greeting = (callBack) => {
  console.log("hello world");
  callBack();
};

greeting(callMe);
