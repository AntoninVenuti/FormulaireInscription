import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service'
import { Client } from './Client'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  providers: [ClientService],
  styleUrls: ['./client.component.css']
})
export class ClientComponent{

  error: any;
  client: Client;
  clients: Client[];


  constructor(private clientService: ClientService) { }

  showClient() {
    this.clientService.getClient()
      .subscribe(
        (data: Client) => this.client = { ...data},
        error => this.error = error
      );
      console.log(this.client)
  };

  add(email: string, firstName: string, lastName: string): void {
    console.log("a")

  const newClient: Client = { email, firstName, lastName } as Client;
  this.clientService.addClient(newClient)
  .subscribe(client => this.clients.push(client));
  }

}
