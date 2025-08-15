import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int bucket = sc.nextInt();
        int cnt = sc.nextInt();
        int[] bucketList = new int[bucket];
        for(int i=0; i<bucket; i++){
            bucketList[i]=i+1;
        }
        for(int i=0; i<cnt; i++){
            int start = sc.nextInt()-1;
            int end = sc.nextInt()-1;
            while(start<end){
                int num = bucketList[start];
                bucketList[start] = bucketList[end];
                bucketList[end] = num;
                start++;
                end--;
            }
        }
        sc.close();
        for(int i=0;i<bucket;i++){
            System.out.print(bucketList[i]+" ");
        }
        
    }
}