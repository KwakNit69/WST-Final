import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Use "as any" to stop TypeScript from complaining about the 'empty' object
  private env = environment as any; 
  private popUrl = this.env.unApiUrl;

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    const headers = new HttpHeaders({ 
      'Authorization': this.env.unToken 
    });

    return this.http.get<any>(this.popUrl, { headers }).pipe(
    map(response => {
      if (response && response.data && response.data.length > 0) {
        // Get the latest record (2026)
        const latestRecord = response.data[response.data.length - 1];
        
        // UN Population values are in THOUSANDS. 
        // We multiply by 1000 to get the full national count.
        const totalPopulation = latestRecord.value * 1000; 
        
        // Philippines voting-age population (18+) is ~63%
        const estimatedVoters = Math.floor(totalPopulation * 0.63);

        return {
          total: totalPopulation,
          voters: estimatedVoters
        };
      }
      throw new Error('No data found');
    })
  );
}
}