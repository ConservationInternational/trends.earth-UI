import { Observable } from 'rxjs/Observable';
import { ExecutionModel } from 'app/models/execution.model';
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Http } from "@angular/http";
import { ExecutionLogModel } from "app/models/execution-log.model";


@Injectable()
export class ExecutionService {

    constructor(private http:Http) {

    }

    getAll(date: string):Observable<ExecutionModel[]>{
        return this.http.get(`${environment.apiUrl}/api/v1/execution?include=script,user&updated_at=${date}`)
        .map(response => response.json()).map(body => body.data);
    }

    getByScript(slug):Observable<ExecutionModel[]>{
        return this.http.get(`${environment.apiUrl}/api/v1/script/${slug}/execution`)
        .map(response => response.json()).map(body => body.data);
    }

    downloadResults(id:string) {
      window.open(`${environment.apiUrl}/api/v1/execution/${id}/download-results`)
    }

    getLogs(executionId, lastLogId?): Observable<ExecutionLogModel[]>{
        return this.http.get(`${environment.apiUrl}/api/v1/execution/${executionId}/log${lastLogId ? `?last-id=${lastLogId}`:''}`)
        .map(response => response.json()).map(body => body.data);
    }
}
