**题目链接**: [LeetCode](url)
**核心技巧**: **Tag**

## 🧠 解题思路
1.  暴力解法：使用两层循环。
第一层循环遍历每一个数 x。
第二层循环遍历 x 后面的每一个数 y。
检查 x + y 是否等于 target。
2.  对于 String 字符串，求长度用 .length() (方法)。
对于 List 集合，求长度用 .size() (方法)。
对于 数组 (Array)，求长度用 .length (属性)。这是 Java 的一个历史遗留的不一致点，死记硬背即可。
3. 我们通常用“接口”类型来声明变量（左边用 Map），用“实现类”来创建对象（右边用 HashMap）。这是 Java 编程的一个好习惯（多态性）:Map<Integer, Integer> map = new HashMap<>();
## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java
// 暴力解法
public class TwoSumBruteForce {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        // 第一层循环：选择第一个数
        for (int i = 0; i < n; i++) {
            // 第二层循环：选择第二个数
            // 注意：j 从 i + 1 开始，避免重复使用同一个元素，也避免重复计算
            for (int j = i + 1; j < n; j++) {
                // 判断两者之和
                if (nums[i] + nums[j] == target) {
                    // 找到答案，返回下标数组
                    return new int[]{i, j};
                }
            }
        }
        // 如果没有找到，抛出异常或返回空数组（根据题目要求，这里假设一定有解）
        return new int[]{}; 
    }
}


// Hashmap

public int[] twoSum(int[] nums, int target) {
         HashMap<Integer, Integer> map = new HashMap<>();
         for(int i = 0; i <nums.length; i++){
            int currentNum = nums[i];
            int complement = target - currentNum;
            if(map.containsKey(complement)){
                return new int[] { i, map.get(complement) };
            }
            map.put(currentNum, i);
         }
         return new int[]{};
        
    }

```