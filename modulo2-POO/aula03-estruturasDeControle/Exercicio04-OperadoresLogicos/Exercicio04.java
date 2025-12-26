public class Exercicio04 {
    public static void main(String[] args) {
        int idade = 15;
        boolean temCarteira = true;
        boolean temCarro = true;

        //TODO: Pode dirigir? (idade >= 18 E tem carteira)
        if (idade >= 18 && temCarteira) {
            System.out.println("Pode dirigir");
        } else {
            System.out.println("Não pode dirigir");
        }

        //TODO: Pode sair? (idade >= 18 OU tem autorização)
        boolean temAutorizacao = false;
        if (idade >= 18 || temAutorizacao) {
            System.out.println("Pode sair");
        }else{
            System.out.println("Não pode sair");
        }

        //TODO: Não é menor? (NOT idade < 18)
        if (!(idade < 18)) {
            System.out.println("Não é menor de idade");
        }else{
            System.out.println("É menor de idade");
        }

   
        // Desafio Extra: Adicione verificações para:
        //  Pode alugar carro (idade >= 21 E tem carteira)
        //  Pode dirigir táxi (idade >= 25 E tem carteira E tem experiência)
        
        // Desafio extra
        if(idade>=21 && temCarteira){
            System.out.println("Pode alugar carro");
        }else{
            System.out.println("Não pode alugar carro");
        }
         
        boolean temExperiencia=true;
        if(idade>=25 && temCarteira && temExperiencia){
            System.out.println("Pode dirigir táxi");

        } else{
            System.out.println("Não pode dirigir táxi");
        }
    }
    
}