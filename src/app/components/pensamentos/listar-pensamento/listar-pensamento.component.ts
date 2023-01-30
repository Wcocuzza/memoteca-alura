import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {conteudo: 'Teste1', autoria: 'wcocuzza', modelo: 'modelo1'},
    {conteudo: 'Teste2', autoria: 'wcocuzza', modelo: 'modelo2'},
    {conteudo: 'Teste3', autoria: 'wcocuzza', modelo: 'modelo3'},
    {conteudo: 'Teste3', autoria: 'wcocuzza', modelo: 'modelo3'}
  ];
}
