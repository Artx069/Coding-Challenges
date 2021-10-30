import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;
public class FindTheUniqueNumber {

    public static void main(String[] args) {
        System.out.println(findUniq(new double[]{0, 0, 0.55, 0, 0 } ));
    }
    
    public static double findUniq(double arr[]) {
      List<Double> arrayList = DoubleStream.of(arr).boxed().collect(Collectors.toCollection(ArrayList::new));
      return (double)arrayList.stream().filter(x -> arrayList.indexOf(x) == arrayList.lastIndexOf(x)).toArray()[0];
    }

}
