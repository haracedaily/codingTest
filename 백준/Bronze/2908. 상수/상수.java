import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int[] A = new int[3];
        int[] B = new int[3];
        for (int i=2;i>=0;i--) {
            int div = (int) Math.pow(10, i);
            A[i] = a / div;
            B[i] = b / div;
            a %= div;
            b %= div;
        }
        int numA = A[0] * 100 + A[1] * 10 + A[2];
        int numB = B[0] * 100 + B[1] * 10 + B[2];
        System.out.println(Math.max(numA, numB));
    }
}