/*
Invert a binary tree. Example:

From:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
To:

     4
   /   \
  7     2
 / \   / \
9   6 3   1 
*/
public class InvertBinaryTree {
    public static TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return root;
        }
        if (root.left != null || root.right != null) {
            TreeNode temp = root.left;
            root.left = root.right;
            root.right = temp;
            invertTree(root.left);
            invertTree(root.right);
        }
        return root;
    }
}