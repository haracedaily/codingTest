import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String data = sc.next();
        char div = 'a';
        for(int i=0;i<26;i++){
           System.out.print(data.indexOf(div)+" ");
            div+=1;
        }
        
    }
}