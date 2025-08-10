import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < cnt; i++) {
            int num = sc.nextInt();
            if (num < min) {
                min = num;
            }
            if (num > max) { // else if 아님
                max = num;
            }
        }

        sc.close();
        System.out.println(min + " " + max);
    }
}