import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        StringBuffer sb = new StringBuffer(str);
        String reversedStr = sb.reverse().toString();

        if(str.equals(reversedStr)){
            System.out.println(1);
        }else{
            System.out.println(0);
        }
    }
}