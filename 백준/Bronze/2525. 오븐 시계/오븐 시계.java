import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();
        int plus = sc.nextInt();
        m= m+plus;
        if(m>=60){
            h= h+(m/60);
                if(h>23){
                    h=h%24;
                }
            m=m%60;
            System.out.println(h+" "+m);
        }else{
            System.out.println(h+" "+m);
        }
    }
}