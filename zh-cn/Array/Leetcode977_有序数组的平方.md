# 000. Title (Easy)

**题目链接**: [LeetCode]([url](https://leetcode.com/problems/squares-of-a-sorted-array/description/))
**核心技巧**: **双指针(对撞指针)**

## 🧠 解题思路
1.  这道题想原地排序的话可以用Java的Arrays.sort()，但是这个api基于快排，时间复杂度为nlogn,看看有没有办法优化到n
2.  使用对撞指针, 并且额外开辟一个新数组
3.  CPU 时间往往比内存空间更宝贵， 所以牺牲一点空间复杂度是值得的

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java

    public int[] sortedSquares(int[] nums) {
        int[] result = new int[nums.length];
        int left = 0;
        int right = nums.length - 1;
        // 再定义一个指针，指向新数组的最后一个元素
        int finalIndex = nums.length - 1;
        while (left <= right) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];
            if (leftSquare > rightSquare) {
                result[finalIndex] = leftSquare;
                left++;
            } else {
                result[finalIndex] = rightSquare;
                right--;
            }
            finalIndex--;

        }
        return result;
    }

```