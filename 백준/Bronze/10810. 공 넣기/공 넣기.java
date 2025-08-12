import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int range = sc.nextInt();
        int[] answer = new int[cnt];
        for(int i=0;i<range;i++){
            int start = sc.nextInt();
            int end = sc.nextInt();
            int num = sc.nextInt();
            for(int j=start-1;j<end;j++){
                answer[j]=num;
            }
        }
        sc.close();
        for(int k = 0; k < answer.length; k++) {
            System.out.print(answer[k] + " ");
        }
    }
}