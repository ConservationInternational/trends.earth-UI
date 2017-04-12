
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Http } from "@angular/http";


@Injectable()
export class ScriptService {

    constructor(private http:Http) {

    }

    getAll(){
        return this.http.get(`${environment.apiUrl}/api/v1/script`)
        .map(response => response.json()).map(body => body.data);
    }

    getLogs(scriptId, lastLogId?){
        return this.http.get(`${environment.apiUrl}/api/v1/script/${scriptId}/log${lastLogId ? `?last-id=${lastLogId}`:''}`)
        .map(response => response.json()).map(body => body.data);
    }

    createScript(name, file) {
      let formData:FormData = new FormData();
      formData.append('file', file, file.name);

      return this.http.post(`${environment.apiUrl}/api/v1/script`, formData).map(response => response.json());
    }

}