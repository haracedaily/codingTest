import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int answer = 0;
        int cnt = sc.nextInt();
        int[] ary = new int[cnt];
        for(int i=0;i<cnt;i++){
            ary[i]=sc.nextInt();
        }
        int compare = sc.nextInt();
        for(int i=0;i<cnt;i++){
            if(ary[i]==compare){
                answer++;
            }
        }  
        System.out.println(answer);
    }
}