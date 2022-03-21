/*

*/
public class FileNameExtractor {
    public static String extractFileName(String dirtyFileName) {
        return dirtyFileName.replaceAll("[0-9]+_", "").replaceAll(".[a-zA-Z0-9]+$", "");
    }
}
