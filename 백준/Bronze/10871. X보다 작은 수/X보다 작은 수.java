import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int div = sc.nextInt();
        String answer = "";
        for(int i = 1; i<=cnt; i++){
            int q = sc.nextInt();
            if(q<div){
                answer+=(q+" ");
            }
        }
        sc.close();
        System.out.println(answer);
    }
}