public class Exercicio6 {
    public static void main(String[] args) {
        // Conversão automática (int → double)
        int numero = 10;
        double decimal = numero;
        System.out.println("int para double: " + decimal);

        // Casting (double → int)
        double preco = 19.99;
        int inteiro = (int) preco;
        System.out.println("double para int: " + inteiro);

        // String para int
        String texto = "25";
        int idade = Integer.parseInt(texto);
        System.out.println("String para int: " + idade);

        // int para String
        int numero2 = 42;
        String texto2 = String.valueOf(numero2);
        System.out.println("int para String: " + texto2);
    }
}