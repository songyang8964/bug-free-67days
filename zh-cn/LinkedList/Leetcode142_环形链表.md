**题目链接**: [LeetCode](https://leetcode.com/problems/linked-list-cycle-ii/description/)
**核心技巧**: **Tag**

## 🧠 解题思路
1.  Floyd判圈算法
2.  暴力法可以用HashSet: 遍历链表，把经过的每一个节点都存到一个集合（HashSet）中。
判断：每到一个新节点，就去集合里查一下：“我之前见过这个节点吗？”
如果见过，说明我们绕回来了，这个节点就是入环点。
如果走到 null 还没遇到重复的，说明没有环。
3. 数学推导实在太麻烦记不住，所以我只记住结论:
   1. 第一步（相遇）：快指针（一次走2步）、慢指针（一次走1步）从头开始跑。如果它们没相遇（快指针走到尽头），说明没环；如果相遇了，停下来。
   2. 第二步（重置）：把其中任意一个指针（比如快指针）直接扔回链表的头节点。
   3. 第三步（同步走）：两个指针现在都变成一次走1步。它们再次碰头的地方，就是入环点。

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java

public class _142_LinkedListCycle {
    public ListNode detectCycle(ListNode head) {
        // 如果链表为空或者只有一个节点, 就不可能有环
        if (head == null || head.next == null) {
            return null;
        }
        ListNode slow = head;
        ListNode fast = head;
        // 判断是否有环
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                // 寻找换的入口
                // 将fast重新指向头部
                fast = head;
                while (slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        return null;

    }
}






```