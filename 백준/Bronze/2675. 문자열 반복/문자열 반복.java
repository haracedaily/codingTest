import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        for(int i =0; i<cnt; i++){
            int r = sc.nextInt();
            String dt = sc.next();
            for(int j =0;j<dt.length();j++){
                System.out.print(String.valueOf(dt.charAt(j)).repeat(r));
            }
             System.out.println();
        }
    }
}