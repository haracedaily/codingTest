import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int result = sc.nextInt();
        int cnt = sc.nextInt();
        for(int i=0;i<cnt;i++){
            int price = sc.nextInt();
            int count = sc.nextInt();
            result-=price*count;
        }
        if(result==0){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
        
    }
}