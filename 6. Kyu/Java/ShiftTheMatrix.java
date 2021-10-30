/*
Shift The Matrix... n times!

the |||clickbait||| was to get you in here.

You have a rectangular matrix called m.

here's what one 'shift' looks like:

  ['a','b','c','d']      ['h','a','b','c']
  ['1','2','3','4']  =>  ['d','1','2','3']
  ['c','o','d','e']      ['4','c','o','d']
  ['b','l','a','h']      ['e','b','l','a']
  
another!

  ['d','u','d','e']      ['g','d','u','d']
  ['i','m','c','o']  =>  ['e','i','m','c']
  ['d','i','n','g']      ['o','d','i','n']
  
another!

  ['h','i']      ['k','h']
  ['o','k']  =>  ['i','o']
  
*/
public class ShiftTheMatrix {

    public static char[][] shift(char[][]a, int n){
        for(int i = 0; i < n; i++){
            a = shiftArray(a);
        }

        return a;
    }

    public static char[][] shiftArray(char[][] a){


        if(a.length < 2){
            char temp = a[0][a[0].length-1];
            for(int i = a[0].length -1; i >= 1 ; i--){
                a[0][i] = a[0][i-1];
            }
            a[0][0] = temp;
        }
        else {
            char lastBeg = a[0][a[0].length - 1];
            for (int i = 0; i < a.length; i++) {
                if (i == 0) {
                    continue;
                } else {
                    char templast = a[i][a[i].length - 1];

                    for (int j = a[i].length - 1; j >= 1; j--) {
                        a[i][j] = a[i][j - 1];
                    }
                    a[i][0] = lastBeg;
                    lastBeg = templast;

                    if (i == a.length - 1) {
                        for (int j = a[i].length - 1; j >= 1; j--) {
                            a[0][j] = a[0][j - 1];
                        }
                        a[0][0] = lastBeg;
                    }
                }
            }
        }
        return a;
    }

}
