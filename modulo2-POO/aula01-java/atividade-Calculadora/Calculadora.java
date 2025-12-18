
import java.util.Scanner;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

public class Calculadora {

    // Métodos separados para cada operação
    public static double somar(double a, double b) {
        return a + b;
    }

    public static double subtrair(double a, double b) {
        return a - b;
    }

    public static double multiplicar(double a, double b) {
        return a * b;
    }

    public static double dividir(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Erro: divisão por zero não é permitida.");
        }
        return a / b;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Configuração de formatação para pt-BR e garantindo zero antes da vírgula
        Locale locale = new Locale("pt", "BR");
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(locale);
        symbols.setDecimalSeparator(',');
        symbols.setGroupingSeparator('.');

        // Padrão que garante ao menos um dígito inteiro e duas casas decimais
        DecimalFormat df = new DecimalFormat("#,##0.00", symbols);
        df.setMinimumIntegerDigits(1);
        df.setMinimumFractionDigits(2);
        df.setMaximumFractionDigits(2);

        int opcao;
        do {
            // Solicita os números
            System.out.print("\nDigite o primeiro número: ");
            double num1 = scanner.nextDouble();

            System.out.print("Digite o segundo número: ");
            double num2 = scanner.nextDouble();

            // Exibe o menu
            System.out.println("\n===== MENU =====");
            System.out.println("1 - Soma");
            System.out.println("2 - Subtração");
            System.out.println("3 - Multiplicação");
            System.out.println("4 - Divisão");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();

            double resultado = 0.0;
            boolean operacaoValida = true;

            // Switch para escolher a operação
            switch (opcao) {
                case 1:
                    resultado = somar(num1, num2);
                    System.out.println("Operação realizada com sucesso!");
                    break;

                case 2:
                    resultado = subtrair(num1, num2);
                    System.out.println("Operação realizada com sucesso!");
                    break;

                case 3:
                    resultado = multiplicar(num1, num2);
                    System.out.println("Operação realizada com sucesso!");
                    break;

                case 4:
                    try {
                        resultado = dividir(num1, num2);
                        System.out.println("Operação realizada com sucesso!");
                    } catch (ArithmeticException e) {
                        System.out.println(e.getMessage());
                        operacaoValida = false;
                    }
                    break;

                case 0:
                    System.out.println("Encerrando a calculadora. Até logo!");
                    break;

                default:
                    System.out.println("Opção inválida! Tente novamente.");
                    operacaoValida = false;
            }

            // Exibe o resultado formatado (com “guard” para garantir o zero)
            if (operacaoValida && opcao != 0) {
                String saida = df.format(resultado);
                if (saida.startsWith(",")) {  // caso extremo em que o locale/símbolos falhem
                    saida = "0" + saida;
                }
                System.out.println("Resultado: " + saida);
            }

        } while (opcao != 0);

        scanner.close();
    }
}
