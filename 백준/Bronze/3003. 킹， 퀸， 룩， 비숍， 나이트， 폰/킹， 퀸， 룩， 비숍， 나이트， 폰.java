import java.util.*;

public class Main{
    public static void main(String[] arg){
            Scanner sc = new Scanner(System.in);
            int king = sc.nextInt();
            int queen = sc.nextInt();
            int rook = sc.nextInt();
            int bishop = sc.nextInt();
            int knight = sc.nextInt();
            int pawn = sc.nextInt();
        king = 1-king;
        queen = 1-queen;
        rook = 2-rook;
        bishop = 2-bishop;
        knight = 2-knight;
        pawn = 8-pawn;
        System.out.println(king+" "+queen+" "+rook+" "+bishop+" "+knight+" "+pawn);
    }
}