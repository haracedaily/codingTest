import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int cnt=sc.nextInt();
        int total=cnt*2-1;

        for (int i=1; i<=total; i++) {
            int stars=(i<=cnt)?(2*i-1):(2*(total-i)+1);
            int spaces=(total-stars)/2;

            System.out.println(" ".repeat(spaces) + "*".repeat(stars));
        }
    }
}