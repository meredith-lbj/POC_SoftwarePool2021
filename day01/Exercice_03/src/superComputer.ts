import { isJSDocCallbackTag } from 'typescript';

type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};
function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
  if (err) {
    console.log(err.message);
    return err;
  }
  console.log(`Result: ${result}`);
  return result;
}

function superComputer(nb1: number, ope: string, nb2: number, cb: Callback): number | Error {
  switch (ope) {
    case '+':
      return cb(null, nb1 + nb2);
    case '-':
      return cb(null, nb1 - nb2);
    case '*':
      return cb(null, nb1 * nb2);
    case '/':
      if (nb2 === 0) {
        return cb(new Error('Division by 0'));
      }
      return cb(null, nb1 / nb2);
    case '%':
      if (nb2 === 0) {
        return cb(new Error('Division by 0'));
      }
      return cb(null, nb1 % nb2);
    default:
      return cb(new Error('Bad operator'));
  }
}

superComputer(9, '/', 3, callback);
