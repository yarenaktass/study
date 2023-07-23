import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { error } from "console";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

const sleep = () => new Promise(resolve => setTimeout(resolve,500));

axios.defaults.baseURL = 'http://localhost:5000/api/';

 const responeseBody = (response: AxiosResponse) =>response.data;
 axios.interceptors.response.use(async response => {
   await sleep();
   return response;
 },(error: AxiosError) => {
    const {data,status}= error.response! as AxiosResponse ;
    switch(status){
      case 400:
         if(data.errors){
            const modelStateErrors: string[] =[];
            for(const key in data.errors){
               if(data.errors[key]){
                  modelStateErrors.push(data.errors[key])
               }
            }
            throw modelStateErrors.flat();
         }
         toast.error(data.title);
         break;
         case 401:
            toast.error(data.title);
         break;
         case 500:
          router.navigate('/server-error',{state:{error:data}});
            break;
         default:
            break;

    }
   return Promise.reject(error.response);
 })



 const requests = {
    get: ( url: string) => axios.get(url).then(responeseBody),
    post: ( url: string, body: {}) => axios.post(url, body).then(responeseBody),
    put: ( url: string, body: {}) => axios.put(url,body).then(responeseBody),
    delete: ( url: string) => axios.delete(url).then(responeseBody),
 }

 const Catalog={
    list:() => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
 }


 const TestErrors={
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unautorized'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
 }
 const agent = {
    Catalog,
    TestErrors
 }



 export default agent;