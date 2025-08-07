import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int data = sc.nextInt();
        sc.close();
        int result = 0;
        for(int i=1;i<=data;i++){
            result += i;
        }
        System.out.println(result);
    }
}