//Este alias CallBackError puede ser un error o nulo
type CallBackError = Error | null;

//CallBack recibe como parametro un error de tipo CallBackError y un response de tipo Object
type CallBack = (error: CallBackError, response: Object) => void;

type SendRequest = (callback: CallBack) => void

//void cuando la funcion no retorna nada (callback es del tipo CallBack)
//send request 
const sendRequest: SendRequest = (callback: CallBack): void => {
    if (callback) {
        callback(null, { message: 'Todo salio bien' });
    }
}