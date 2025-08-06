import java.util.*;

public class Main{
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a=sc.nextInt();
        String b=sc.next();
        int answer = Integer.parseInt(b)*a;
        for (int i = b.length()-1; i >= 0; i--) {
           int res = Character.getNumericValue(b.charAt(i));
            System.out.println(res*a);
        }
        System.out.println(answer);
        sc.close();
	}
}