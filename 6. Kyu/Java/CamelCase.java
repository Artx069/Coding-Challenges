import java.util.Arrays;
import java.util.stream.Collectors;

public class CamelCase {
    public static String camelCase(String str) {
        return str.isEmpty() ? "" : Arrays.stream(str.trim().replaceAll("[ ]+", " ").split(" ")).map(x -> x.substring(0,1).toUpperCase() + x.substring(1)).collect(Collectors.joining("")).trim();
    }
}
