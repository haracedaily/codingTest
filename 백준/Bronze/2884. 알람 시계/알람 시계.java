import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();
        sc.close();
        if(m>=45){
            System.out.println(h+" "+(m-45));
        }else{
            if(h>0){
                h--;
                m=m+15;
            System.out.println(h+" "+m);
            }
            else{
                h=23;
                m=m+15;
            System.out.println(h+" "+m);
            }
        }
    }
    
}