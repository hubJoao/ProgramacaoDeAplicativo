public class Exercicio10 {
    public static void main(String[] args) {
        // Sem parênteses (segue precedência)
        int resultado1 = 2 + 3 * 4;
        System.out.println("2 + 3 * 4 = " + resultado1);  // 14

        // Com parênteses (força ordem)
        int resultado2 = (2 + 3) * 4;
        System.out.println("(2 + 3) * 4 = " + resultado2);  // 20

        // Mais complexo
        int resultado3 = 10 + 5 * 2 - 3;
        System.out.println("10 + 5 * 2 - 3 = " + resultado3);  // 17

        // Com parênteses
        int resultado4 = (10 + 5) * (2 - 3);
        System.out.println("(10 + 5) * (2 - 3) = " + resultado4);  // -15
    }
}