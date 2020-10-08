function isEmpty(str: string): boolean {
    let spaceCount = str.length - str.replace(" ", "").length;
    return str == null || spaceCount == str.length;}
export class Loja {

    constructor(public nome_loja: string, public logradouro: string, public numero: number, public complemento: string,
        public bairro: string, public municipio: string, public estado: string, public cep: string,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public dados_loja(): string {
        // Implemente aqui
        if (isEmpty(this.nome_loja)) {
            throw new Error(`O campo nome da loja é obrigatório`);
          }
          if(isEmpty(this.logradouro)){
            throw new Error(`O campo logradouro do endereço é obrigatório`);
          }
          let num = this.numero + ""
          if(this.numero == 0){
            num = "s/n";
          }
          if(isEmpty(this.municipio)){
            throw new Error(`O campo município do endereço é obrigatório`);
          }
          if(isEmpty(this.estado)){
            throw new Error(`O campo estado do endereço é obrigatório`);
          }
          if(isEmpty(this.cnpj)){
            throw new Error(`O campo CNPJ da loja é obrigatório`);
          }
          if(isEmpty(this.inscricao_estadual)){
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
          }
        
          var part2 = `${this.logradouro}, ${num}`;
          if (! isEmpty (this.complemento)){
              part2 += ` ${this.complemento}`;
            }
          var part3 = "";
          if (! isEmpty (this.bairro)){
              part3 += `${this.bairro} - `;
          }
          part3 += `${this.municipio} - ${this.estado}`;
          
          var part4 = "";
          if (! isEmpty (this.cep)){
              part4 = `CEP:${this.cep}`;
            }
          if (! isEmpty(this.telefone)){
              if (! isEmpty(part4)){
                part4 += ` `;
              }
              part4 += `Tel ${this.telefone}`;
            }
          if (! isEmpty(part4)){
              part4 += `\n`;
            }
          var part5 = "";
          if (! isEmpty(this.observacao)){
              part5 += `${this.observacao}`;
            }
          let output = `${this.nome_loja}\n`;
          output += `${part2}\n`;
          output += `${part3}\n`;
          output += `${part4}`;
          output += `${part5}\n`;
          output += `CNPJ: ${this.cnpj}\n`;
          output += `IE: ${this.inscricao_estadual}\n`;
        return output;
    }
}