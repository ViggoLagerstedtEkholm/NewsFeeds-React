import Interceptor from "./Interceptor";
import {API} from "../Constants/Constants";

export const GetAllRSS = async () =>{
    const promise = Interceptor.get("/rss/get");
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

export const SaveRSS = async (RSS) =>{
    console.log(RSS);
    const promise = Interceptor.post("/rss/add", RSS);
    return promise.catch((error) => Promise.reject(error));
}

export const RemoveRSS = async (id) =>{
    let url = new URL(API + "/rss/remove");
    url.searchParams.append("id", id);

    const promise = Interceptor.post(url.toString());
    return promise.catch((error) => Promise.reject(error));
}
