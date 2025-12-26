public class Exercicio03{
    public static void main (String[] args){
         int nota = 75;
        // int nota = 95;
        // int nota = 55;
        // int nota=50;

        

       // TODO: Classifique a nota
        if(nota>=90){
            System.out.println("A - Excelente");

        }else if(nota>=80){
            System.out.println("B - Bom");

        }else if(nota>=70){
            System.out.println("C- Sastifatório");

        }else if(nota>=60){
            System.out.println("D- Insuficiente ");

        }else{
            System.out.println("E- Reprovado");
        }


        // // Desafio extra --- 
        System.out.println("::::: Desafio extra :::::::");
        if(nota>=60){
            System.out.println("Aprovado");
        }else if(nota>=55){
            System.out.println("Fazer recuperação");
        }else{
            System.out.println("Está em risco");
        }
    }
}




