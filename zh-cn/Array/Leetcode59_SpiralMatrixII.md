**题目链接**: [LeetCode]([url](https://leetcode.com/problems/spiral-matrix-ii/))
**核心技巧**: **Tag**

## 🧠 解题思路
1.  Step 1
2.  Step 2

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java
import java.util.Arrays;

public class SpiralMatrixII {

    public int[][] generateMatrix(int n) {
        // 创建一个 n x n 的二维数组
        int[][] matrix = new int[n][n];
        
        // 定义四个边界
        int left = 0;
        int right = n - 1;
        int top = 0;
        int bottom = n - 1;
        
        // num 是我们要填充的数字，从 1 开始
        int num = 1;
        // 目标是填满 n*n 个数字
        int target = n * n;

        // 循环条件：只要当前填充的数字小于等于目标值，就继续
        while (num <= target) {
            
            // 1. 从左到右填充 (在 top 这一行)
            // 此时列索引 i 从 left 移动到 right
            for (int i = left; i <= right; i++) {
                matrix[top][i] = num;
                num++;
            }
            // 这一行填完了，上边界向下移动一格
            top++;

            // 2. 从上到下填充 (在 right 这一列)
            // 此时行索引 i 从 top 移动到 bottom
            for (int i = top; i <= bottom; i++) {
                matrix[i][right] = num;
                num++;
            }
            // 这一列填完了，右边界向左移动一格
            right--;

            // 3. 从右到左填充 (在 bottom 这一行)
            // 此时列索引 i 从 right 移动到 left
            for (int i = right; i >= left; i--) {
                matrix[bottom][i] = num;
                num++;
            }
            // 这一行填完了，下边界向上移动一格
            bottom--;

            // 4. 从下到上填充 (在 left 这一列)
            // 此时行索引 i 从 bottom 移动到 top
            for (int i = bottom; i >= top; i--) {
                matrix[i][left] = num;
                num++;
            }
            // 这一列填完了，左边界向右移动一格
            left++;
        }
        
        return matrix;
    }

    // 主函数，用于测试
    public static void main(String[] args) {
        SpiralMatrixII solution = new SpiralMatrixII();
        int n = 3;
        int[][] result = solution.generateMatrix(n);
        
        // 打印结果
        System.out.println("n = " + n + " 的螺旋矩阵：");
        for (int[] row : result) {
            System.out.println(Arrays.toString(row));
        }
    }
}






```