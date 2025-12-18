import java.util.Scanner;
public class ConversorTemp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a temperatura em Celsius: ");
        double celsius = scanner.nextDouble();

        double fahrenheit = (celsius * 9/5) + 32;

        System.out.println(celsius + "°C equivalem a " + fahrenheit + "°F");
    }
}