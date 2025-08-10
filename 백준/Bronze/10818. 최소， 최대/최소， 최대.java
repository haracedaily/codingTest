import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int min = 1000001;
        int max = -1000001;
        for(int i = 1; i<=cnt; i++){
            int num = sc.nextInt();
            if(num<min){
                min = num;
            }
            if(num>max){
                max = num;
            }
        }
        sc.close();
        System.out.println(min+" "+max);
    }
}