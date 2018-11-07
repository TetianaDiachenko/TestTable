import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  
}
const source_data = '[{"colorName": "red","hexValue": "#f00"},{"colorName": "green","hexValue": "#0f0"},{"colorName": "blue","hexValue": "#00f"},{"colorName": "cyan","hexValue": "#0ff"},{"colorName": "magenta","hexValue": "#f0f"},{"colorName": "yellow","hexValue": "#ff0"},{"colorName": "black","hexValue": "#000"}]',
data_obj = JSON.parse(source_data);

let data_table = '';

for (const index in data_obj) {
    if(index == 0) {
        data_table += '<table style="width:100%"><tr><th style="width:30%">Color name</th><th>Color HEX value</th></tr>';
    }
    data_table += `<tr><td>${data_obj[index].colorName}</td><td style="background-color:${data_obj[index].hexValue}">${data_obj[index].hexValue}</td></tr>`;
    if(index == data_obj.length - 1) {
        data_table += '</table>';
    }
}

document.body.innerHTML = data_table;
