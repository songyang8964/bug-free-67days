**题目链接**: [LeetCode]([url](https://leetcode.com/problems/remove-linked-list-elements/))
**核心技巧**: **Tag**

## 🧠 解题思路
1.  只要题目中涉及到头节点可能发生变化，或者需要构建一个新链表时，无脑使用dummyHead
2.  DummyHead的值一般取-1或者0, 因为不计入结果链表中
3.  将DummyHead指向原来的Head
4.  删除操作可以这么写cur.next = cur.next.next; 还可以找一个temp
5.  我在最后return的时候犯了一个错误，我的代码return head, 但是实际上应该return dummyNode.next, 因为head的值可能就为val, 被删除了

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyNode = new ListNode(-1);
        dummyNode.next = head;
        ListNode cur = dummyNode;
        while (cur.next!=null){
            // 删除之后不要让cur移动，因为下一个节点可能也是要删除的节点，如果这时候让cur移动，可能就跳过这个节点了
            if(cur.next.val == val){
                cur.next = cur.next.next;
            }else {
                cur= cur.next;
            }
        }
        return dummyNode.next;

    }
}




```