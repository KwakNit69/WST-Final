import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Hardcode these just to test the connection
private popUrl = 'https://cors-anywhere.herokuapp.com/https://population.un.org/dataportalapi/api/v1/data/indicators/1/locations/608?startYear=2025&endYear=2026';  private token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyb21lb29tYWxheTY5QGdtYWlsLmNvbSIsImVtYWlsIjoicm9tZW9vbWFsYXk2OUBnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6InJvbWVvb21hbGF5NjlAZ21haWwuY29tIiwibmJmIjoxNzc0OTczMjE2LCJleHAiOjE4MDY1MDkyMTYsImlhdCI6MTc3NDk3MzIxNiwiaXNzIjoiZG90bmV0LXVzZXItand0cyIsImF1ZCI6ImRhdGEtcG9ydGFsLWFwaSJ9.xn-U8oR4a3CrErxYd6paEp-N_gpLiM_Bv9qFTBARIOk'; // Use your real token here

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': this.token });

return this.http.get<any>(this.popUrl, { headers }).pipe(
map(response => {
  if (response && response.data && response.data.length > 0) {
    const latest = response.data[response.data.length - 1];
    
    // Convert thousands to actual count
    const totalPop = Math.floor(latest.value * 1000); 
    const voterEst = Math.floor(totalPop * 0.63);

    return { total: totalPop, voters: voterEst };
  }
  throw new Error('API Data Mismatch');
})
);
  }
}