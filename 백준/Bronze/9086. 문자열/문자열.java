import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        for(int i=0; i<cnt; i++){
            String dt = sc.next();
            System.out.println(dt.charAt(0)+""+dt.charAt(dt.length()-1));
        }
    }
}