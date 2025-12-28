public class Exercicio05{
    public static void main(String[] args){
        
       
        

        //TODO: Classifique como adulto ou menor
        int idade=25;
        String categoria = (idade>=18)? "Adulto":"Menor";
        System.out.println("Categoria: "+ categoria);

         //TODO: Classifique como par ou ímpar
         int numero=25;
         String tipo = (idade%2 ==0)? " Par ":" Impar";
         System.out.println("Tipo:"+tipo);

         //TODO: Calcule desconto
         double preco=100;
         double desconto = (preco<50)? preco*0.10 : 0;
         
         System.out.println("Desconto de R$: "+desconto);


        //#Desafio Extra: Use ternário para:     
          
       // Classificar como jovem (< 30) ou adulto
        int idade2=35;
        String faixaEtaria = (idade2<30)?"Jovem":"Adulto";
        System.out.println("Faixa etária: "+faixaEtaria);

       // Classificar como positivo, negativo ou zero
        int numero2 = 0;
        String negativoPositivo=(numero2<0 )?"Negativo":(numero2>0)?"Positivo":"zero";
        System.out.println("o nunero é: "+negativoPositivo);
       

       // Calcular taxa de juros baseada em valor
       double precoVenda=40;
       double taxa=(precoVenda<80)?(precoVenda/80)*100:0;
       System.out.println("a Taxa de desconto foi de: "+taxa+" %");



    }
}