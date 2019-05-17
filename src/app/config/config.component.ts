import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from 'src/app/config/config.service'

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
  styleUrls: ['./config.component.css']
})
export class ConfigComponent{
  
  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) { }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
      console.log(this.config)
  }

}
