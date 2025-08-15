import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String data = sc.next();
        int idx = sc.nextInt();
        System.out.println(data.charAt(idx-1));
    }
}