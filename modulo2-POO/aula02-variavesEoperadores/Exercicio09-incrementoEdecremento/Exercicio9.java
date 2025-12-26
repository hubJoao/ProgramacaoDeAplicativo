public class Exercicio9 {
    public static void main(String[] args) {
        int contador = 0;

        System.out.println("Valor inicial: " + contador);

        // Pós-incremento
        System.out.println("contador++: " + (contador++));
        System.out.println("Valor após: " + contador);
        System.out.println();

        // Pré-incremento
        System.out.println("++contador: " + (++contador));
        System.out.println("Valor após: " + contador);
        System.out.println();

        // Pós-decremento
        System.out.println("contador--: " + (contador--));
        System.out.println("Valor após: " + contador);
        System.out.println();

        // Pré-decremento
        System.out.println("--contador: " + (--contador));
        System.out.println("Valor após: " + contador);
    }
}