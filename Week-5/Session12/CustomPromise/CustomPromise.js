class CustomPromise {
    constructor(executor) {
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.onFulfilledCallbacks.length > 0) {
          const callback = this.onFulfilledCallbacks.shift();
          callback(value);
        }
      };
  
      const reject = (reason) => {
        if (this.onRejectedCallbacks.length > 0) {
          const callback = this.onRejectedCallbacks.shift();
          callback(reason);
        }
      };
  
      executor(resolve, reject);
    }
  
    then(onFulfilled, onRejected) {
      return new CustomPromise((resolve, reject) => {
        const onFulfilledCallback = (value) => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        };
  
        const onRejectedCallback = (reason) => {
          if (onRejected) {
            try {
              const result = onRejected(reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(reason);
          }
        };
  
        this.onFulfilledCallbacks.push(onFulfilledCallback);
        this.onRejectedCallbacks.push(onRejectedCallback);
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    static resolve(value) {
      return new CustomPromise((resolve) => {
        resolve(value);
      });
    }
  
    static reject(reason) {
      return new CustomPromise((resolve, reject) => {
        reject(reason);
      });
    }
  }
  