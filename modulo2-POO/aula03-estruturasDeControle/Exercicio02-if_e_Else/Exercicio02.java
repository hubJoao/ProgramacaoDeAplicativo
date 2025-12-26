public class Exercicio02{
    public static void main(String[] args){
       // int numero=10;
       // int numero=7;
        int numero=-5;

        //TODO: Verifique se é par ou ímpar
        if(numero%2 == 0){
            System.out.println(":::: O número "+numero+" é par");

        }else{ 
           System.out.println(":::: O número "+numero+" é impar");
        }

        // Número é maior que 100
        if(numero>=100){
            System.out.println("::::: O número "+numero+" é maior que 100");
        }else{
            System.out.println("::::: Não, o número "+numero+" não é maior que 100");
        }
        // Número é múltiplo de 5
        if(numero%5 ==0){
            System.out.println("::::: O número "+numero+" é multiplo de 5");
        }

    
    }
}